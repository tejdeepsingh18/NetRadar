import axios from "axios";

const API =
"http://localhost:5000/api/stats";

export const getStats =
async()=>{

const response =
await axios.get(

`${API}/average`

);

return response.data;

};