import axios from "axios";

export const searchLocation =
async(query)=>{

const response=

await axios.get(

"https://nominatim.openstreetmap.org/search",

{

params:{

q:query,

format:"json",

limit:1

}

}

);

if(
response.data.length===0
){

return null;

}

return{

lat:

parseFloat(

response
.data[0]
.lat

),

lng:

parseFloat(

response
.data[0]
.lon

)

};

};