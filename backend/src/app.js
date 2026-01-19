const db = require("./config/db");

db.query("SELECT 1 + 1 AS result")
  .then(([rows]) => console.log("DB Connected:", rows))
  .catch(err => console.log("DB Error:", err));
