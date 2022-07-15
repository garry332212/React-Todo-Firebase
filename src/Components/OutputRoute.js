import React, { useEffect, useState } from "react";
import {
  collection,
  query,
  onSnapshot,
  doc,
  deleteDoc,
} from "firebase/firestore";
import Output from "./Output";
import { db } from "../firebase";

const OutputRoute = () => {
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
    <div>
      {todos.map((todo) => (
        <Output key={todo.id} todo={todo} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

export default OutputRoute;
