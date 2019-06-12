import React, { Component } from 'react'
import { Card } from 'antd';
import { Col } from 'antd';

const {Grid} = Card; 

const gridStyleMain ={
  width:'100%',
  height:'100%'
};


export default class Cards extends Component {
  render() {
    return (
      

      <Col className="gutter-row" span={12}>
        <Grid style={gridStyleMain}>
        <img alt="example" src="/images/panda.png" style={gridStyleMain}/>
        </Grid>
        
      </Col>


    )
  }
}