import React, { Component } from 'react'
import MainLayout from './Layouts/MainLayout';
import Sidebar from './Components/Sidebar';
import {Row, Col} from 'antd';


const gridStyleMain ={
    width:'100%',
    maxHeight:'50vh'
};


export default class Detail extends Component {
    render() {
        const ddd = window.location.href;
        const x = ddd.split('/');
        // console.log(x.pop());
        const blogNum = x.pop();
        return (
            <MainLayout>
                <h1>Detail</h1>
                <Row>
                <Col span={20} push={4}>
                 
                <img alt="example" src="/images/panda.png" style={gridStyleMain}/>
                <br/><br/>
                <h2>Blog {blogNum}</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor ligula porttitor, lacinia sapien non.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor ligula porttitor, lacinia sapien non.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor ligula porttitor, lacinia sapien non.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor ligula porttitor, lacinia sapien non.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor ligula porttitor, lacinia sapien non.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor ligula porttitor, lacinia sapien non.
                </p>
                </Col>
                <Col span={4} pull={20}>
                <Sidebar />
                </Col>
            </Row>
            </MainLayout>
        )
    }
}
