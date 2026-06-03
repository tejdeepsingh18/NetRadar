import {

Link

}

from "react-router-dom";

import "../styles/navbar.css";

function Navbar(){

return(

<nav className="navbar">

<h2>

NetRadar

</h2>

<div className="nav-links">

<Link to="/">

Dashboard

</Link>

<Link to="/analytics">

Analytics

</Link>

<Link to="/compare">

Compare

</Link>

<Link to="/heatmap">

Heatmap

</Link>

<Link to="/history">

History

</Link>

</div>

</nav>

);

}

export default Navbar;