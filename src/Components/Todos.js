import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import "./TodoInput.css";
import { TextField, Button } from "@mui/material";
import TaskIcon from "@mui/icons-material/Task";
import AddTaskIcon from "@mui/icons-material/AddTask";
import { collection, addDoc, setDoc, doc, } from "firebase/firestore";
import OutputRoute from "./OutputRoute";


// import { useNavigate } from "react-router-dom";

const Todos = ({ user }) => {
  const [title, setTitle] = useState("");
  const [myTodos, setMyTodos] = useState([]);


  useEffect(() =>{

    if(user){
      const docRef = db.collection('todos').doc(user.uid)
    docRef.onSnapshot(docSnap =>{
      if(docSnap.exist){
        console.log(docSnap.data().todos);
        setMyTodos(docSnap.data().todos)
      }else{
        console.log("no docs");
      }
    })
  }else{
    console.log("Piush");
  }
  }, [])

  //adding new Todo To  firestore
  const addTodoHandler = async (e) => {
    e.preventDefault();
    // if (title !== "") {
    //   await addDoc(collection(db, "todos"), {
    //     title,
    //   });
  db.collection('todos').doc(user.uid).set({
    todos:[...myTodos, title]
  })
    }
  
  return (
    <div className="containerInput">
      <h1>
        My Todo List{" "}
        <span className="icon">
          <TaskIcon />
        </span>
      </h1>
      <div className="textInputTodo">
        <TextField
          id="filled-error-helper-text"
          label="Today's Tasks"
          variant="outlined"
          onChange={(event) => setTitle(event.target.value)}
          value={title}
          fullWidth
        />
      </div>
      <div className="btnClick">
        <Button
          variant="contained"
          size="large"
          startIcon={<AddTaskIcon />}
          onClick={addTodoHandler}
        >
          Add
        </Button>
      </div>

      <OutputRoute />
    </div>
  );
};

export default Todos;
