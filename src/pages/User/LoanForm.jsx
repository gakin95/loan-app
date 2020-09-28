import React, { useState, useContext } from "react";
import { Layout } from "antd";
import "../../App.css";

import { AuthUser } from "../../contexts/user";

const { Content } = Layout;

const LoanForm = (props) => {
  //get user signup details from AuthUser provider
  const { usernameContext } = useContext(AuthUser);

  const [amount, setAmount] = useState(""),
    [error, setError] = useState(false);

  const handleSubmit = () => {
    if (amount !== "") {
      alert("Submission completed!");
    } else {
      setError(true);
    }
  };

  return (
    <Layout className="layout ">
      <Content style={{ padding: "0 50px" }}>
        <div className="" style={{ backgroundColor: "" }}>
          <div className="user-error" style={{ textAlign: "left" }}>
            {error ? "All fields are required" : ""}
          </div>
          <form>
            <div className="user-wrapper">
              <div className="loan-form-label">Username</div>
              <input
                style={{ width: "50%" }}
                type="text"
                name="username"
                disabled={true}
                onChange={(e) => console.log(usernameContext)}
                className="user-inputs"
                value={usernameContext}
              />
            </div>
            <div className="user-wrapper">
              <div className="loan-form-label">Amount</div>
              <input
                style={{ width: "50%" }}
                type="text"
                value={amount}
                className="user-inputs"
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <div className="user-wrapper">
              <div className="loan-form-label">Rate</div>
              <input
                style={{ width: "50%" }}
                type="text"
                disabled={true}
                value={"10%"}
                className="user-inputs"
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <div className="user-wrapper btn-center">
              <button
                style={{ float: "left" }}
                onClick={() => handleSubmit()}
                type="button"
                className="btn"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </Content>
    </Layout>
  );
};

export default LoanForm;
