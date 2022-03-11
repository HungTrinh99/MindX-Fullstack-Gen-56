import React, { Component } from "react";
import AddTodo from "./AddTodo";
import "./TodoApp.css";
import TodoFilter from "./TodoFilter";
import TodoList from "./TodoList";
class TodoApp extends Component {
  state = {
    todos: [],
    filterValue: "",
  };

  onAddNewTodo = (todo) => {
    this.setState({
      todos: [todo, ...this.state.todos],
    });
  };

  onUpdateStatus = (id) => {
    const { todos } = this.state;
    const idx = todos.findIndex((todo) => todo.id === id);
    const currentStatus = todos[idx]["isCompleted"];
    todos[idx]["isCompleted"] = !currentStatus; //toggle
    this.setState({
      todos: todos,
    });
  };

  onFilterChange = (filterValue) => {
    this.setState({
      filterValue,
    });
  };
  render() {
    const { todos, filterValue } = this.state;
    return (
      <div className="todo-wrapper">
        <div className="todo-container">
          <TodoFilter onFilterChange={this.onFilterChange} />
          <TodoList
            todos={todos}
            onUpdateStatus={this.onUpdateStatus}
            filterValue={filterValue}
          />
          <AddTodo onAddNewTodo={this.onAddNewTodo} />
        </div>
      </div>
    );
  }
}
export default TodoApp;
