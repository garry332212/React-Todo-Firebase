import React from "react";
import { FormControl, InputLabel, Input, Button } from "@mui/material";
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
        <div className="loginTitle">Login To Your Todo <span className="iconTodo"><PlaylistAddCheckIcon fontSize='large'/></span> Account</div>
      <FormControl >
        <InputLabel htmlFor="my-input">Email address</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Password</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
      </FormControl>
      <div className="buttonLogin">
        <Button variant="contained" size="large" color="error">
          Log In
        </Button>
      </div>
    </div>
  );
};

export default Login;
