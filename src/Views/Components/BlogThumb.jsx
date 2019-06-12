import React, { Component } from 'react'
import { Col, Card } from 'antd'

const gridStyleMain ={
    width:'100%',
    height:'100%'
};

const cardStyle ={
    width:'100%',
    height:'100%',
    marginBottom:'20px'
};

export default class Buttons extends Component {
  render() {
    return (
        
        <Col span={8}>
            <div className="hvrbox">
                <Card.Grid style={cardStyle}>
                    <img alt="example" src="/images/panda.png" style={gridStyleMain} className="hvrbox-layer_bottom"/>
                </Card.Grid>
                <div className="hvrbox-layer_top">
		            <div className="hvrbox-text">Blog</div>
                </div>            
            </div>
        </Col>
        
    )
  }
}
