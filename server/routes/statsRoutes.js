const express = require("express");

const router = express.Router();

const SpeedTest = require("../models/SpeedTest");

router.get(
"/average",
async(req,res)=>{
try{

const stats =
await SpeedTest.aggregate([
{
$group:{
_id:null,
avgDownload:{ $avg:"$download" },
avgUpload:{ $avg:"$upload" },
avgPing:{ $avg:"$ping" }
}
}
]);

if(stats.length===0){

return res.json({
avgDownload:0,
avgUpload:0,
avgPing:0
});

}

res.json({
avgDownload:Number(stats[0].avgDownload.toFixed(2)),
avgUpload:Number(stats[0].avgUpload.toFixed(2)),
avgPing:Number(stats[0].avgPing.toFixed(2))
});

}
catch(err){

res.status(500).json({
message:err.message
});

}
}
);

router.post(
"/",
async(req,res)=>{
try{

const {
lat,
lng,
radius
}=req.body;

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
$maxDistance:radius
}
}
});

res.json(tests);

}
catch(err){

res.status(500).json({
message:err.message
});

}
}
);

module.exports = router;