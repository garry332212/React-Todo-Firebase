import "./App.css";
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import TodoInput from "./Components/TodoInput";

// import {
//   collection,
//   query,
//   onSnapshot,
//   doc,
//   deleteDoc,
// } from "firebase/firestore";
// import { db } from "./firebase";

import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import { Output } from "@mui/icons-material";

function App() {
  // const [todos, setTodos] = React.useState([]);

  // //fetching the data using useEffect

  // React.useEffect(() => {
  //   const myQuery = query(collection(db, "Today'sTasks"));
  //   const querySnap = onSnapshot(myQuery, (querySnapshot) => {
  //     let myTodoArray = [];
  //     querySnapshot.forEach((data) => {
  //       myTodoArray.push({ ...data.data(), id: data.id });
  //     });
  //     setTodos(myTodoArray);
  //   });
  //   return () => querySnap();
  // }, []);

  // const deleteHandler = async (id) => {
  //   await deleteDoc(doc(db, "Today'sTasks", id));
  // };

  return (
    <BrowserRouter>
    <Navbar />
      <div className="App">
       
        {/* <div className="todoContainer">
          {todos.map((todo) => (
            <TodoOutput
              key={todo.id}
              todo={todo}
              deleteHandler={deleteHandler}
            />
          ))}
          </div> */}

<Routes>

      
      <Route className= "App" path="/todoinput" element={<TodoInput />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="login" element={<Login />} />
      <Route path="todolist" element={<Output />} />
    </Routes>
     
  </div>
     
    </BrowserRouter>


  );
}

export default App;
