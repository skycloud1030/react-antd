import React from "react";
import { Card, Input } from "antd";
import { Row, Col } from "antd";
import { Checkbox } from "antd";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
  }
  onInputChange = e => {
    this.setState({ name: e.target.value });
  };
  onChechChange = e => {
    console.log(`checked = ${e.target.checked}`);
  };
  render() {
    return (
      <div className="app">
        <Row gutter={16}>
          <Col xs={24}>
            <Input
              placeholder="Basic usage"
              value={this.state.name}
              onChange={this.onInputChange}
            />
          </Col>
          <Col xs={24}>Your input : {this.state.name}</Col>
          <Col xs={24}>
            <Checkbox onChange={this.onChechChange}>Checkbox</Checkbox>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col xs={24} xl={12}>
            <Card title="Default size card">
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
          <Col xs={24} xl={12}>
            <Card size="small" title="Small size card">
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
