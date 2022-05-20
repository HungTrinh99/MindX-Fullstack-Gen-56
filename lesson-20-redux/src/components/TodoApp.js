import React, { useState } from "react";
import { AddTodo } from "./AddTodo";
import TodoList from "./TodoList";

const TodoApp = () => {
  return (
    <div className="todoapp__container">
      <h4 className="todoapp__title">Todo Application</h4>
      <TodoList />
      <AddTodo />
    </div>
  );
};

export default TodoApp;
