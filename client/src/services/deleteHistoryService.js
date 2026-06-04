import axios from "axios";

const API=

`${import.meta.env.VITE_API_URL}/api/speed`;

export async function clearMyHistory(

deviceId

){

await axios.delete(

`${API}/mine/${deviceId}`

);

}