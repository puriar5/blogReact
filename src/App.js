import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import routes from './routes';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {
            routes.map((route,i) => {
              let {component, path, exact} = route;
              return(
                <Route key={i} path={path} component ={component} exact ={exact}/>
              )
            })
          }
        </Switch>
      </Router>
      
    )
  }
}
