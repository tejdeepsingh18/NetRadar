const express=require("express");

const router=express.Router();

const SpeedTest=

require("../models/SpeedTest");

router.get(

"/time",

async(

req,

res

)=>{

try{

const days=

Number(

req.query.days

)||7;

const date=

new Date();

date.setDate(

date.getDate()

-days

);

const tests=

await SpeedTest.find({

createdAt:{

$gte:date

}

})

.sort({

createdAt:-1

});

res.json(
tests
);

}

catch(err){

res.status(500)

.json({

message:

err.message

})

}

}

);

module.exports=

router;