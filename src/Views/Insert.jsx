import React, { Component } from "react";
// import {Redirect} from 'react-router-dom';
import Axios from "axios";
import MainLayout from "./Layouts/MainLayout";
import { Form, Input, Icon, Row, Col, Button } from "antd";

const {TextArea} = Input

export default class Insert extends Component {
  state = {
    size: "large",
    title: "",
    description: ""
  };

  componentDidMount() {
    console.log("Component Did Mount");
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    
      /* Two ways to post in axios
    Fist way ||
    vv
    */
   /*
   Axios.post(`/blogs`,values)
   .then(data => {
     if(data.status===201){
       this.props.history.push('/blogs')
      }
    })
     */
     
    Axios.post(`/blogs`, {
      title: this.state.title,
      image: this.state.image,
      desc: this.state.description
    })
      .then(response => {
        console.log(response);
        // window.location.href = "/blogs";
        this.props.history.push('/admin/dashboard');
      })
      .catch(err => {
        console.log(err);
      });
      // window.location('/');
      
    // this.props.history.goBack();
    
  };

  handleClick = () => {
    this.props.history.goBack();
  };

  render() {
    const size = this.state.size;
    return (
      <MainLayout>
        <div style={{margin: '0 auto', paddingTop: 60, width: '60%'}}>
        <h1>Insert</h1>
        <Row gutter={30}>
          <Col span={24}>
            <Form onSubmit={this.handleSubmit}>
              <Form.Item label="Title" htmlFor="title">
                <Input
                  type="Title"
                  placeholder="Title"
                  name="title"
                  id="title"
                  required={true}
                  onChange={this.handleChange}
                />{" "}
              </Form.Item>
              <Form.Item label="Image" htmlFor="image">
                <Input
                  type="text"
                  placeholder="Image"
                  name="image"
                  id="image"
                  onChange={this.handleChange}
                />{" "}
              </Form.Item>
              <Form.Item label="Description" htmlFor="title">
              <TextArea rows={4} 
                  placeholder="Enter description" 
                  name="description"
                  id="description"
                  onChange={this.handleChange}/>
                {/* <textarea
                  rows={4}
                  cols={87}
                  name="description"
                  id="description"
                  placeholder="Description"
                  onChange={this.handleChange}
                /> */}
              </Form.Item>
              <Button block type="primary" htmlType="submit">
                Insert
              </Button>
            </Form>
            <br />
            <br />

            <Button size={size} type="primary" onClick={this.handleClick}>
              <Icon type="left" />
              Go Back
            </Button>
          </Col>
        </Row>
        </div>
      </MainLayout>
    );
  }
}
