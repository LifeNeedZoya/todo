import React from "react";

const TodoItem = ({ todo, taskDone, deleteTask }) => {
  return (
    <div className="todoItem">
      <input
        className="displayInput"
        type="checkbox"
        checked={todo.isDone}
        onChange={() => {
          taskDone(todo.id);
        }}
      />
      <h4 style={{ textDecoration: todo.isDone ? "line-through" : "none" }}>
        {todo.name}
      </h4>
      <button
        onClick={() => {
          deleteTask(todo.id);
        }}
        id="deleteBtn"
      >
        delete
      </button>
    </div>
  );
};

export default TodoItem;
