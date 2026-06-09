import axios from "axios";
import SpeedTest from "@cloudflare/speedtest";

const API =
`${import.meta.env.VITE_API_URL}/api/speed`;

function getDeviceId(){

let id =

localStorage.getItem(

"deviceId"

);

if(!id){

id =

crypto.randomUUID();

localStorage.setItem(

"deviceId",

id

);

}

return id;

}

export const getMyDeviceId =

()=>{

return getDeviceId();

};

export const runSpeedTest =

async()=>{

console.log("runSpeedTest started");

const position =

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

const lat =

position.coords.latitude;

const lng =

position.coords.longitude;

console.log(
"Location acquired",
lat,
lng
);

const results =

await new Promise(

(resolve,reject)=>{

const test = new SpeedTest({

measurements:[

{
type:"latency",
numPackets:20
},

{
type:"download",
bytes:1e6,
count:8
},

{
type:"upload",
bytes:1e6,
count:8
}

]

});

test.onFinish = (r)=>{

const summary =

r.getSummary();

console.log(
"CLOUDFLARE RESULTS:",
summary
);

resolve(
summary
);

};

test.onError = (e)=>{

console.error(
"CLOUDFLARE ERROR:",
e
);

reject(e);

};

}

);

console.log(
"Final Results:",
results
);

const download =

Number(
(
results.download /
1000000
).toFixed(2)
);

const upload =

Number(
(
results.upload /
1000000
).toFixed(2)
);

const ping =

Number(
results.latency
?.toFixed?.(2)
||
0
);

const response =

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