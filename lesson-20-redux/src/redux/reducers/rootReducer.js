import { combineReducers } from "redux";
import TodoReducer from "./TodoReducer";
import UserReducer from "./UserReducer";
import CourseReducer from "./CourseReducer";

const rootReducer = combineReducers({
  todo: TodoReducer,
  user: UserReducer,
  courses: CourseReducer,
});

export default rootReducer;
