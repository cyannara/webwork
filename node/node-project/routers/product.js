const express = require("express"); 
const router = express.Router(); 
 
router.get("", function(req, res) { res.send("product 전체조회"); }); 
router.post("", function(req, res) { res.send("product insert "); }); 

router.get("/:id", function(req, res) { res.send("product 단건"); }); 
router.put("/:id", function(req, res) { res.send("product update"); }); 
router.delete("/:id", function(req, res) { res.send("product delete"); }); 

module.exports = router;