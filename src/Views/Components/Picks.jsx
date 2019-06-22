import React, { Component } from "react";
import Axios from 'axios'
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
  state ={
    blogs: [],
}

componentDidMount() {
    Axios.get(`/blogs`)
    .then((data) => {
      let rowblogs = data.data.reverse();

      let blogs = rowblogs.filter((obj, i) =>{
        return i<3
      })
        this.setState({
          blogs
        })
    })
    .catch(err => {
        console.log(err);
    })
}
  render() {
    return (
      <div style={{ background: "#ECECEC", padding: "30px" }}>
        <Title>Top Picks</Title>
        <Row gutter={16}>
        {
          this.state.blogs.map((blog) => {
            let {id, title, image } = blog;
            return (
            <Col span={8} key={id}>
              <Link to={`/blogs/${id}`}>
                <div className="hvrbox">
                  <Card.Grid style={cardStyle}>
                    <img
                      alt={"example"+id}
                      src={image}
                      style={gridStyleMain}
                      className="hvrbox-layer_bottom"
                    />
                  </Card.Grid>
                  <div className="hvrbox-layer_top">
                    <div className="hvrbox-text">{title}</div>
                  </div>
                </div>
              </Link>
            </Col>
          )
            
             
        })
        }
        </Row>
      </div>
      //   mountNode
    );
  }
}
