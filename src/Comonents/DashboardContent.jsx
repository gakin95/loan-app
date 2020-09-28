import React from "react";
import { Table } from "antd";

import data from "../utilities/data";
import columns from "../utilities/columns";

function onChange(pagination, filters, sorter, extra) {
  console.log("params", pagination, filters, sorter, extra);
}

const DashboardContent = () => {
  return <Table columns={columns} dataSource={data} onChange={onChange} />;
};

export default DashboardContent;
