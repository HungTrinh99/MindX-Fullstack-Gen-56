import { combineReducers } from "redux";
import TodoReducer from "./TodoReducer";
import UserReducer from "./UserReducer";

const rootReducer = combineReducers({
  todo: TodoReducer,
  user: UserReducer,
});

export default rootReducer;
