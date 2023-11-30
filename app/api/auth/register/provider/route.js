const mysql = require("mysql2/promise");
import { hash } from "bcrypt";

export const POST = async (request) => {
  const { username, name, password, phone, address, email } =
    await request.json();

  const hashedPassword = await hash(password, 10);

  try {
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
      "PREPARE registerprov FROM 'INSERT INTO `provider` (`providerusername`, `providername`, `password`, `phone`, `address`, `email`) VALUES (?, ?, ?, ?, ?, ?)'"
    );
    await conn.query(`SET @a = "${username}"`);
    await conn.query(`SET @b = "${name}"`);
    await conn.query(`SET @c = "${hashedPassword}"`);
    await conn.query(`SET @d = "${phone}"`);
    await conn.query(`SET @e = "${address}"`);
    await conn.query(`SET @f = "${email}"`);

    const [results, fields] = await conn.query(
      "EXECUTE registerprov USING @a, @b, @c, @d, @e, @f"
      // [username, name, hashedPassword, phone, address, email]
    );

    conn.end();

    return new Response(JSON.stringify(results), { status: 200 });
  } catch (error) {
    return new Response(error, {
      status: 500,
    });
  }
};
