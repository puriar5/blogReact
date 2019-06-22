import React, { Component } from "react";
import {Link} from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Sidebar from "./Components/Sidebar";
import { Row, Col } from "antd";
import Axios from "axios";
import NotFound from "./NotFound";

const gridStyleMain = {
  width: "30%",
  maxHeight: "30%"
};

export default class Detail extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
  }

  state = {
    blogs: {
      title: "",
      image: "",
      desc: ""
    },
    error: false
  }
  componentDidMount() {
    // const ddd = window.location.href;
    // const x = ddd.split("/");
    // const blogNum = x.pop();

    Axios.get(`/blogs/${this.props.match.params.id}`)
      .then(data => {
        console.log(this.props.match.params.id);
        this.setState({
          blogs: data.data
        })
      })
      .catch(error => {
        if(error.response.status === 404){
          this.setState({    
            error: true    
          })
        }
      })
  }
  componentWillReceiveProps(nextProps) {
    Axios.get(`/blogs/${nextProps.match.params.id}`)
    .then(data => {
      console.log(this.props.match.params.id);
      this.setState({
        blogs: data.data
      })
    })
    .catch(error =>{
      if(error.response.status===404){
        this.setState({
          error: true
        })
      }
    })
  }
  render() {
    let { id, createdAt, title, desc, image } = this.state.blogs;
    let prev = this.props.match.params.id - 1;
    let next = prev + 2;
    console.log(prev, next)
    if(this.state.error) return <NotFound />
    return (
      <MainLayout>
        <h1>Detail</h1>
        <Row>
          <Col span={20} push={4}>
              <div>
                <img alt={"example" + id} src={image} style={gridStyleMain} />
                <h2>{title}</h2><h4>{createdAt}</h4>
                <p>{desc}</p>
              </div>
              <div>
                <h4>Similar Blogs</h4>
                <ul>
                <li><Link to = {`/blogs/${prev}`}>Link {prev}</Link></li>
                <li><Link to = {`/blogs/${next}`}>Link {next}</Link></li>
                </ul>                
              </div>
          </Col>
          <Col span={4} pull={20}>
            <Sidebar />
          </Col>
        </Row>
      </MainLayout>
    );
  }
}
