const express = require("express"); 
const router = express.Router(); 
const query = require("../mysql");

router.get("", async (req, res) => {
  const result = await query("board", "selectList", null);
  res.send(result);
}); 
//req.body  req.params  req.query  req.file
router.post("", async (req, res)=>{ 
  const result = await query('board',"insertInfo", [req.body.title, req.body.content,req.body.writer]);
  res.send(result);
}); 

router.get("/:id", async (req, res)=> {

}); 
router.put("/:id", async (req, res)=>{

}); 
router.delete("/:id", async (req, res) => {

}); 

module.exports = router;