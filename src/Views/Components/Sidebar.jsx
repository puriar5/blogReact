import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import axios from 'axios';
const { Sider } = Layout;


export default class Slidebar extends Component {
  state ={
    blogs: [],
}

componentDidMount() {
    axios.get(`https://5d024bd99ce12c0014e0f50e.mockapi.io/api/blogs`)
    .then((data) => {
      let latest = data.data.sort((a,b) => {return b.id - a.id});

      let blogs = latest.filter((obj, i) =>{
        return i<8
      })
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
      <Sider>
        <Menu mode="inline">
          <h3 className='h3Centre'>Recent</h3>
          {
            this.state.blogs.map((blog) => {
              let {id, title } = blog;
              // let {id, title, desc, image } = blog;
            return (
              <Menu.Item key={id}>
                <Link to={`/blogs/${id}`}>
                <span>
                  
                  {title} 
                  {/* {desc} */}
                  
                </span>
                </Link>
              </Menu.Item>
            );
            
          })}
        </Menu>
      </Sider>
    );
  }
}
