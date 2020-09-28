import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import "./App.css";

import AuthUserContextProvider from "./contexts/user";

import Dashboard from "./pages/User/Dashborad";
import SignIn from "./pages/User/Signin";
import SignUp from "./pages/User/Signup";

import SignupReduder from "./store/reducers/signupReducer";

const rootReducers = combineReducers({
  signup: SignupReduder,
});

function logger({ getState }) {
  return (next) => (action) => {
    const returnValue = next(action);
    return returnValue;
  };
}

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;
const store = createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(logger, ReduxThunk))
);

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={SignIn} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/dashboard" component={Dashboard} />
    </Router>
  );
};

export default () => {
  return (
    <Provider store={store}>
      <AuthUserContextProvider>
        <App />
      </AuthUserContextProvider>
    </Provider>
  );
};
