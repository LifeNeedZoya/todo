import { useState } from "react";
import "./App.css";
import React from "react";
import TodoItem from "./components/TodoItem1";
import AddTodo from "./components/AddTodo";
import TodoHeader from "./components/TodoHeader1";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoName, setTodoName] = useState("");
  const [isBlank, setIsBlank] = useState(false);
  const doneTotal = todos.filter((el) => el.isDone === true);

  const taskDone = (id) => {
    console.log(id);
    const findIndex = todos.findIndex((todo) => todo.id === id);
    const newArr = [...todos];
    newArr[findIndex] = {
      ...newArr[findIndex],
      isDone: !newArr[findIndex].isDone,
    };
    setTodos(newArr);
  };

  const addTodoItem = () => {
    const newTask = { id: Date.now(), name: todoName, isDone: false };
    setTodos([...todos, newTask]);
    setTodoName("");
  };

  const isInputBlank = (todoName) => {
    console.log("todoName", todoName.length);
    todoName.length === 0 ? alert("Enter input") : addTodoItem();
  };

  const change = (event) => {
    setTodoName(event.target.value);
  };

  const deleteTask = (id) => {
    console.log(id);
    const findIndex = todos.findIndex((todo) => todo.id === id);
    const newArr = [...todos];
    newArr.splice(findIndex, 1);
    setTodos(newArr);
  };

  return (
    <div className="App">
      <TodoHeader doneTotal={doneTotal} total={todos.length} />
      <div id="">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            taskDone={taskDone}
            deleteTask={deleteTask}
            onClick={() => {}}
          />
        ))}
      </div>
      <AddTodo
        todoName={todoName}
        addTodoItem={addTodoItem}
        change={change}
        isInputBlank={isInputBlank}
        isBlank={isBlank}
      />
    </div>
  );
}
export default App;
