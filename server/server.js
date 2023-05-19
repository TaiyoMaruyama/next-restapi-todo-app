const express = require("express");
const pool = require("./db");
const app = express();
const PORT = 8000;
const cors = require("cors");

app.use(express.json());
app.use(cors());

// TODOをすべてとってくる
app.get("/todos", async (req, res) => {
  pool.query('SELECT * FROM "Todo"', (error, results) => {
    if (error) throw error;
    return res.status(200).json(results.rows);
  });
});

// 特定のTODOを取得する
app.get("/todos/:id", async (req, res) => {
  const id = req.params.id;
  pool.query('SELECT * FROM "Todo" WHERE id = $1', [id], (error, results) => {
    if (error) throw error;
    return res.status(200).json(results.rows);
  });
});

// ユーザーを追加する
app.post("/todos", async (req, res) => {
  const { title, progress } = req.body;
  pool.query(
    'INSERT INTO "Todo"("title", "progress") values($1, $2)',
    [title, progress],
    (error, results) => {
      if (error) throw error;
      res.status(201).send("succeed!");
    }
  );
});

// ユーザーの更新
app.put("/todos/:id", async (req, res) => {
  const id = req.params.id;
  const title = req.body.title;
  const progress = req.body.progress;
  pool.query(
    'UPDATE "Todo" SET title = $1, progress = $2 WHERE id = $3',
    [title, progress, id],
    (error, results) => {
      if (error) throw error;
      return res.status(200).send("更新しました");
    }
  );
});

// ユーザーの削除
app.delete("/todos/:id", async (req, res) => {
  const id = req.params.id;
  pool.query('DELETE FROM "Todo" WHERE id = $1', [id], (error, results) => {
    if (error) throw error;
    return res.status(201).send("削除しました");
  });
});

app.listen(PORT, () => {
  console.log(`Server running at PORT: ${PORT}`);
});
