import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, Col, Row } from "antd";
import MainLayout from "./Layouts/MainLayout";
import Sidebar from "./Components/Sidebar";
// import BlogThumb from './Components/BlogThumb'

const gridStyleMain = {
  width: "100%",
  height: "100%"
};
const cardStyle = {
  width: "100%",
  height: "100%",
  marginBottom: "20px"
};

export default class Blogs extends Component {
  render() {
    let data = [
		{
			id: 1,
			title: "Blog 1"
		  },
		  {
			id: 2,
			title: "Blog 2"
		},
		{
		id: 3,
		title:"Blog 3"
		},
		{
		id: 4,
		title:"Blog 4"
		},
    ];

    return (
      <MainLayout>
        <h1>Blogs</h1>
        <Row>
          <Col span={20} push={4}>
            <Row gutter={20}>
              {
				  data.map(datum => {
					  let {id, title} = datum
					  return(
						<Col span={8} key={id}>
							<Link to={`/blogs/${id}`}>
							<div className="hvrbox">
								<Card.Grid style={cardStyle}>
								<img
									alt="example"
									src="/images/panda.png"
									style={gridStyleMain}
									className="hvrbox-layer_bottom"
								/>
								</Card.Grid>
								<div className="hvrbox-layer_top">
								<div className="hvrbox-text">{title}</div>
								</div>
							</div>
							</Link>
						</Col>
					  )
				  })
			  }
            </Row>
          </Col>
          <Col span={4} pull={20}>
            <Sidebar />
          </Col>
        </Row>
      </MainLayout>
    );
  }
}
