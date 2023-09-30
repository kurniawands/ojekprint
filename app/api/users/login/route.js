const mysql = require("mysql2/promise");

export const POST = async (request) => {
  const { username, password } = await request.json();

  try {
    const conn = await mysql.createConnection({
      host: "localhost",
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
    });

    const [results, fields] = await conn.execute(
      "SELECT EXISTS (SELECT `email`, `password` FROM `user` WHERE username = ? AND password = ?)",
      [username, password]
    );

    conn.end();

    return new Response(JSON.stringify(results), { status: 200 });
  } catch (error) {
    return new Response(error, {
      status: 500,
    });
  }
};
