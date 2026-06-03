const express =
require("express");

const router =
express.Router();

const SpeedTest =
require("../models/SpeedTest");

function distanceMeters(

lat1,
lon1,

lat2,
lon2

){

const R = 6371000;

const dLat =
(lat2-lat1)
*
Math.PI
/
180;

const dLon =
(lon2-lon1)
*
Math.PI
/
180;

const a =

Math.sin(
dLat/2
)**2 +

Math.cos(
lat1*Math.PI/180
)

*

Math.cos(
lat2*Math.PI/180
)

*

Math.sin(
dLon/2
)**2;

const c =

2 *

Math.atan2(

Math.sqrt(a),

Math.sqrt(
1-a
)

);

return R*c;

}

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
download

}

=

req.body;

const tests =

await SpeedTest.find();

const better =

tests

.filter(

t=>

t.download >

download

)

.map(

t=>{

const distance =

distanceMeters(

lat,

lng,

t.location.coordinates[1],

t.location.coordinates[0]

);

return{

download:

t.download,

distance:

Math.round(
distance
),

lat:

t.location.coordinates[1],

lng:

t.location.coordinates[0]

};

}

)

.sort(

(a,b)=>

a.distance-

b.distance

)

.slice(

0,

3

);

res.json({

better

});

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

module.exports = router;