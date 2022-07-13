import React from 'react'
import TodoOutput from './TodoOutput';

import {
    collection,
    query,
    onSnapshot,
    doc,
    deleteDoc,
  } from "firebase/firestore";
  import { db } from "./firebase";

const Output = () => {

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
    <div>
 <div className="todoContainer">
          {todos.map((todo) => (
            <TodoOutput
              key={todo.id}
              todo={todo}
              deleteHandler={deleteHandler}
            />
          ))}
        </div> 

    </div>
  )
}

export default Output
