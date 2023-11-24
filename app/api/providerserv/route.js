const mysql = require("mysql2/promise");

export const POST = async (request) => {
  const { limit } = await request.json();

  try {
    const conn = await mysql.createConnection({
      host: "localhost",
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
    });

    const [results, fields] = await conn.execute(
      "SELECT `pd`.`providerid`, `pd`.`providername`, `pd`.`address`, `sv`.`serviceid`, `sv`.`name`, `sv`.`price` FROM `provider` AS `pd` JOIN `service` AS `sv` ON `pd`.`providerid` = `sv`.`providerid` LIMIT ?",
      [limit]
    );

    conn.end();

    const groupedData = new Map();

    results.forEach((item) => {
      if (!groupedData.has(item.providerid)) {
        groupedData.set(item.providerid, {
          providerid: item.providerid,
          providername: item.providername,
          address: item.address,
          service: [],
        });
      }

      groupedData.get(item.providerid).service.push({
        serviceid: item.serviceid,
        name: item.name,
        price: item.price,
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
