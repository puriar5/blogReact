import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import  { Row, Col, Button } from 'antd';

export default class Header extends Component {
    handleSignout = () => {
        localStorage.isAuthenticated = 'false'
        window.location.reload();
    }
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
                               <li>
                                   <Link to="/admin/dashboard">Dashboard</Link>
                               </li>
                               {
                                    localStorage.isAuthenticated === "true" ? 
                                    <li>
                                        <Button type="danger" onClick={this.handleSignout}>
                                            Signout
                                        </Button>
                                    </li> :
                                    <li>
                                        <Link to="/login">
                                            <Button type="primary" block>
                                                Login
                                            </Button>
                                        </Link>
                                    </li>
                                }

                           </ul>
                       </Col>

                   </Row>
               </div>
           </header>
        )
    }
}
