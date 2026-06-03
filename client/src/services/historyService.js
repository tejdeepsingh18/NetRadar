import axios from "axios";

const API =
"http://localhost:5000/api/history";

export const getHistory =
async()=>{

const response=

await axios.get(
API
);

return response.data;

};