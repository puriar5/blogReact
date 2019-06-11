import React, { Component } from 'react'
import MainLayout from './Layouts/MainLayout';
import Cards from './Components/Cards';

export default class Home extends Component {
    render() {
        return (
            <MainLayout>
                <div className="wrapper">
                    <h1>Home</h1>
                    <Cards />   
                </div>
            </MainLayout>
        )
    }
}
