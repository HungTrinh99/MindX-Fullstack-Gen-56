import AuthAPI from "../../services/auth";

// Aciton type
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";

export const LOG_OUT = "LOG_OUT";
export const LOAD_USER = "LOAD_USER";
export const LOAD_USER_ERROR = "LOAD_USER_ERROR";

// reducer
const authReducer = (state, action) => {
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
        error: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };
    case LOGIN_ERROR:
    case LOG_OUT:
    case LOAD_USER_ERROR:
      return {
        ...state,
        loading: false,
        user: null,
        isAuthenticated: false,
        error: payload,
        token: null,
      };
    case LOAD_USER:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };

    default:
      return;
  }
};

export default authReducer;

// Action creator
export const login = async (formData, dispatch) => {
  dispatch({
    type: LOGIN_REQUEST,
  });

  try {
    const apiResponse = await AuthAPI.login(formData);
    console.log("apiResponse-", apiResponse);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: apiResponse.data,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_ERROR,
      payload: error.response.data.msg,
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
  } catch (err) {
    dispatch({ type: LOAD_USER_ERROR });
  }
};
