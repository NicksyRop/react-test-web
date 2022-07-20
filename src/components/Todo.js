import React from "react";

const Todo = ({ todo, dispatch }) => {
  return (
    <div>
      <span style={{ color: todo.completed ? "blue" : "green" }}>
        {todo.name}
      </span>
      <button
        onClick={() => dispatch({ type: "TOGGLE", payload: { id: todo.id } })}
      >
        Toggle dd
      </button>
      <button
        onClick={() => dispatch({ type: "DELETE", payload: { id: todo.id } })}
      >
        Delete
      </button>
    </div>
  );
};

export default Todo;
