import {

useEffect,

useState

}

from "react";

import Navbar from "../components/Navbar";

import HeatMap from "../components/HeatMap";

import {

getByDays

}

from "../services/filterService";

function Heatmap(){

const [

tests,

setTests

]=useState([]);

const [

days,

setDays

]=useState(7);

useEffect(()=>{

load();

},[days]);

async function load(){

const data=

await getByDays(
days
);

setTests(
data
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

Network Heatmap

</h1>

<select

value={days}

onChange={(e)=>{

setDays(

Number(

e.target.value

)

)

}}

>

<option value={1}>

Today

</option>

<option value={7}>

7 Days

</option>

<option value={30}>

30 Days

</option>

<option value={3650}>

All Time

</option>

</select>

<HeatMap

tests={tests}

/>

</div>

</div>

);

}

export default Heatmap;