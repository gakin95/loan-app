import React from "react";
import { Card, Col, Row } from "antd";
import ApplyButton from "../../Comonents/ApplyButton";

const LoanTypes = () => {
  return (
    <div className="site-card-wrapper">
      <Row gutter={16}>
        <Col span={8}>
          <Card title="Tier 1" bordered={false}>
            This type of loan is available to all our customers at the rate of
            3.3%
            <br />
            <ApplyButton />
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Tier 2" bordered={false}>
            This type of loan is available to all our customers at the rate of
            2.1%
            <br />
            <ApplyButton />
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Tier 3" bordered={false}>
            This type of loan is available to all our customers at the rate of
            4.1%
            <br />
            <ApplyButton />
          </Card>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={8}>
          <Card title="Tier 4" bordered={false}>
            This type of loan is available to all our customers at the rate of
            0.1%
            <br />
            <ApplyButton />
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Tier 5" bordered={false}>
            This type of loan is available to all our customers at the rate of
            0.5%
            <br />
            <ApplyButton />
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Tier 6" bordered={false}>
            This type of loan is available to all our customers at the rate of
            0.8%
            <br />
            <ApplyButton />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default LoanTypes;
