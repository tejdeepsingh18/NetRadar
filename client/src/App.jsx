import {

BrowserRouter,

Routes,

Route

}

from "react-router-dom";

import Dashboard from "./pages/Dashboard";

import Analytics from "./pages/Analytics";

import History from "./pages/History";

import Compare from "./pages/Compare";

import Heatmap from "./pages/Heatmap";

function App(){

return(

<BrowserRouter>

<Routes>

<Route

path="/"

element={<Dashboard/>}

/>

<Route

path="/analytics"

element={<Analytics/>}

/>

<Route

path="/compare"

element={<Compare/>}

/>

<Route

path="/history"

element={<History/>}

/>

<Route

path="/heatmap"

element={<Heatmap/>}

/>

</Routes>

</BrowserRouter>

);

}

export default App;