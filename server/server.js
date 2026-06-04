const express = require("express");
const cors = require("cors");

require("dotenv").config();

const connectDB = require("./config/db");

const speedRoutes = require("./routes/speedTestRoutes");
const searchRoutes = require("./routes/searchRoutes");
const historyRoutes = require("./routes/historyRoutes");
const analyticsRoutes = require("./routes/statsRoutes");
const mapRoutes = require("./routes/mapRoutes");
const filterRoutes = require("./routes/filterRoutes");
const recommendRoutes = require("./routes/recommendRoutes");

const app = express();

connectDB();

app.use(
cors({
origin: "*",
methods: ["GET", "POST", "PUT", "DELETE"],
credentials: false
})
);

app.use(express.json());

app.use(
"/api/speed",
speedRoutes
);

app.use(
"/api/search",
searchRoutes
);

app.use(
"/api/history",
historyRoutes
);

app.use(
"/api/analytics",
analyticsRoutes
);

app.use(
"/api/map",
mapRoutes
);

app.use(
"/api/filter",
filterRoutes
);

app.use(
"/api/recommend",
recommendRoutes
);

app.get(
"/",
(req,res)=>{
res.send(
"NetRadar API Running"
);
}
);

const PORT =
process.env.PORT
||
5000;

app.listen(
PORT,
()=>{
console.log(
`Server running on ${PORT}`
);
}
);