import {

useEffect,

useState

}

from "react";

import Navbar from "../components/Navbar";

import MetricCard from "../components/MetricCard";

import SpeedTest from "../components/SpeedTest";

import MapView from "../components/MapView";

import {

getStats

}

from "../services/statsService";

import {

getNearbyStats

}

from "../services/areaService";

import {

getMapPoints

}

from "../services/mapService";

import "../styles/navbar.css";

import "../styles/dashboard.css";

import "../styles/metriccard.css";

import "../styles/speedtest.css";

function Dashboard(){

const [

radius,

setRadius

]=useState(
200
);

const [

searchCoords,

setSearchCoords

]=useState(
null
);

const [

stats,

setStats

]=useState({

avgDownload:0,

avgUpload:0

});

const [

nearby,

setNearby

]=useState({

avgDownload:0,

count:0

});

const [

mapPoints,

setMapPoints

]=useState([]);

const loadStats=
async()=>{

const data=

await getStats();

setStats(
data
);

};

const loadNearby=
async()=>{

let data;

if(
searchCoords
){

data=

await getNearbyStats(

radius,

searchCoords

);

}

else{

data=

await getNearbyStats(
radius
);

}

setNearby(
data
);

};

const loadMap=
async()=>{

const data=

await getMapPoints();

setMapPoints(
data
);

};

useEffect(()=>{

loadStats();

loadNearby();

loadMap();

const interval=

setInterval(()=>{

loadStats();

loadNearby();

loadMap();

},5000);

return()=>{

clearInterval(
interval
);

};

},[radius,searchCoords]);

return(

<div className="dashboard">

<Navbar/>

<div className="dashboard-content">

<h1>

Network Intelligence Dashboard

</h1>

<select

value={radius}

onChange={(e)=>{

setRadius(

Number(
e.target.value
)

);

}}

>

<option value={50}>50m</option>

<option value={100}>100m</option>

<option value={200}>200m</option>

<option value={500}>500m</option>

<option value={1000}>1000m</option>

</select>

<div className="metrics-grid">

<MetricCard

title="Global Download"

value={`${Math.round(
stats.avgDownload
)} Mbps`}

color="#4da3ff"

/>

<MetricCard

title="Area Download"

value={`${Math.round(
nearby.avgDownload
)} Mbps`}

color="#22c55e"

/>

<MetricCard

title="Nearby Tests"

value={nearby.count}

color="#f59e0b"

/>

</div>

<SpeedTest/>

<MapView

tests={mapPoints}

onLocationChange={

setSearchCoords

}

/>

</div>

</div>

);

}

export default Dashboard;