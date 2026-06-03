const express=

require("express");

const router=

express.Router();

const SpeedTest=

require(

"../models/SpeedTest"

);

router.post(

"/start",

async(

req,

res

)=>{

try{

const {

lat,

lng,

download,

upload,

ping,

deviceId

}=req.body;

const test=

new SpeedTest({

location:{

type:"Point",

coordinates:[

lng,

lat

]

},

download,

upload,

ping,

deviceId

});

await test.save();

res.json(test);

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

router.delete(

"/mine/:deviceId",

async(

req,

res

)=>{

try{

await SpeedTest.deleteMany({

deviceId:

req.params.deviceId

});

res.json({

message:

"deleted"

});

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