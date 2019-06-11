import React, { Component } from 'react'
import Header from '../Partials/Header';

export default class MainLayout extends Component {
    render() {
        return (
            <div>
                <Header />
                <main>
                    {this.props.children}
                </main>
                <footer>
                </footer>                
            </div>
        )
    }
}
