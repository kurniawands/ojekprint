const mysql = require("mysql2/promise");

export const POST = async (request) => {
  const { username, password } = await request.json();

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
      "PREPARE login FROM 'SELECT * FROM `user` WHERE `username` = ?'"
    );
    await conn.query(`SET @a = "${username}"`);
    const [results, fields] = await conn.query(
      "EXECUTE login USING @a"
      // [username]
    );

    const user = results[0];

    // console.log(user.password);

    conn.end();

    return new Response(JSON.stringify(results), { status: 200 });
  } catch (error) {
    return new Response(error, {
      status: 500,
    });
  }
};
