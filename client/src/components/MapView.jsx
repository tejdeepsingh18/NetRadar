import {

MapContainer,

TileLayer,

CircleMarker,

Popup,

useMap

}

from "react-leaflet";

import {

useState

}

from "react";

import {

searchLocation

}

from "../services/searchLocationService";

import "leaflet/dist/leaflet.css";

function getColor(download){

if(download>=120){

return "#00ff55";

}

if(download>=80){

return "#ffb300";

}

return "#ff3030";

}

function getRadius(download){

return Math.min(

20,

Math.max(

6,

download/12

)

);

}

function MoveMap({

position

}){

const map=
useMap();

map.setView(

position,

16

);

return null;

}

function MapView({

tests=[],

onLocationChange

}){

const [

mapPosition,

setMapPosition

]=useState([

17.4025,

78.4910

]);

const [

search,

setSearch

]=useState("");

const doSearch=
async()=>{

const result=

await searchLocation(

search

);

if(!result)return;

const newPos=[

result.lat,

result.lng

];

setMapPosition(
newPos
);

if(
onLocationChange
){

onLocationChange({

lat:

result.lat,

lng:

result.lng

});

}

};

return(

<>

<div
style={{

marginBottom:"20px"

}}
>

<input

value={search}

onChange={(e)=>{

setSearch(
e.target.value
);

}}

placeholder=

"Search Area"

style={{

padding:"12px",

width:"260px"

}}

/>

<button

onClick={doSearch}

style={{

marginLeft:"10px",

padding:"12px"

}}

>

Search

</button>

</div>

<div
style={{

height:"550px",

borderRadius:"20px",

overflow:"hidden"

}}
>

<MapContainer

center={mapPosition}

zoom={16}

style={{

height:"100%",

width:"100%"

}}

>

<MoveMap
position={mapPosition}
/>

<TileLayer

url=

"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

/>

{

tests.map(

(test,index)=>(

<CircleMarker

key={index}

center={[

test.location
.coordinates[1],

test.location
.coordinates[0]

]}

radius={

getRadius(
test.download
)

}

pathOptions={{

color:

getColor(
test.download
),

fillColor:

getColor(
test.download
),

fillOpacity:
0.35,

weight:2

}}

>

<Popup>

Download:

{test.download}

Mbps

<br/>

Upload:

{test.upload}

Mbps

<br/>

Ping:

{test.ping}

ms

</Popup>

</CircleMarker>

)

)

}

</MapContainer>

</div>

</>

);

}

export default MapView;