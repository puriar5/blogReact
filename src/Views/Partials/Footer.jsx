import React, { Component } from 'react'
import  { Row, Col } from 'antd';

export default class Footer extends Component {
    render() {
        return (
           <footer>
               <div className="wrapper">
                   <Row gutter={30}>
                       <Col span={12}>
                       ©2019 
                       </Col>
                       <Col span={12} style={{ textAlign: 'right' }}>
                           Rup Design
                       </Col>

                   </Row>
               </div>
           </footer>
        )
    }
}
