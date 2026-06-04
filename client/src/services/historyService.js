import axios from "axios";

const API =
`${import.meta.env.VITE_API_URL}/api/history`;

export const getHistory =
async()=>{

const response=

await axios.get(
API
);

return response.data;

};