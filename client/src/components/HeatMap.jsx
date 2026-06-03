import {

MapContainer,

TileLayer

}

from "react-leaflet";

import {

HeatmapLayer

}

from

"react-leaflet-heatmap-layer-v3";

import

"leaflet/dist/leaflet.css";

function HeatMap({

tests=[]

}){

const points=

tests.map(

t=>([

t.location
.coordinates[1],

t.location
.coordinates[0],

t.download

])

);

return(

<div style={{

height:"600px",

borderRadius:"20px",

overflow:"hidden"

}}>

<MapContainer

center={[

17.4025,

78.4910

]}

zoom={15}

style={{

height:"100%",

width:"100%"

}}

>

<TileLayer

url=

"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

/>

<HeatmapLayer

fitBoundsOnLoad

fitBoundsOnUpdate

points={points}

longitudeExtractor={

m=>m[1]

}

latitudeExtractor={

m=>m[0]

}

intensityExtractor={

m=>m[2]

}

/>

</MapContainer>

</div>

);

}

export default HeatMap;