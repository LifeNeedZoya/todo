import React from "react";

const AddTodo = ({ change, addTodoItem, todoName, isInputBlank, isBlank }) => {
  return (
    <div id="addInput">
      <input
        type="text"
        onChange={change}
        value={todoName}
        onKeyUp={(e) => {
          {
            console.log("e", e.code);
          }
          if (e.code === "Enter") {
            addTodoItem();
          }
        }}
      />
      <button
        onClick={() => {
          isBlank ? addTodoItem() : isInputBlank(todoName);
        }}
      >
        add
      </button>
    </div>
  );
};

export default AddTodo;
