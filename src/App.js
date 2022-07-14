import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import {
  collection,
  query,
  onSnapshot,
  doc,
  deleteDoc,
} from "firebase/firestore";

import { db } from "./firebase";

// import { auth } from "./firebase";
import Todos from "./Components/Todos";
import Output from "./Components/Output";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const add = query(collection(db, "todos"));
    const unsub = onSnapshot(add, (querySnapshot) => {
      let todosArray = [];
      querySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArray);
    });
    return () => unsub();
  }, []);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };

  return (
    <BrowserRouter>
      <Navbar />

      <div className="App">
        <Routes>
          <Route path="todoinput" element={<Todos />} />
        </Routes>
        <Routes>
          <Route path="signup" element={<SignUp />} />
        </Routes>
        <Routes>
          <Route path="login" element={<Login />} />
        </Routes>
        {todos.map((todo) => (
          <Output key={todo.id} todo={todo} handleDelete={handleDelete} />
        ))}
      </div>
    </BrowserRouter>
  );
}

export default App;
