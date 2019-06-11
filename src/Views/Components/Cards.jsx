import React, { Component }  from 'react'
import  { Card, Icon, Avatar } from 'antd';
import { Col } from 'antd';
const { Meta } = Card;


export default class Cards extends Component {
    render() {
        return(
            
            <Col className="gutter-row" span={8}>
            <Card
              cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
              
            >
              <Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title="Card title"
                description="This is the description"
              />
            </Card>
            </Col>
    
            
        )
    }
}