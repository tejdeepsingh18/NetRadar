import axios from "axios";

const API =
`${import.meta.env.VITE_API_URL}/api/map`;

export const getMapPoints =
async()=>{

const response=

await axios.get(

`${API}/points`

);

return response.data;

};