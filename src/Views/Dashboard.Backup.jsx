import React, { Component } from "react";
import { Link } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import { Row, Col, Table, Button } from "antd";
import Axios from "axios";

const columns = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title"
    //   render: text => <a href="">{text}</a>,
  },
  {
    title: "CreatedAt",
    dataIndex: "createdAt",
    key: "createdAt"
  },
  {
    title: "Description",
    key: "desc",
    render: desc => <span>{desc.desc.substr(0, 30)}...</span>
  },

  {
    title: "Image",
    key: "image",
    render: image => (
      <span>
        {console.log(image.image)}
        <img alt={"example"} src={image.image} />
      </span>
    )
  },
  {
    title: "Action",
    key: "id",
    render: id => (
      <span>
        <Button type="primary">Update</Button> &nbsp;{" "}
        <Button
          type="danger"
          onClick={() => this.handleDelete(id)}
        >
          Delete
        </Button>
      </span>
    )
  }
];

export default class Dashboard extends Component {
  state = {
    blogs: []
  };
  componentDidMount() {
    Axios.get(`/blogs`)
      .then(data => {
        let blogs = data.data.reverse();
        this.setState({
          blogs
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleDelete = id => {
    Axios.delete(`/blogs/${id}`)
    .then(data => {
      console.log(id);
        this.props.history.push('/blogs')
    })
}


  render() {
    return (
      <MainLayout>
        <Row gutter={10}>
          <Col span={3}>
            <h1>Dashboard</h1>
            <Link to="/admin/insert">
              <h2>Insert</h2>
            </Link>
            <Link to="/admin/update">
              <h2>Update</h2>
            </Link>
          </Col>
          <Col span={21}>
            <Table columns={columns} dataSource={this.state.blogs} />
          </Col>
        </Row>
      </MainLayout>
    );
  }
}
