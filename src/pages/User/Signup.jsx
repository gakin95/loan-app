import React, { useState, useContext } from "react";
import { Layout } from "antd";
import "../../App.css";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { AuthUser } from "../../contexts/user";

const { Content } = Layout;

const SignUp = (props) => {
  const { setUsername, setPassword } = useContext(AuthUser);
  const [error, setError] = useState('')
  const [state, setState] = useState({
    fullname: "",
    username: "",
    password: "",
  });
 // validation 
 const validateSignup = ({username, password, fullname }) => {
      if (fullname.length < 5) {
        setError('Full name must be greater than four characters');
        return
      }
      if (username.trim().length < 3) {
        setError('Username must be greater than two characters');
        return
      }
      if (password.trim().length < 3) {
        setError('password must be greater than two characters');
        return
      }
      return true
 }
  //handle signup
  const handleSignup = (e) => {
    e.preventDefault();
    if (validateSignup(state)) {
      //fake an api call
      props.onSignup(state);
     // redirect to signin component after singup
      props.history.push("/signin");
    }

    // if (
    //   state.fullname !== "" ||
    //   state.username !== "" ||
    //   state.password !== ""
    // ) {
    //   //set user details inside context
    //   props.onSignup(state);
    //   setUsername(state.username);
    //   setPassword(state.password);

    //   // redirect to signin component after singup
    //   props.history.push("/signin");
    // }
  };

  let { username, password, fullname } = state;

  return (
    <Layout className="layout bg-color">
      <Content style={{ padding: "0 50px" }}>
        <div className="center">
          <p style={{color:'red'}}>{error}</p>
          <div className="header-label">Signup</div>
          <div className="user-error">{props.error}</div>
          <form>
            <div className="user-wrapper">
              <div className="user-label">Fullname</div>
              <input
                type="text"
                name="fullname"
                onChange={(e) =>
                  setState({ ...state, fullname: e.target.value })
                }
                className="user-inputs"
                value={fullname}
              />
            </div>
            <div className="user-wrapper">
              <div className="user-label">Username</div>
              <input
                type="text"
                onChange={(e) =>
                  setState({ ...state, username: e.target.value })
                }
                className="user-inputs"
                value={username}
              />
            </div>
            <div className="user-wrapper">
              <div className="user-label">Password</div>
              <input
                type="password"
                onChange={(e) =>
                  setState({ ...state, password: e.target.value })
                }
                className="user-inputs"
                value={password}
              />
            </div>
            <div className="user-wrapper btn-center">
              <button onClick={handleSignup} type="button" className="btn">
                Signup
              </button>
            </div>
          </form>
        </div>
      </Content>
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.signup.user ? state.signup.user : null,
    error: state.signup.error,
    loading: state.signup.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSignup: (data) => dispatch(actions.SignupAction(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
