import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import Logo from "./assets/logo.png";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

export default function Navbar(props) {
  let navigate = useNavigate();
  return (
    <>
      <nav className="navbar navbar-expand navbar-light bg-light">
        <img
          src={Logo}
          width="120"
          height="45"
          className="d-inline-block align-top"
          alt="logo"
        />

        <ul className="navbar-nav ml-auto">
          {/* Log Out User */}
          {props.user ? (
            <li className="nav-item ">
              <button
                type="button"
                className="btn btn-danger"
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
              <li className="nav-item loginNav">
                <Link className="nav-link" to="/login"><span><AccountBoxIcon /></span>
                  Login
                </Link>
              </li>

              <li className="nav-item signUpNav">
                <Link className="nav-link" to="/signup"><span><PersonAddIcon /></span>
                  Sign Up
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
}
