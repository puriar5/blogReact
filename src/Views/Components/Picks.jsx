import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Typography, Card, Col, Row } from "antd";
const { Title } = Typography;

const gridStyleMain = {
  width: "100%",
  height: "100%"
};

const cardStyle = {
  width: "100%",
  height: "100%",
  marginBottom: "20px"
};

export default class Picks extends Component {
  render() {
    var num = [1, 2, 3];
    return (
      <div style={{ background: "#ECECEC", padding: "30px" }}>
        <Title>Top Picks</Title>
        <Row gutter={16}>
          {num.map(item => (
            <Col span={8}>
              <Link to={`/blogs/${item}`}>
                <div className="hvrbox">
                  <Card.Grid style={cardStyle}>
                    <img
                      alt="example"
                      src="/images/panda.png"
                      style={gridStyleMain}
                      className="hvrbox-layer_bottom"
                    />
                  </Card.Grid>
                  <div className="hvrbox-layer_top">
                    <div className="hvrbox-text">Blog{item}</div>
                  </div>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
      //   mountNode
    );
  }
}
