import axios from "axios";
import SpeedTest from "@cloudflare/speedtest";

const API =
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

alert("runSpeedTest started");

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

alert(`Location acquired: ${lat}, ${lng}`);

const test = new SpeedTest();

const results = await new Promise(

(resolve,reject)=>{

test.onFinish=(r)=>{

console.log("CLOUDFLARE RESULTS:", r.getSummary());

alert("Cloudflare test finished");

resolve(
r.getSummary()
);

};

test.onError=(e)=>{

console.error("CLOUDFLARE ERROR:", e);

alert(`Cloudflare Error: ${e}`);

reject(e);

};

}

);

console.log("Final Results:", results);

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
