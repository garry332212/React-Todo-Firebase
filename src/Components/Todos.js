import React, { useState } from "react";
import { db } from "../firebase";
import "./TodoInput.css";
import { TextField, Button } from "@mui/material";
import TaskIcon from "@mui/icons-material/Task";
import AddTaskIcon from "@mui/icons-material/AddTask";
import { collection, addDoc } from "firebase/firestore";

// import { useNavigate } from "react-router-dom";

const Todos = ({ deleteTodoHandler, todo }) => {
  const [title, setTitle] = useState("");

  //adding new Todo To th firestore
  const addTodoHandler = async (e) => {
    e.preventDefault();
    if (title !== "") {
      await addDoc(collection(db, "todos"), {
        title,
        completed: false,
      });
      setTitle("");
    }
  };
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
    </div>
  );
};

export default Todos;
