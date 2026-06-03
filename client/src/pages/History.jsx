import {

useEffect,

useState

}

from "react";

import Navbar from "../components/Navbar";

import {

getHistory

}

from "../services/historyService";

import {

clearMyHistory

}

from "../services/deleteHistoryService";

import {

getMyDeviceId

}

from "../services/speedService";

function History(){

const [

tests,

setTests

]=useState([]);

async function load(){

const data=

await getHistory();

const mine=

data.filter(

t=>

t.deviceId===

getMyDeviceId()

);

setTests(

mine

);

}

useEffect(()=>{

load();

},[]);

async function clear(){

await clearMyHistory(

getMyDeviceId()

);

load();

}

return(

<div>

<Navbar/>

<div style={{

padding:"40px",

color:"white"

}}>

<h1>

My History

</h1>

<button

onClick={clear}

style={{

padding:"12px",

marginBottom:"30px"

}}

>

Clear My History

</button>

{

tests.map(

(test)=>(

<div

key={test._id}

style={{

background:"#111827",

padding:"20px",

marginBottom:"20px",

borderRadius:"12px"

}}

>

<p>

Download:

{test.download}

Mbps

</p>

<p>

Upload:

{test.upload}

Mbps

</p>

<p>

Ping:

{test.ping}

ms

</p>

</div>

)

)

}

</div>

</div>

);

}

export default History;