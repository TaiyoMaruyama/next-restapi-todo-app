const express = require("express");
const pool = require("./db");
const app = express();
const PORT = 8000;

app.use(express.json());

app.get("/todos", (req, res) => {
  pool.query('SELECT * FROM "Todo"', (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
});

app.listen(PORT, () => {
  console.log(`Server running at PORT: ${PORT}`);
});
