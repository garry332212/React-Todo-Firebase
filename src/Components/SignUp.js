import React from "react";
import { Button, TextField } from "@mui/material";

import SensorOccupiedIcon from '@mui/icons-material/SensorOccupied';
import "./Login.css";

const SignUo = () => {
  return (
    <div className="login">
      <div className="loginTitle">
        Sign Up To My Todos{" "}
        <span className="iconTodo">
          <SensorOccupiedIcon fontSize="large" />
        </span>{" "}
        
      </div>
        <div className="inputEmail">


      <TextField 
      required id="outlined-required" 
      label="Email" 
      fullWidth/>
      </div>

      <div className="inputPass">
      <TextField
        id="outlined-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        fullWidth
      />
      </div>
      <div className="buttonLogin">
        <Button variant="contained" size="large" color="error">
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default SignUo;
