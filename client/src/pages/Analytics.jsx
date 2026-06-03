import {

useEffect,
useState

}

from "react";

import Navbar from "../components/Navbar";

import {

LineChart,
Line,
XAxis,
YAxis,
Tooltip,
ResponsiveContainer

}

from "recharts";

import {

getAnalytics

}

from "../services/analyticsService";

function Analytics(){

const [

data,

setData

]=useState([]);

const [

radius,

setRadius

]=useState(

500

);

async function load(){

const result=

await getAnalytics(

radius

);

setData(

result

);

}

useEffect(()=>{

load();

},[radius]);

return(

<div>

<Navbar/>

<div style={{

padding:"40px",

color:"white"

}}>

<h1>

Analytics

</h1>

<select

value={radius}

onChange={

e=>

setRadius(

Number(

e.target.value

)

)

}

>

<option value={200}>

200m

</option>

<option value={500}>

500m

</option>

<option value={1000}>

1km

</option>

<option value={5000}>

5km

</option>

</select>

<h2>

Download Trend

</h2>

<div style={{

height:"350px"

}}>

<ResponsiveContainer>

<LineChart data={data}>

<XAxis

dataKey=

"createdAt"

/>

<YAxis/>

<Tooltip/>

<Line

dataKey=

"download"

/>

</LineChart>

</ResponsiveContainer>

</div>

<h2>

Upload Trend

</h2>

<div style={{

height:"350px"

}}>

<ResponsiveContainer>

<LineChart data={data}>

<XAxis

dataKey=

"createdAt"

/>

<YAxis/>

<Tooltip/>

<Line

dataKey=

"upload"

/>

</LineChart>

</ResponsiveContainer>

</div>

</div>

</div>

);

}

export default Analytics;