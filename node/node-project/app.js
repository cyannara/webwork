const express = require('express')
const app = express()
const port = 3000

let data = [
  {
    "id": "1",
    "first_name": "Massimiliano",
    "last_name": "Rosoni",
    "email": "mrosoni0@ibm.com",
    "salary": "$9.23",
    "department_id": 10,
    "job_id": "it"
  },
  {
    "id": "5",
    "first_name": "Emmalee",
    "last_name": "Laboune",
    "email": "elaboune4@salon.com",
    "salary": "$8.40",
    "department_id": 20,
    "job_id": "sales"
  },
  {
    "id": "6",
    "first_name": "Michal",
    "last_name": "Ivanyushkin",
    "email": "mivanyushkin5@hao123.com",
    "salary": "$8.21",
    "department_id": 10,
    "job_id": "it"
  },
  {
    "id": "7",
    "first_name": "Robb",
    "last_name": "Gauche",
    "email": "rgauche6@fc2.com",
    "salary": "$8.09",
    "department_id": 10,
    "job_id": "it"
  }];

//전체조회 REST 
app.get('/emp', (req, res) => {
  res.send(data)
})

//사원 단건조회
app.get('/emp/:id', (req, res) => {
  let id = req.params.id
  let result = data.find( (emp) => emp.id == id )
  if(result)
    res.send(result)
  else 
    res.send("not find")
})


// 부서가 10번인 첫번째 사원  find?departmentId=20
app.get('/find', (req, res) => {
  let departmentId = req.query.departmentId
  let result = data.filter( (emp) => emp.department_id == departmentId )
  if(result)
    res.send(result)
  else 
    res.send("not find")
})

// job_id가 'it'인 사원만 조회  http://localhost:3000/filter?jobId=it
app.get('/filter', (req, res) => {
  let jobId = req.query.jobId
  let result = data.filter( (emp) => emp.job_id == jobId )
  if(result)
    res.send(result)
  else 
    res.send("not find")
})

// firstname 순으로 정렬
app.get('/sort', (req, res) => {
  res.send('home hello!')
})

app.get('/', (req, res) => {
  res.send('Hello World! buy')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})