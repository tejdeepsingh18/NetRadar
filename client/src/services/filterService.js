import axios from "axios";

const API=

"http://localhost:5000/api/filter";

export async function getByDays(

days

){

const res=

await axios.get(

`${API}/time?days=${days}`

);

return res.data;

}