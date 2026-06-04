import axios from "axios";

const API=

`${import.meta.env.VITE_API_URL}/api/filter`;

export async function getByDays(

days

){

const res=

await axios.get(

`${API}/time?days=${days}`

);

return res.data;

}