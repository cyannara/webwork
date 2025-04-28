/* spread.js */
let arr = [ 1,2,3 ];

//얕은복사
//let arrcp = arr;
// arrcp[0] = 10;
// console.log(arr)
// console.log(arrcp)

//깊은복사
function arrayDeepCopy(){
  let arrDeepCp = [ ... arr ]
  arrDeepCp[0] = 100
  console.log(arr)
  console.log(arrDeepCp)
}

//객체 얕은복사
function objectShallowCopy(){
  let emp = { name:"홍길동", age:20 }
  let empCp = emp;
  empCp.age = 30;
  console.log(emp);
  console.log(empCp);
}
//객체 깊은복사
function objectDeepCopy(){
  let emp = { name:"홍길동", age:20 }
  let empCp = { ... emp, name:"김유신"};
  empCp.age = 30;
  console.log(emp);
  console.log(empCp);
}
objectDeepCopy();

// 가변인수 var
//function func(...arg)