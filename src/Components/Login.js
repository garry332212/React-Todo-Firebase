import React, { useState } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
import "./Login.css";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [error, setError] = useState("");
  let navigate = useNavigate();

  //Logging Users Into their Accounts
  const submitLoginHandler = async (e) => {
    e.preventDefault();
    if (!loginEmail && !loginPassword) {
      return setError("Fill In All The Details");
    }
    if (!loginEmail.includes(".com")) {
      return setError("Enter a correct Email");
    }
    if (loginPassword.trim().length < 6) {
      return setError("Incorrect Password");
    }

    try {
      setError("");
      await auth.signInWithEmailAndPassword(loginEmail, loginPassword);
      navigate("/todoinput", { replace: true });

      setLoginEmail("");
      setLoginPassword("");
    } catch {
      setError("Failed To Login");
    }
  };

  return (
    <>
      <div className="login">
        <div className="loginTitle accountinfo">Login Your Account</div>
        {error && <Alert variant="danger">{error}</Alert>}

        <form onSubmit={submitLoginHandler}>
          <div className="form-group input1">
            <input
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              autoComplete="current-email"
              id="exampleInputEmail1"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
            />
          </div>
          <div className="form-group input2">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              autoComplete="current-password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
