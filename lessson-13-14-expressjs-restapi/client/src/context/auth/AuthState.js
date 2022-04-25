import { useReducer } from "react";
import AuthContext from "./AuthContext";
import AuthAPI from "../../services/auth";
// Types
const LOGIN_REQUEST = "LOGIN_REQUEST";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAIL = "LOGIN_ERROR";

const LOG_OUT = "LOG_OUT";
// Reducer
const reducer = (state, action) => {
  const { type, payload } = action;
  console.log({
    type,
    payload,
  });
  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        user: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...payload,
        loading: false,
        isAuthenticated: true,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        error: payload,
      };
    case LOG_OUT:
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        user: null,
        fullName: null,
      };

    default:
      return;
  }
};

// Action creator
export const login = async (formData, dispatch) => {
  dispatch({
    type: LOGIN_REQUEST,
  });

  try {
    let response = await AuthAPI.login(formData);
    const action = {
      type: LOGIN_SUCCESS,
      payload: response.data,
    };

    dispatch(action);
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
      payload: err.response.data.msg,
    });
  }
};

export const logout = (dispatch) => {
  dispatch({
    type: LOG_OUT,
  });
};

const AuthState = (props) => {
  const initialState = {
    token: null,
    isAuthenticated: false,
    loading: false,
    error: null,
    user: null,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

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
