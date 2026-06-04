import axios from "axios";

const API=

`${import.meta.env.VITE_API_URL}/api/recommend`;

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