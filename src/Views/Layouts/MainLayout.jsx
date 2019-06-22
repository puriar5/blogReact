import React, { Component } from 'react'
import Header from '../Partials/Header';
import Footer from '../Partials/Footer';

export default class MainLayout extends Component {
    render() {
        return (
            <div>
                <Header />
                <main>
                <div className="wrapper">
                    {this.props.data}
                    {this.props.children}
                    </div>
                </main>
                <Footer />             
            </div>
        )
    }
}
