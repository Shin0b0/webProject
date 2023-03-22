// // <<<<<<< HEAD
// const express = require("express");
// const app = express();
// const indexRoutes = require("./routes/index.route");
// // const util = require("util");

// // var mysql = require("mysql");
// // var connection = mysql.createConnection({
// //   host: "localhost",
// //   user: "root",
// //   password: "",
// //   database: "shoaibLOGIN",
// // });

// // connection.connect(function (err) {
// //   if (err) {
// //     console.error("error connecting: " + err.stack);
// //     return;
// //   }

// //   console.log("connected as ");
// // =======
// // // routes/about.js
// // const express = require("express");
// // const app = express();
// // const router = express.Router();
// // const i = require("./routes/index");
// // app.set('view engine', 'ejs');

// // const mysql = require("mysql");
// // const util = require("util");
// // const connection = mysql.createConnection({
// //   host: "localhost",
// //   user: "root",
// //   password: "",
// //   database: "cafe",
// // >>>>>>> d437d24 (The ui)
// // });

// // const query = util.promisify(connection.query).bind(connection);

// // <<<<<<< HEAD
// async function fetchData() {
//   try {
//     const results = await query("SELECT * FROM shinobi ");
//     console.log("The data is: ", results);
//     return results;
//   } catch (error) {
//     console.error(error);
//   }
// }

// app.use("/", indexRoutes);

// app.listen(3000, async () => {
//   try {
//     const data = await fetchData();
//     console.log("Data fetched successfully!");
//   } catch (error) {
//     console.error("Error fetching data: ", error);
//   } finally {
//     connection.end();
//   }
// });
// // =======
// // app.use("/", i);

// // const startServer = async () => {
// //   try {
// //     await query("select * from logo");
// //     console.log("The movie is :", result[0]);
// //     app.listen(3000);
// //   } catch (error) {
// //     console.error(error);
// //   }
// // };

// // startServer();
// // >>>>>>> d437d24 (The ui)
