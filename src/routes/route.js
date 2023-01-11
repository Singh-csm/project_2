const express = require("express");
const router = express.Router();
const collegeController = require("../controllers/collegeController");
const internController = require("../controllers/internController");
 
router.post("/functionup/colleges", collegeController.createCollege); 

router.post("/functionup/interns", internController.createIntern); 

router.get("/functionup/collegeDetails", collegeController.getcollege); 

router.all('/*',function(req,res){
    res.status(400).send({msg:"invalid request"})
})

module.exports = router;
