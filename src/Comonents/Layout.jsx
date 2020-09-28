import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "../App.css";

import { Layout } from "antd";
import "antd/dist/antd.css";

import MyFooter from "../Comonents/MyFooter";
import SiderItems from "../Comonents/SiderItems";

const { Header, Content, Footer } = Layout;

const LayOut = ({ children }) => {
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
                style={{ color: "white", fontSize: 20, fontFamily: "cursive" }}
              >
                Loans at best interest rate ever!
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

export default LayOut;
