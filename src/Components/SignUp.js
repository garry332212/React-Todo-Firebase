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
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter your email"
              autoComplete="current-email"
              onChange={(e) => setSignUpEmail(e.target.value)}
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Create a password"
              autoComplete="current-password"
              onChange={(e) => setsignUpPassword(e.target.value)}
            />
          </div>

          <button type="submit" class="btn btn-primary ">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default SignUo;
