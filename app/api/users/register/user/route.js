const mysql = require("mysql2/promise");

export const POST = async (request) => {
  const { username, name, password, phone, address, instansi } =
    await request.json();

  try {
    const conn = await mysql.createConnection({
      host: "localhost",
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
    });

    const [results, fields] = await conn.execute(
      "INSERT INTO `user` (`username`, `name`, `password`, `phone`, `address`, `instansi`) VALUES (?, ?, ?, ?, ?, ?)",
      [username, name, password, phone, address, instansi]
    );

    conn.end();

    return new Response(JSON.stringify(results), { status: 200 });
  } catch (error) {
    return new Response(error, {
      status: 500,
    });
  }
};
