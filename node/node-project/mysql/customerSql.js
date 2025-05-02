//customerSql.js
const sqllist = {
  selectList: "select * from customers",
  selectById: "select * from customers where id=?",
  insertInfo: "insert customers (name, email, phone) values (?,?,?)",
  updateInfo: "uppdate customers set ? where id =?",
  deleteInfo: "delete customers where id = ?",
}

module.exports = sqllist;