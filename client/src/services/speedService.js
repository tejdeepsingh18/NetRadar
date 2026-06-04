import axios from "axios";

const API=

`${import.meta.env.VITE_API_URL}/api/speed`;

function getDeviceId(){

let id=

localStorage.getItem(

"deviceId"

);

if(!id){

id=

crypto.randomUUID();

localStorage.setItem(

"deviceId",

id

);

}

return id;

}

export const getMyDeviceId=

()=>{

return getDeviceId();

};

export const runSpeedTest=

async()=>{

const position=

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

const lat=

position.coords.latitude;

const lng=

position.coords.longitude;

/* keep your existing measurement logic here */

const download=40;

const upload=20;

const ping=25;

const response=

await axios.post(

`${API}/start`,

{

lat,

lng,

download,

upload,

ping,

deviceId:

getDeviceId()

}

);

return response.data;

};