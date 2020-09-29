import React from "react";
import { Menu, Layout } from "antd";
import { Link } from "react-router-dom";

import {
  LogoutOutlined,
  HomeOutlined,
  PlusCircleOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;

const SiderItems = ({click}) => {
  return (
    <Sider
    style={{height:'100vh'}}
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="logo">Loan-App</div>

      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link to="/dashboard">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<UnorderedListOutlined />}>
          <Link to="/packages">Available Loan Types</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<PlusCircleOutlined />}>
          <Link to="/application">Loan Application</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<LogoutOutlined />} onClick = {click}>
          <Link >Signout</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SiderItems;
