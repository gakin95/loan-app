import React, { useState, useContext } from "react";
import { Layout } from "antd";
import "../../App.css";

import { AuthUser } from "../../contexts/user";

const { Content } = Layout;

const SignIn = (props) => {
  //get user signup details from AuthUser provider
  const { usernameContext, passwordContext } = useContext(AuthUser);

  const [username, setUsername] = useState(""),
    [password, setPassword] = useState(""),
    [error, setError] = useState(false);

  //check if the user details correspond to the
  // signup data
  const handleLogin = () => {
    console.log(username, password);
    console.log(usernameContext, passwordContext);
    if (username === usernameContext && password === passwordContext) {
      props.history.push("/dashboard");
    } else {
      setError(true);
    }
  };

  return (
    <Layout className="layout bg-color">
      <Content style={{ padding: "0 50px" }}>
        <div className="center">
          <div className="header-label">Signin</div>
          <div className="user-error">
            {error ? "Username/Password incorect" : ""}
          </div>
          <form>
            <div className="user-wrapper">
              <div className="user-label">Username</div>
              <input
                type="text"
                name="username"
                onChange={(e) => setUsername(e.target.value)}
                className="user-inputs"
                value={username}
              />
            </div>
            <div className="user-wrapper">
              <div className="user-label">Password</div>
              <input
                type="password"
                name="password"
                value={password}
                className="user-inputs"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="user-wrapper btn-center">
              <button
                onClick={() => handleLogin()}
                type="button"
                className="btn"
              >
                Signin
              </button>
            </div>
          </form>
          <div className="user-wrapper">
            {/* <div className="signup-label">
                New user? <Link to="/signup">Signup</Link>
              </div> */}
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default SignIn;
