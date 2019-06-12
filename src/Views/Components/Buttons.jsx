import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Button } from 'antd';



export default class Buttons extends Component {
  render() {
    return (

      <Button type="Default" block>
      <Link to="/blogs">View All</Link>
    </Button>


    )
  }
}