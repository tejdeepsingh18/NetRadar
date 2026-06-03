import axios from "axios";

const API=

"http://localhost:5000/api/speed";

export async function clearMyHistory(

deviceId

){

await axios.delete(

`${API}/mine/${deviceId}`

);

}