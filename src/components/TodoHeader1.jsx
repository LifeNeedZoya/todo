import React from "react";
const TodoHeader = ({ total, doneTotal }) => {
  return (
    <header>
      <h1>
        My Todo list {doneTotal.length}/{total}
      </h1>
    </header>
  );
};
export default TodoHeader;
