import { response } from "express";
import AuthAPI from "../../services/auth";
import {
  FETCH_USER,
  FETCH_USER_ERROR,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOG_OUT,
} from "../types";

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
        error: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...payload,
        loading: false,
        isAuthenticated: true,
      };

    case FETCH_USER:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        ...payload,
      };
    case LOGIN_FAIL:
    case FETCH_USER_ERROR:
    case LOG_OUT:
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        error: payload,
        token: null,
        user: null,
      };

    default:
      return;
  }
};

export default reducer;

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

export const fetchUserData = async (dispatch) => {
  try {
    const response = await AuthAPI.loadUser();

    dispatch({
      payload: response.data,
      type: FETCH_USER,
    });
  } catch (e) {
    dispatch({
      type: FETCH_USER_ERROR,
      payload: e.response.data.msg,
    });
  }
};
