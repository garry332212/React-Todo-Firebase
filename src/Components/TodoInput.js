import React, { useState } from "react";
import "./TodoInput.css";
import { TextField, Button } from "@mui/material";
import TaskIcon from "@mui/icons-material/Task";
import AddTaskIcon from "@mui/icons-material/AddTask";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const TodoInput = (props) => {
  const [title, setTitle] = useState("");

  const submitTodoHandler = async () => {
    if (title) {
    await addDoc(collection(db, "Today'sTasks"), {
        title,
        complete: false
    });
      setTitle("");
    } else {
      console.log("Invalid");
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
          onClick={submitTodoHandler}
        >
          Add
        </Button>
      </div>
    
    </div>
  );
};

export default TodoInput;
