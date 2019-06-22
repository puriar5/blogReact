import React, { Component } from "react";
import Axios from "axios";
import MainLayout from "./Layouts/MainLayout";
import { Form, Input, Icon, Row, Col, Button } from "antd";

const { TextArea } = Input


class Update extends Component {
  state = {
    size: "large",
    title: "",
    image:"",
    description: ""
  };

  componentDidMount() {
    // this.props.form.setFieldsValue(this.state)
    Axios.get(`/blogs/`+this.props.match.params.id)
    .then(data =>{
      let { title, image, desc } =data.data
      this.setState({
        title,
        image,
        desc
      })
      this.props.form.setFieldsValue({
        title,
        image,
        desc
      })
    })
  }


  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (!err) {
        Axios.put(`/blogs/` + this.props.match.params.id, values)
        .then(data => {
          if(data.status ===200){
            // console.log('this is new data',data)
            this.props.history.push('/admin/dashboard');
          }
      })
      .catch(err => {
        console.log(err.response.status);
      })
    }
  })
}

  handleClick = () => {
    this.props.history.goBack();
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <MainLayout>
        <div style={{margin: '0 auto', paddingTop: 60, width: '60%'}}>
        <h1>Update</h1>
        <Row gutter={30}>
          <Col span={24}>
            <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
                        {getFieldDecorator('title', {
                            rules: [{ required: true,  message: 'Please input your title' }],
                        })(
                            <Input
                            type="text"
                            prefix={<Icon type="font-size" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Title"
                            />,
              )}
              </Form.Item>
              <Form.Item>
                        {getFieldDecorator('image', {
                            rules: [{ message: 'Please input source of your Image!' }],
                        })(
                            <Input
                            prefix={<Icon type="file-image" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="text"
                            placeholder="Image"
                            />,
                        )}
                    </Form.Item>
                    
                    <Form.Item>
                        {getFieldDecorator('desc', {
                            rules: [{required: true, message: 'Please enter description'}],
                        })(
                            <TextArea rows={4} placeholder="Enter description"/>
                        )}
                    </Form.Item>
              <Button block type="primary" htmlType="submit">
                Submit
              </Button>
            </Form>
            <br />
            <br />

            <Button type="primary" onClick={this.handleClick}>
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


const postForm = Form.create({ name: 'normal_login' })(Update);

export default postForm