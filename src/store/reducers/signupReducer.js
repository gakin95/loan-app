import * as actionTypes from "../actions/actionTypes";

const initialState = {
  user: null,
  error: null,
  loading: false,
};

const SignupReduder = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGNUP_START:
      return { ...state, loading: true };
    case actionTypes.SIGNUP_SUCCESS:
      return { ...state, loading: false, user: action.payload, error: null };
    case actionTypes.SIGNUP_FAIL:
      return { ...state, loading: false, error: action.error, user: null };
    default:
      return state;
  }
};

export default SignupReduder;