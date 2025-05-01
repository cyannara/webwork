const express = require("express");
require("dotenv").config({ path: "mysql/.env" });
const { pool, query } = require("./mysql");

const app = express();
const port = 80;

// 전체조회
app.get("/board", async (req, res) => {
  //const sql = "select * from board";
  const result = await query("selectAll", null);
  res.send({ data: result, result: true });
});

app.listen(port, () => {
  console.log(`http://localhost:${port} 서버 실행됨`);
});
