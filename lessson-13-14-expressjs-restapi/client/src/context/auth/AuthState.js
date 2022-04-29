import { useEffect, useReducer } from "react";
import AuthContext from "./AuthContext";
import AuthAPI from "../../services/auth";
import setAuthToken from "../../utils/auth";
// Types
const LOGIN_REQUEST = "LOGIN_REQUEST";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAIL = "LOGIN_ERROR";

const LOG_OUT = "LOG_OUT";
const LOAD_USER = "LOAD_USER";
const LOAD_USER_ERROR = "LOAD_USER_ERROR";

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
    case LOAD_USER_ERROR:
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        user: null,
      };

    case LOAD_USER:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload,
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

export const loadUser = async (dispatch) => {
  try {
    const res = await AuthAPI.loadUser();
    dispatch({
      type: LOAD_USER,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: LOAD_USER_ERROR,
    });
  }
};

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: false,
    loading: false,
    error: null,
    user: null,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  // set token on initial app loading
  setAuthToken(state.token);

  useEffect(() => {
    setAuthToken(state.token);
    loadUser(dispatch);
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
