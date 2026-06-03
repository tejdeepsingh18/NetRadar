const express =
require("express");

const router =
express.Router();

const SpeedTest =
require(
"../models/SpeedTest"
);

router.post(

"/nearby",

async(req,res)=>{

try{

const {

lat,

lng,

radius

}=req.body;

const results=

await SpeedTest.aggregate([

{

$geoNear:{

near:{

type:"Point",

coordinates:[

lng,

lat

]

},

distanceField:

"distance",

maxDistance:

radius,

spherical:true

}

},

{

$group:{

_id:null,

avgDownload:{

$avg:
"$download"

},

avgUpload:{

$avg:
"$upload"

},

avgPing:{

$avg:
"$ping"

},

count:{

$sum:1

}

}

}

]);

if(
results.length===0
){

return res.json({

avgDownload:0,

avgUpload:0,

avgPing:0,

count:0

});

}

res.json(
results[0]
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