const express = require("express");
const app = express();
const indexRoutes = require("./routes/index.route");
const util = require("util");

var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "shoaibLOGIN",
});

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as ");
});

const query = util.promisify(connection.query).bind(connection);

async function fetchData() {
  try {
    const results = await query("SELECT * FROM shinobi ");
    console.log("The data is: ", results);
    return results;
  } catch (error) {
    console.error(error);
  }
}

app.use("/", indexRoutes);

app.listen(3000, async () => {
  try {
    const data = await fetchData();
    console.log("Data fetched successfully!");
  } catch (error) {
    console.error("Error fetching data: ", error);
  } finally {
    connection.end();
  }
});
