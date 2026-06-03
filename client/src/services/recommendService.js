import axios from "axios";

const API=

"http://localhost:5000/api/recommend";

export async function getRecommendations(

payload

){

const res=

await axios.post(

API,

payload

);

return res.data;

}