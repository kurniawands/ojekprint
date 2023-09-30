const mysql = require("mysql2/promise");

export const POST = async (request) => {
  const { username, name, password, phone, address, email } =
    await request.json();

  try {
    const conn = await mysql.createConnection({
      host: "localhost",
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
    });

    const [results, fields] = await conn.execute(
      "INSERT INTO `provider` (`providerusername`, `providername`, `password`, `phone`, `address`, `email`) VALUES (?, ?, ?, ?, ?, ?)",
      [username, name, password, phone, address, email]
    );

    conn.end();

    return new Response(JSON.stringify(results), { status: 200 });
  } catch (error) {
    return new Response(error, {
      status: 500,
    });
  }
};
