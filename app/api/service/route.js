const mysql = require("mysql2/promise");

export const POST = async (request) => {
  const { providerid } = await request.json();

  try {
    const conn = await mysql.createConnection({
      host: "localhost",
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
    });

    const [results, fields] = await conn.execute(
      "SELECT * FROM service WHERE providerid = ?",
      [providerid]
    );

    conn.end();

    const groupedData = new Map();

    results.forEach((item) => {
      groupedData.set(item.serviceid, {
        serviceid: item.serviceid,
        providerid: item.providerid,
        name: item.name,
        price: item.price,
        quantity: 0,
      });
    });

    const restructuredData = Array.from(groupedData.values());

    return new Response(JSON.stringify(restructuredData), { status: 200 });
  } catch (error) {
    return new Response(error, {
      status: 500,
    });
  }
};
