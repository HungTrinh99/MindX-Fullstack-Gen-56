import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_NEW_TODO } from "../redux/type";

export const AddTodo = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();

    //dispatch action ADD_NEW_TODO to TodoReducer => handle add todo
    const action = {
      payload: value,
      type: ADD_NEW_TODO,
    };
    dispatch(action);
    setValue("");
  };
  return (
    <div className="add-todo__container">
      <form onSubmit={onSubmitHandler}>
        <input
          value={value}
          name="todo"
          onChange={onChangeHandler}
          className="todo-input"
          placeholder="Add new to do..."
        />
        <button type="submit" className="btn-add-todo">
          Add
        </button>
      </form>
    </div>
  );
};
