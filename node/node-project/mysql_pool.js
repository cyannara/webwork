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

// 객체 -> 배열
const converterAray = (target, list) => {
  //target = { no : 1, name : 'hong', email : 'h@goog'};
  let aray = [];
  for (let field of list) {
    let val = target[field]; //target['name']
    aray.push(val); // 'Hong'
  }
  return aray; // ['hong', 'h@goog', ...]
};

// 2. SQL 실행
const values = { writer: "고길동", content: "test" };
sql = "insert into board (writer, content) values (?, ?)";
const arr = converterAray(values, ["writer", "content"]);
pool.query(
  sql,
  //  [values.writer, values.content],
  arr,
  function (err, results, fields) {
    if (err) {
      console.log(err);
    }
    // 3. 결과 처리
    console.log(results);
  }
);
