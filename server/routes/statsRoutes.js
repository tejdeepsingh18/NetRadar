const express =
require("express");

const router =
express.Router();

const SpeedTest =
require("../models/SpeedTest");

router.post(

"/",

async(

req,
res

)=>{

try{

const {

lat,
lng,
radius

}

=

req.body;

const tests =

await SpeedTest.find({

location:{

$near:{

$geometry:{

type:"Point",

coordinates:[

lng,

lat

]

},

$maxDistance:

radius

}

}

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

});

}

}

);

module.exports=
router;