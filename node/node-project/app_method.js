const express = require('express')

const multer  = require('multer')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'c:/Temp/uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})

const upload = multer({ storage: storage })

//express instance 생성
const app = express()
const port = 80

app.use(express.urlencoded({ extended: false })); 
app.use(express.json()) 

let boards = [
  {id:1, title:"야당", content:"야당..."},
  {id:2, title:"터미네이터", content:"미래의..."}
]  

//로그 미들웨어 morgan
const morgan = require('morgan')
app.use(morgan('[:date[iso]] :method :url :remote-addr'))

//라우트 설정
app.get('/download', (req, res, next) => {
  const filepath = 'C:/Temp/uploads/ddl.sql';  
  const downname = 'ddl.sql';
  res.setHeader('Content-Disposition', `attachment; filename=${downname}`); // 이게 핵심 
  res.sendFile(filepath);
}); 

app.post('/profile', upload.single('avatar'), function (req, res) {
  console.log(req.file.size)
  console.log(req.file.filename)
  console.log(req.file.originalname)
  res.send("ok")
})

app.get('/', (req,res)=>{
  res.send("hello");
} )

// 전체조회
app.get('/board', (req,res)=>{
  res.send(boards);
} )

// 단건조회

// 등록
app.post('/board', (req,res)=>{
  const board = req.body;   //VO {}
  boards.push(board);
  console.log("받은 파라미터", board);
  res.send(board);
} )

// 수정
app.put('/board/:id', (req,res)=>{
  const id = req.params.id
  const board = req.body;   //json, form-data

  //find -> idx
  const idx = boards.findIndex( ele => ele.id == id  )
  if(idx >= 0) {
    boards[idx] = board;
    res.send(board)
  }
  else {
    res.send( "not found" );
  }
} )

// 삭제
app.delete('/board/:id', (req,res)=>{
  const id = req.params.id

  //find -> idx
  const idx = boards.findIndex( ele => ele.id == id  )
  if(idx >= 0) {
    //boards.splice(idx,1)
    boards = boards.filter( ele => ele.id != id )
    res.send(board)
  }
  else {
    res.send( "not found" );
  }
} )

let emps = [ {id:0, name:"길동"},{id:1, name:"순신"} ]
//route() : 같은 리소스(url) method 타입별로 묶어서 라우트 지정
app.route("/emp")
   .get((req,res) => { res.send(emps) } )
// .get((req,res) => { res.send(emps[ req.query.id ]) } )
   .post((req,res) => { res.send(req.body) } )
   .put((req,res) => { res.send(req.body) } )
   .delete((req,res) => { res.send( req.body.id ) } )

//Ruter를 이용하여 모듈(파일) 분리하여 리소스별로 라우트 지정
app.use('/product', require('./routers/product') )   

app.listen(port, ()=>{
  console.log(`http://localhost:${port} 서버 실행됨` )
});
