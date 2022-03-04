import React, { Component } from "react";
import AddTodo from "./AddTodo";
import "./TodoApp.css";
import TodoFilter from "./TodoFilter";
import TodoList from "./TodoList";
class TodoApp extends Component {
  state = {
    todos: [],
  };

  onAddNewTodo = (todo) => {
    this.setState({
      todos: [todo, ...this.state.todos],
    });
  };
  render() {
    const { todos } = this.state;
    return (
      <div className="todo-wrapper">
        <div className="todo-container">
          <TodoFilter />
          <TodoList todos={todos} />
          <AddTodo onAddNewTodo={this.onAddNewTodo} />
        </div>
      </div>
    );
  }
}
export default TodoApp;
