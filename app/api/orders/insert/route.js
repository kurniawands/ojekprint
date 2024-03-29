const mysql = require("mysql2/promise");

export const POST = async (request) => {
  const { serviceid, address, status } = await request.json();

  try {
    const conn = await mysql.createConnection({
      host: "localhost",
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
    });

    const [results, fields] = await conn.query(
      "INSERT INTO `order`(`userid`, `serviceid`, `address`, `status`)  VALUES(?, ?, ?, ?)",
      [1002, serviceid, address, status]
    );

    conn.end();

    return new Response(JSON.stringify(results), { status: 200 });
  } catch (error) {
    return new Response(error, {
      status: 500,
    });
  }
};
