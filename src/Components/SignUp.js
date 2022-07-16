import React, { useState } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

import SensorOccupiedIcon from "@mui/icons-material/SensorOccupied";
import "./Login.css";

const SignUo = () => {
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setsignUpPassword] = useState("");
  let navigate = useNavigate();

  //Creating User Account
  const submitSignUpHandler = async (e) => {
    e.preventDefault();

    await auth.createUserWithEmailAndPassword(signUpEmail, signUpPassword);
    console.log("New Account Created");
    navigate("/todoinput", { replace: true });
  };

  return (
    <>
      <div className="login">
        <div className="loginTitle">
          Sign Up To My Todos{" "}
          <span className="iconTodo">
            <SensorOccupiedIcon fontSize="large" />
          </span>{" "}
        </div>

        <form onSubmit={submitSignUpHandler}>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Enter your email"
              autoComplete="current-email"
              onChange={(e) => setSignUpEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Create a password"
              autoComplete="current-password"
              onChange={(e) => setsignUpPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary ">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default SignUo;
