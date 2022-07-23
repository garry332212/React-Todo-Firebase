import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Todos from "./Components/Todos";
import { auth } from "./firebase";

function App() {
  const [user, setUser] = useState();

  // To LOG OUT THE USER
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) setUser(user);
      else setUser(null);
    });
  });

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar user={user} />
        <Routes>
          <Route path="todoinput" element={<Todos user={user} />} />
        </Routes>
        <Routes>
          <Route path="signup" element={<SignUp />} />
        </Routes>
        <Routes>
          <Route path="login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
