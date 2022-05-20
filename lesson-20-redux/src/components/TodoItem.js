import React from "react";
import { useDispatch } from "react-redux";
import { TOGGLE_TODO_ITEM } from "../redux/type";

const TodoItem = (props) => {
  const { todo } = props;
  const { isCompleted, title, id } = todo;
  const dispatch = useDispatch();

  const classes = isCompleted ? "completed" : null;

  const onCompleteTodo = () => {
    const action = {
      type: TOGGLE_TODO_ITEM,
      payload: id,
    };
    dispatch(action);
  };

  return (
    <div className="todo-item__container">
      <span className={classes}>{title}</span>
      <input
        type="checkbox"
        className="todo-item__checkbox"
        checked={isCompleted}
        onChange={onCompleteTodo}
        defaultChecked={isCompleted}
      />
    </div>
  );
};

export default TodoItem;
