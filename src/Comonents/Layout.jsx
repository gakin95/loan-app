import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "../App.css";

import { Layout } from "antd";
import "antd/dist/antd.css";

import MyFooter from "../Comonents/MyFooter";
import SiderItems from "../Comonents/SiderItems";
import { connect } from "react-redux";

const { Header, Content, Footer } = Layout;

const LayOut = ({ children, ...props }) => {
  const user = props.user;
  console.log('user',user)
  return (
    <>
      <Router>
        <Layout>
          <SiderItems />
          <Layout>
            <Header
              className="site-layout-sub-header-background"
              style={{ padding: 0 }}
            >
              <div
                className="user-dashboard-header"
              >
                <p>Loans at best interest rate ever!</p>
                <p className='welcome'>Welcome, {user?user.username:''}</p>
              </div>
            </Header>
            <Content style={{ margin: "24px 16px 0" }}>
              <div
                className="site-layout-background"
                style={{ padding: 24, minHeight: 360 }}
              >
                {children}
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              <MyFooter />
            </Footer>
          </Layout>
        </Layout>
      </Router>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.signup.user ? state.signup.user : null,
    error: state.signup.error,
    loading: state.signup.loading,
  };
};

export default connect(mapStateToProps)(LayOut);
