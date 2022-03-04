import React from "react";

const TodoItem = ({ todo }) => {
  const { id, content, isCompleted } = todo;
  return <div>{content}</div>;
};
export default TodoItem;
