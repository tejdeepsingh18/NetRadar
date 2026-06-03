import {

useState

}

from "react";

import Navbar from "../components/Navbar";

import {

searchLocation

}

from "../services/searchLocationService";

import {

getNearbyStats

}

from "../services/areaService";

function Compare(){

const [

areaA,

setAreaA

]=useState("");

const [

areaB,

setAreaB

]=useState("");

const [

statsA,

setStatsA

]=useState(null);

const [

statsB,

setStatsB

]=useState(null);

async function compare(){

const locA=

await searchLocation(
areaA
);

const locB=

await searchLocation(
areaB
);

const dataA=

await getNearbyStats(

500,

{

lat:locA.lat,

lng:locA.lng

}

);

const dataB=

await getNearbyStats(

500,

{

lat:locB.lat,

lng:locB.lng

}

);

setStatsA(
dataA
);

setStatsB(
dataB
);

}

return(

<div>

<Navbar/>

<div style={{

padding:"40px",

color:"white"

}}>

<h1>

Compare Areas

</h1>

<input

placeholder=

"Area A"

value={areaA}

onChange={(e)=>{

setAreaA(
e.target.value
)

}}

style={{

padding:"12px",

marginRight:"10px"

}}

/>

<input

placeholder=

"Area B"

value={areaB}

onChange={(e)=>{

setAreaB(
e.target.value
)

}}

style={{

padding:"12px"

}}

/>

<button

onClick={compare}

style={{

marginLeft:"20px",

padding:"12px"

}}

>

Compare

</button>

<div style={{

display:"flex",

gap:"40px",

marginTop:"50px"

}}>

{

statsA&&(

<div>

<h2>

Area A

</h2>

<p>

Download:

{

Math.round(

statsA.avgDownload

)

}

Mbps

</p>

<p>

Upload:

{

Math.round(

statsA.avgUpload

)

}

Mbps

</p>

<p>

Ping:

{

Math.round(

statsA.avgPing

)

}

ms

</p>

<p>

Tests:

{

statsA.count

}

</p>

</div>

)

}

{

statsB&&(

<div>

<h2>

Area B

</h2>

<p>

Download:

{

Math.round(

statsB.avgDownload

)

}

Mbps

</p>

<p>

Upload:

{

Math.round(

statsB.avgUpload

)

}

Mbps

</p>

<p>

Ping:

{

Math.round(

statsB.avgPing

)

}

ms

</p>

<p>

Tests:

{

statsB.count

}

</p>

</div>

)

}

</div>

</div>

</div>

);

}

export default Compare;