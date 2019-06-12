import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Layout, Menu } from 'antd';
const { Sider } = Layout;


const MenuPointer ={
    cursor: 'pointer'
  };
  

export default class Slidebar extends Component {
    render() {
        return (
        
            <Sider>
            <Menu mode="inline">
            <Menu.Item disabled style={MenuPointer}>
            <h3>Recent</h3>
            </Menu.Item>
            <Menu.Item key="1">
             <span> <Link to={`/blogs/1`}>Blog 1</Link></span>
            </Menu.Item>
            <Menu.Item key="2">
            <span> <Link to={`/blogs/2`}>Blog 2</Link></span>
            </Menu.Item>
            <Menu.Item key="3">
              <span> <Link to={`/blogs/3`}>Blog 3</Link></span>
            </Menu.Item>
            </Menu>
            </Sider>
        
        )
    }
}


