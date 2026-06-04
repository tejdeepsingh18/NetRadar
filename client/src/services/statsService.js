import axios from "axios";

const API =
`${import.meta.env.VITE_API_URL}/api/stats`;

export const getStats =
async()=>{

const response =
await axios.get(

`${API}/average`

);

return response.data;

};