import { useEffect, useReducer } from "react";
import { setAuthToken } from "../../utils/auth";
import AuthContext from "./authContext";
import authReducer, { loadUser } from "./authReducer";
const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: false,
    loading: false,
    user: null,
    error: null,
  };
  console.log(initialState);

  const [state, dispatch] = useReducer(authReducer, initialState);

  //load user on first run or refresh
  useEffect(() => {
    setAuthToken(state.token);
    loadUser(dispatch);
  }, []);

  // "watch" state.token and set headers and local storage on any changes
  useEffect(() => {
    console.log("runsss");
    setAuthToken(state.token);
  }, [state.token]);

  return (
    <AuthContext.Provider value={{ state: state, dispatch }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
