//mysql_test.js
const pool = require("./mysql")
// 2. SQL 실행
const data = { name: "백설공주", email: "f@f.f", "phone":"011" };
sql = "insert customers (name,email,phone) values (?,?,?)";

pool.query(sql, [data.name, data.email, data.phone], function (err, results, fields) {
  if (err) {
    console.log(err);
  }
  // 3. 결과 처리
  console.log(results);
});

