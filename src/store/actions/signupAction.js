import * as actionTypes from "./actionTypes";

export const signupStart = () => {
  return {
    type: actionTypes.SIGNUP_START,
  };
};

export const signupSuccess = (payload) => {
  return {
    type: actionTypes.SIGNUP_SUCCESS,
    user: payload,
  };
};

export const signupFail = (error) => {
  return {
    type: actionTypes.SIGNUP_FAIL,
    error,
  };
};

export const SignupAction = (data) => {
  return (dispatch) => {
    dispatch(signupStart());

    if (data.fullname === "") {
      dispatch(signupFail("All fields are required!!"));
    } else {
      dispatch(signupSuccess(data));
    }
  };
};
