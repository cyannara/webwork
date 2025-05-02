const express = require("express"); 
const router = express.Router(); 
const query = require("../mysql");

router.get("", async (req, res) => {
  const result = await query("customer", "selectList", null);
  res.send(result);
}); 
//req.body  req.params  req.query  req.file
router.post("", async (req, res)=>{ 
  const result = await query('customer',"insertInfo", [req.body.name, req.body.email,req.body.phone]);
  res.send(result);
}); 

router.get("/:id", async (req, res)=> {

}); 
router.put("/:id", async (req, res)=>{

}); 
router.delete("/:id", async (req, res) => {

}); 

module.exports = router;