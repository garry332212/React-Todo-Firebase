import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import "./TodoInput.css";
import { TextField, Button } from "@mui/material";
import AddTaskIcon from "@mui/icons-material/AddTask";
import { useNavigate } from "react-router-dom";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const Todos = ({ user }) => {
  const [title, setTitle] = useState("");
  const [myTodos, setMyTodos] = useState([]);
  const [validated, setValidated] = useState(true); //validating the TODO INPUT
  let navigate = useNavigate();

  const inputHandler = (event) => {
    setTitle(event.target.value);
    if (event.target.value.trim().length > 0) {
      setValidated(true);
    }
  };

  useEffect(() => {
    if (user) {
      const docRef = db.collection("todos").doc(user.uid);
      docRef.onSnapshot((docSnap) => {
        if (docSnap.exists) {
          setMyTodos(docSnap.data().todos);
        } else {
          // setCurrentUser(auth.currentUser)
        }
      });
    } else {
      navigate("/login", { replace: true });
    }
  }, []);

  //adding new Todo To  firestore as an array so they dont overwrite
  const addTodoHandler = (e) => {
    if (!title) {
      setValidated(false);
      return;
    } else {
      db.collection("todos")
        .doc(user.uid)
        .set({
          todos: [...myTodos, title],
        });

      setTitle("");
    }
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
          <AddTaskIcon fontSize="large" />
        </span>
      </h1>

      <div className="textInputTodo">
        <TextField
          id="filled-error-helper-text"
          label="Today's Tasks"
          variant="outlined"
          onChange={inputHandler}
          value={title}
          fullWidth
          style={{
            backgroundColor: !validated ? "#FF7396" : "white",
            borderColor: !validated ? "blue" : "black",
          }}
        />
      </div>
      <div className="inputEmpty">
        {!validated && <h4> Please Enter Your TODO!</h4>}
      </div>
      <Button
        variant="contained"
        size="large"
        style={{ fontSize: "20px", margin: "10px" }}
        onClick={addTodoHandler}
      >
        Add
      </Button>

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
