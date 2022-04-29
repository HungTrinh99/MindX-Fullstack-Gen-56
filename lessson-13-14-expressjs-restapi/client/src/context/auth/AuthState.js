import { useEffect, useReducer } from "react";
import { setAuthToken } from "../../utils/auth";
import AuthContext from "./AuthContext";
import reducer, { fetchUserData } from "./AuthReducer";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: false,
    loading: false,
    error: null,
    user: null,
    signupError: null,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    setAuthToken(state.token);
    fetchUserData(dispatch);
  }, [state.token]);

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
