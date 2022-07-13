import React from "react";
import { Button, TextField } from "@mui/material";

import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="loginTitle">
        Login To Your Todo{" "}
        <span className="iconTodo">
          <PlaylistAddCheckIcon fontSize="large" />
        </span>{" "}
        Account
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
          Log In
        </Button>
      </div>
    </div>
  );
};

export default Login;
