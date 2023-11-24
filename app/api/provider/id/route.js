const mysql = require("mysql2/promise");

export const POST = async (request) => {
  const { providerid } = await request.json();

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
      "PREPARE providerid FROM 'SELECT `providername`, `address` FROM `provider` WHERE `providerid` = ?'"
    );
    await conn.query(`SET @a = ${providerid}`);

    const [results, fields] = await conn.query(
      "EXECUTE providerid USING @a"
      // [providerid]
    );

    conn.end();

    return new Response(JSON.stringify(results), { status: 200 });
  } catch (error) {
    return new Response(error, {
      status: 500,
    });
  }
};
