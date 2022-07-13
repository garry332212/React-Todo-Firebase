import "./App.css";
import React from "react";
import { BrowserRouter} from "react-router-dom";
import TodoInput from "./Components/TodoInput";
import TaskIcon from "@mui/icons-material/Task";
import TodoOutput from "./Components/TodoOutput";
import {
  collection,
  query,
  onSnapshot,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./firebase";

import Navbar from "./Components/Navbar";
import Login from "./Components/Login";

function App() {
  const [todos, setTodos] = React.useState([]);

  //fetching the data using useEffect

  React.useEffect(() => {
    const myQuery = query(collection(db, "Today'sTasks"));
    const querySnap = onSnapshot(myQuery, (querySnapshot) => {
      let myTodoArray = [];
      querySnapshot.forEach((data) => {
        myTodoArray.push({ ...data.data(), id: data.id });
      });
      setTodos(myTodoArray);
    });
    return () => querySnap();
  }, []);

  const deleteHandler = async (id) => {
    await deleteDoc(doc(db, "Today'sTasks", id));
  };

  return (
    <BrowserRouter>
    <Navbar />
      <div className="App">
        <h1>
          My Todo List{" "}
          <span className="icon">
            <TaskIcon />
          </span>
        </h1>
        <TodoInput />

        <div className="todoContainer">
          {todos.map((todo) => (
            <TodoOutput
              key={todo.id}
              todo={todo}
              deleteHandler={deleteHandler}
            />
          ))}
        </div>
        <Login />
      </div>
     
    </BrowserRouter>


  );
}

export default App;
