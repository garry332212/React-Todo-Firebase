import React, { useState } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import "./Login.css";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  let navigate = useNavigate();

  //Logging Users Into their Accounts
  const submitLoginHandler = async (e) => {
    e.preventDefault();

    await auth.signInWithEmailAndPassword(loginEmail, loginPassword);
    console.log("Logged In To ");
    navigate("/todoinput", { replace: true });

    setLoginEmail("");
    setLoginPassword("");
  };

  return (
    <>
      <div className="login">
        <div className="loginTitle">
          Login To Your Todo{" "}
          <span className="iconTodo">
            <PlaylistAddCheckIcon fontSize="large" />
          </span>{" "}
          Account
        </div>

        <form onSubmit={submitLoginHandler}>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              autoComplete="current-email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              autoComplete="current-password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
          </div>

          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
