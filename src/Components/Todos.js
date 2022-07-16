import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import "./TodoInput.css";
import { TextField, Button } from "@mui/material";
import TaskIcon from "@mui/icons-material/Task";
import AddTaskIcon from "@mui/icons-material/AddTask";
import { useNavigate } from "react-router-dom";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
// let unsub =()=>{};

const Todos = ({ user }) => {
  const [title, setTitle] = useState("");
  const [myTodos, setMyTodos] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    if (user) {
      const docRef = db.collection("todos").doc(user.uid);
      docRef.onSnapshot((docSnap) => {
        if (docSnap.exists) {
          console.log(docSnap.data().todos);
          setMyTodos(docSnap.data().todos);
        } else {
          console.log("Welcome", docRef);
        }
      });
    } else {
      navigate("/login", { replace: true });
    }

    // return () =>{
    //   unsub()
    // }
  }, []);

  //adding new Todo To  firestore as an array so they dont overwrite
  const addTodoHandler = (e) => {
    db.collection("todos")
      .doc(user.uid)
      .set({
        todos: [...myTodos, title],
      });
    setTitle("");
  };

  //Deleting Todo Form List
  const handleDelete = (deleteTodo) => {
    const docRef = db.collection("todos").doc(user.uid);
    docRef.get().then((docSnap) => {
      const deletedResults = docSnap
        .data()
        .todos.filter((todo) => todo !== deleteTodo);
      docRef.update({
        todos: deletedResults,
      });
    });
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
          onChange={(e) => setTitle(e.target.value)}
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
      <hr />
      {myTodos.map((todo, index) => {
        return (
          <li key={index} className="todo">
            {todo}

            <DeleteForeverIcon id="i" onClick={() => handleDelete(todo)} />
          </li>
        );
      })}
    </div>
  );
};

export default Todos;
