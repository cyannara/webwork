//mysql_test.js
// mysql 모듈 로드
const mysql = require("mysql2");

// mysql 접속 정보
const conn = {
  host: "192.168.55.39",
  port: "3306",
  user: "shop",
  password: "Admin1234",
  database: "test",
};

// DB 커넥션 생성
let pool = mysql.createPool(conn);

// 2. SQL 실행
const body = { writer: "고길동", content: "test" };
sql = "insert into board (writer, content) values (?, ?)";

const values = [body.writer, body.content];
pool.query(sql, values, function (err, results, fields) {
  if (err) {
    console.log(err);
  }
  console.log(results);
});
