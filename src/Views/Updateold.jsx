import React, { Component } from 'react'
import MainLayout from './Layouts/MainLayout';
import { Button, Icon } from 'antd'

export default class Update extends Component {
    handleClick = () => {
        this.props.history.goBack();
    }
    render() {
        return (
            <MainLayout>
                <h1>Update</h1>
                <div>
                <Button type="primary" onClick={this.handleClick}>
                <Icon type="left" />
                    Go Back
                    </Button>
                </div>
            </MainLayout>
        )
    }
}