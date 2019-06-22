import React, { Component } from "react";
import MainLayout from "./Layouts/MainLayout";
import { Row, Col, Card } from "antd";
import Cards from "./Components/Cards";
import Picks from "./Components/Picks";
import Buttons from "./Components/Buttons";



const gridStyle = {
  width: "50%",
  textAlign: "center",
  height: "100%"
};
const gridHeight = {
  height: "50%"
};
const colHeight = {
  height: "100%"
};

export default class Home extends Component {
  render() {
    return (
      <MainLayout>
        <h1>Home</h1>
        <Picks />
        <Buttons />
        <br />
        <br />
        <Row type="flex">
          <Cards />
          <Col span={12}>
            <Row style={gridHeight}>
              <Col span={24} style={colHeight}>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
              </Col>
            </Row>
            <Row style={gridHeight}>
              <Col span={24} style={colHeight}>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
              </Col>
            </Row>
          </Col>
        </Row>
      </MainLayout>
    );
  }
}
