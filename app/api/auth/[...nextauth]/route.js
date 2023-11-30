import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
const mysql = require("mysql2/promise");

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      credentials: {
        username: {},
        password: {},
      },
      async authorize(credentials, req) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)
        // console.log(credentials);

        const conn = await mysql.createConnection({
          host: process.env.TIDB_HOST,
          port: process.env.TIDB_PORT,
          user: process.env.TIDB_USER,
          password: process.env.TIDB_PASSWORD,
          database: process.env.TIDB_DATABASE,
          ssl: {
            minVersion: "TLSv1.2",
            rejectUnauthorized: true,
          },
        });

        await conn.query(
          "PREPARE login FROM 'SELECT * FROM `user` WHERE `username` = ?'"
        );
        await conn.query(`SET @a = "${credentials?.username}"`);
        const [results, fields] = await conn.query(
          "EXECUTE login USING @a"
          // [username]
        );

        conn.end();

        const user = results[0];

        const passwordCorrect = await compare(
          credentials?.password || "",
          user.password
        );

        // console.log({ passwordCorrect });

        if (passwordCorrect) {
          return {
            id: user.userid,
            username: user.username,
          };
        }

        return false;

        // const res = await fetch("/your/endpoint", {
        //   method: "POST",
        //   body: JSON.stringify(credentials),
        //   headers: { "Content-Type": "application/json" },
        // });
        // const user = await res.json();

        // If no error and we have user data, return it
        // if (res.ok && user) {
        //   return user;
        // }
        // Return null if user data could not be retrieved
        // return null;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
