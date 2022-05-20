import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
  const { todos } = useSelector((state) => state.todo);
  return (
    <div>
      {todos && todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
    </div>
  );
};

export default TodoList;

// import React from "react";
// import { connect } from "react-redux";
// import TodoItem from "./TodoItem";

// const TodoList = (props) => {
//   const { todos } = props;
//   return (
//     <div>
//       {todos && todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
//     </div>
//   );
// };

// const mapStateToProps = (state) => {
//   const { todos } = state.todo;
//   const { isAuthenticated } = state.user;
//   return {
//     todos,
//     isAuthenticated,
//   };
// };

// export default connect(mapStateToProps)(TodoList);
