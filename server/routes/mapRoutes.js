const express =
require("express");

const router =
express.Router();

const SpeedTest =
require(
"../models/SpeedTest"
);

router.get(

"/points",

async(req,res)=>{

try{

const tests=

await SpeedTest

.find()

.sort({

createdAt:-1

})

.limit(100);

res.json(
tests
);

}

catch(error){

res.status(500)
.json({

message:
error.message

});

}

}

);

module.exports=
router;