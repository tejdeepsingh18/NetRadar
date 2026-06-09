import axios from "axios";

const API =
`${import.meta.env.VITE_API_URL}/api/stats`;
export async function getAnalytics(
radius
){

const position =
await new Promise(
(resolve,reject)=>{

navigator
.geolocation
.getCurrentPosition(

resolve,

reject

)

}

);

const lat =
position.coords.latitude;

const lng =
position.coords.longitude;

const res =
await axios.post(

API,

{

lat,

lng,

radius

}

);

return res.data;

}