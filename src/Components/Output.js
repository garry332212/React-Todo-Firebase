import React from "react";

import DeleteIcon from "@mui/icons-material/Delete";

const Output = ({ todo, handleDelete }) => {
  return (
    <div className="todo">
      <div className="list">{todo.title}</div>

      <button className="deleteButton" onClick={() => handleDelete(todo.id)}>
        <DeleteIcon id="i" />
      </button>
    </div>
  );
};

export default Output;
