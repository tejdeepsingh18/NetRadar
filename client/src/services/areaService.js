import axios from "axios";

const API =
`${import.meta.env.VITE_API_URL}/api/search`;

export const getNearbyStats =

async(

radius,

coords=null

)=>{

let lat;

let lng;

if(coords){

lat=
coords.lat;

lng=
coords.lng;

}

else{

const position=

await new Promise(

(resolve,reject)=>{

navigator
.geolocation
.getCurrentPosition(

resolve,

reject

);

}

);

lat=
position.coords.latitude;

lng=
position.coords.longitude;

}

const response=

await axios.post(

`${API}/nearby`,

{

lat,

lng,

radius

}

);

return response.data;

};