var pool = require("../config/config.js");
var fs = require("fs");

const seedQuery = fs.readFileSync("db/seeding.sql", { encoding: "utf8" });
pool.query(seedQuery, (err, res) => {
  if (err) {
    console.error("Error executing seeding query:", err.message);
  } else {
    console.log("Seeding done");
  }
  pool.end();
});