import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import  { Row, Col } from 'antd';

export default class Header extends Component {
    render() {
        return (
           <header>
               <div className="wrapper">
                   <Row gutter={30}>
                       <Col span={12}>
                       <img src="/images/Logo.png" alt="Brand" />
                       </Col>
                       <Col span={12}>
                           <ul className="nav-menu">
                               <li>
                                   <Link to="/">Home</Link>
                               </li>
                               <li>
                                   <Link to="/blogs">Blogs</Link>
                               </li>
                               <li>
                                   <Link to="/contact">Contact</Link>
                               </li>

                           </ul>
                       </Col>

                   </Row>
               </div>
           </header>
        )
    }
}
