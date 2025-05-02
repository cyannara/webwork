//app_mysql.js
const express = require("express");

require("dotenv").config({path : "./mysql/.env"})

const app = express();    //인스턴스 생성
const port = 3000;

const cors = require('cors') 
app.use(cors()); 

//body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// 라우트 설정 :엔드포인트(endpoint) + 핸들러
app.get("/", (req,res)=>{
  res.send("hello");
})

app.use("/customer",require("./routers/customer"))
app.use("/board",require("./routers/board"))

app.listen(port, () => {
  console.log(`http://localhost:${port} 서버 실행됨`);
});
