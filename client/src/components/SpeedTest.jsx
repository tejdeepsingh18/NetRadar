import {

useState

}

from "react";

import {

runSpeedTest

}

from "../services/speedService";

import {

getRecommendations

}

from "../services/recommendService";

import "../styles/speedtest.css";

function verdict(download){

if(download>=100)

return "Excellent Network";

if(download>=50)

return "Very Good Network";

if(download>=25)

return "Good Network";

if(download>=10)

return "Average Network";

return "Poor Network";

}

function SpeedTest(){

const [

result,

setResult

]=useState(null);

const [

recommend,

setRecommend

]=useState([]);

const [

loading,

setLoading

]=useState(false);

async function start(){

alert("START BUTTON CLICKED");

setLoading(true);

const data=

await runSpeedTest();

setResult(
data
);

const rec=

await getRecommendations({

lat:

data.location
?.coordinates?.[1]

||

0,

lng:

data.location
?.coordinates?.[0]

||

0,

download:

data.download

});

setRecommend(

rec.better

);

setLoading(false);

}

return(

<div className="speed-container">

<h1>

Live Speed Test

</h1>

<div

className="speed-circle"

onClick={

loading

?

null

:

start

}

>

<div className="speed-inner">

{

loading

?

"TESTING"

:

"START"

}

</div>

</div>

{

result&&(

<>

<div className="results-grid">

<div className="metric-box">

<h3>

Download

</h3>

<p>

{result.download}

</p>

</div>

<div className="metric-box">

<h3>

Upload

</h3>

<p>

{result.upload}

</p>

</div>

<div className="metric-box">

<h3>

Ping

</h3>

<p>

{result.ping}

</p>

</div>

</div>

<div

style={{

marginTop:"40px",

fontSize:"28px",

fontWeight:"bold"

}}

>

{

verdict(

result.download

)

}

</div>

<div

style={{

marginTop:"30px"

}}

>

{

recommend.map(

(r,i)=>(

<div

key={i}

style={{

marginBottom:"15px"

}}

>

#{i+1}

↓

{r.download}

Mbps

•

{r.distance}

meters away

</div>

)

)

}

</div>

</>

)

}

</div>

);

}

export default SpeedTest;