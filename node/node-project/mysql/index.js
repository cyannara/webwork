//mysql/index.js

// mysql 모듈 로드
const mysql = require("mysql2");
const customer = requre("./customerSql")
const board = requre("./boardsql")
const sqllist = { customer:customer,  board:board }

// mysql 접속 정보
const conn = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_DATABASE,
  connectionLimit: process.env.DB_LIMIT,
};
// DB 커넥션 생성
let pool = mysql.createPool(conn);
const query = (table, sql, data)=>{
  return new Promise((resolve, reject)=>{
    pool.query(sqllist[table][sql], data, (err,result)=>{
      if(err) {
        console.log(err);
        reject();
      }
      resolve(result);
    });
  })
}

module.exports = query