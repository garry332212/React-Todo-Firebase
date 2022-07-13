import {Button} from "@mui/material"
import * as React from "react";
import {Link} from "react-router-dom"



export default function Navbar(props) {
  
  //Log Out Button 
  const logOut =  <Button variant="contained" size="large" color="error">
  Log Out
</Button>


return (
<>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="todolist">Logo</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active"  to="/todoinput">Todos</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/signup">Sign Up</Link>
        </li>
        <li>
          {logOut}
        </li>
       
      </ul>
    </div>
  </div>
</nav>

</>

  );
}
