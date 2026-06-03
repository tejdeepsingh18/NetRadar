import axios from "axios";

const API =
"http://localhost:5000/api/map";

export const getMapPoints =
async()=>{

const response=

await axios.get(

`${API}/points`

);

return response.data;

};