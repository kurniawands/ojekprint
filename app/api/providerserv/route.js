const mysql = require("mysql2/promise");

export const POST = async (request) => {
  const { limit } = await request.json();

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
      "PREPARE provider FROM 'SELECT `pd`.`providerid`, `pd`.`providername`, `pd`.`address`, `sv`.`serviceid`, `sv`.`name`, `sv`.`price` FROM `provider` AS `pd` JOIN `service` AS `sv` ON `pd`.`providerid` = `sv`.`providerid` LIMIT ?'"
    );
    await conn.query(`SET @a = ${limit}`);

    const [results, fields] = await conn.query(
      "EXECUTE provider USING @a"
      // [limit]
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
