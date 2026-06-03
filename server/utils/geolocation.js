const axios =
require("axios");

const getCityFromCoords =
async(
lat,
lon
)=>{

try{

const response=
await axios.get(

`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`,

{

headers:{

"User-Agent":

"NetRadar"

}

}

);

const address=

response.data.address;

return (

address.city ||

address.town ||

address.state ||

"Unknown"

);

}

catch{

return "Unknown";

}

};

module.exports=
getCityFromCoords;