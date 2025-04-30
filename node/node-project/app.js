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

app.get('/emp', (req, res) => {
  res.send(data)
})

// 부서가 10번인 첫번째 사원
app.get('/find', (req, res) => {
  res.send('home hello!')
})

// job_id가 'it'인 사원만 조회
app.get('/filter', (req, res) => {
  
  res.send('home hello!')
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