import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component{
    state ={
        persons: [],
    };

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`).then(res=> {
            console.log(res);
            this.setState({ persons: res.data});
        })
        .catch(err => {
            console.log(err)
        })
    }
    render(){
        return(
            <ul className='PersonList'>
            {this.state.persons.map(person=> 
        <li key={person.id}><strong>{person.id}) &nbsp;Person Name:</strong> {person.name} <strong>Username:</strong> {person.username}</li>)}
            </ul>
            
        )
    }

}