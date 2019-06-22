import React, {Component } from 'react'
import MainLayout from './Layouts/MainLayout';
import {Redirect} from 'react-router-dom'
import Cookies from 'universal-cookie';
const cookies = new Cookies();
cookies.set('myCat', 'Pacman', { path: '/' });
console.log(cookies.get('myCat'));

export default class Login extends Component {
    state = {
        redirectToReferrer: false
    }
    componentWillMount(){
        if(localStorage.isAuthenticated === "true"){
            this.setState({
                redirectToReferrer: true
            })
        }
    }
    handleLogin = () => {
        localStorage.isAuthenticated = "true"
        this.setState({
            redirectToReferrer: true
        })
    }
    render(){
        let { from } =this.props.location.state || {from: {pathname: "/"}};
        let { redirectToReferrer } = this.state

        if(redirectToReferrer) return <Redirect to ={from}/>

        return(
            <MainLayout>
                <h1>Login</h1>
                <button onClick = {this.handleLogin}>Fake Login</button>
            </MainLayout>
        )
    }
}