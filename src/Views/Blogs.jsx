import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, Col, Row, Pagination  } from "antd";
import MainLayout from "./Layouts/MainLayout";
import Sidebar from "./Components/Sidebar";
import Axios from "axios";
// import BlogThumb from './Components/BlogThumb'



const gridStyleMain = {
  width: "100%",
  height: "100%"
};
const cardStyle = {
  width: "100%",
  height: "100%",
  marginBottom: "20px"
};

export default class Blogs extends Component {
  state = {
    blogs: []
  }

  componentDidMount() {
    Axios
    .get(`/blogs`)
      .then((data) => {
        // let blogs = data.data.sort((a, b) => {return b.id - a.id});
        let blogs = data.data.reverse();
        this.setState({
          blogs
        })
      })
      .catch(err => {
        console.log(err.response.status);
      })
  }
  render() {
    return (
      <MainLayout>
        <h1>Blogs</h1>
        <Row>
          <Col span={20} push={4}>
            <Row gutter={20}>
              {this.state.blogs.map((blog) => {
                let {id,title, image} = blog;
                return (
                  <Col span={8} key={id}>
                    <Link to={`/blogs/${id}`}>
                      <div className="hvrbox">
                        <Card.Grid style={cardStyle}>
                          <img alt={"example"+id} src={image}
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
                );
              })}
              <Pagination defaultCurrent={1} total={50} />
            </Row>
          </Col>
          <Col span={4} pull={20}>
            <Sidebar />
          </Col>
        </Row>
        
      </MainLayout>
    );
  }
}
