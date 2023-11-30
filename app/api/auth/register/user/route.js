const mysql = require("mysql2/promise");
import { hash } from "bcrypt";

export const POST = async (request) => {
  const { username, name, password, phone, address, instansi } =
    await request.json();

  const hashedPassword = await hash(password, 10);
  // console.log(hashedPassword);

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
      "PREPARE registeruser FROM 'INSERT INTO `user` (`username`, `name`, `password`, `phone`, `address`, `instansi`) VALUES (?, ?, ?, ?, ?, ?)'"
    );
    // await conn.query(
    //   `SET @a = ${username}; SET @b = ${name}; SET @c = "${hashedPassword}"; SET @d = ${phone}; SET @e = "${address}"; SET @f = ${instansi};`
    // );
    await conn.query(`SET @a = "${username}"`);
    await conn.query(`SET @b = "${name}"`);
    await conn.query(`SET @c = "${hashedPassword}"`);
    await conn.query(`SET @d = "${phone}"`);
    await conn.query(`SET @e = "${address}"`);
    await conn.query(`SET @f = "${instansi}"`);

    const [results, fields] = await conn.query(
      "EXECUTE registeruser USING @a, @b, @c, @d, @e, @f"
      // [username, name, hashedPassword, phone, address, instansi]
    );

    conn.end();

    return new Response(JSON.stringify(results), { status: 200 });
  } catch (error) {
    return new Response(error, {
      status: 500,
    });
  }
};
