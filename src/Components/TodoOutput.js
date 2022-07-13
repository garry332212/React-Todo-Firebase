import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import React from "react";
import "../App.css"

const TodoOutput = ({ todo, deleteHandler }) => {
  

  return (
    <>
      <div className="todo">
        {todo.title}

        <button className="deleteButton" onClick={() => deleteHandler(todo.id)}>
          <DeleteForeverIcon id="i" />
        </button>
      </div>
    </>
  );
};

export default TodoOutput;
