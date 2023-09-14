const mysql = require("mysql2/promise");

let isConnected = false;

export const connectToDB = async () => {
  if (isConnected) {
    console.log("MySQL is already connected");
    return;
  }

  try {
    const conn = await mysql.createConnection({
      host: "localhost",
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
    });

    isConnected = true;

    console.log("MySQL connected");
  } catch (error) {
    console.log(error);
  }
};
