import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos }) => {
  return (
    <div>
      {todos.length === 0 ? (
        <p>Please add new task</p>
      ) : (
        todos.map((todo) => <TodoItem todo={todo} key={todo.id} />)
      )}
    </div>
  );
};

export default TodoList;
