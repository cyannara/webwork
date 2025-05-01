// mysql 모듈 로드
const mysql = require("mysql2");

// mysql 접속 정보
// const conn = {
//   host: "127.0.0.1",
//   port: "3306",
//   user: "shop",
//   password: "Admin1234",
//   database: "test",
// };
const conn = {
  // 필수
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_DATABASE,
  connectionLimit: process.env.DB_LIMIT,
  // 선택
  permitSetMultiParamEntries: true,
  insertIdAsNumber: true,
  bigIntAsNumber: true,
  logger: {
    query: (msg) => console.log(msg),
    error: (err) => console.log(err),
  },
};

// DB 커넥션풀풀 생성
const pool = mysql.createPool(conn);

const query = async function (sql, values) {
  return new Promise((resolve, reject) => {
    pool.query(sql, values, function (err, results, fields) {
      if (err) {
        reject(err);
      }
      resolve(results);
    });
  });
};

module.exports = { pool, query };
