import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";


export default function Navbar(props) {
  let navigate = useNavigate();
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <h1 className="navbar-brand">Navbar</h1>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <Link className="nav-link" to="/todoinput">
              Home <span className="sr-only">(current)</span>
            </Link>
            
            {/* Log Out User */}
            {props.user ? (
              <li className="nav-item ">
                <button
                  type="button"
                  class="btn btn-danger"
                  onClick={() => {
                    auth.signOut();
                    navigate("../login", { replace: true });
                  }}
                >
                  Log Out
                </button>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/signup">
                    Sign Up
                  </Link>
                </li>
             
              </>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
}
