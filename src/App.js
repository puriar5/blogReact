import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import routes from './routes';

// import PersonList from './Views/Components/PersonList';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {
            routes.map((route,i) => {
              let {component, path, exact, auth} = route;
              if(auth){
              return(
                
                <PrivateRoute key={i} path={path} component ={component} exact ={exact}/>
              )
            }
            return(
              <Route key={i} path={path} component={component} exact ={exact}/>
            )
            
          })
          }
        </Switch>
      </Router>
      
    )
  }
}

function PrivateRoute({ component: Component, ...rest }){
  return(
    <Route 
    {...rest}
    render = {props =>
      localStorage.isAuthenticated ==="true" ?(
        <Component {...props} />        
      ) : (
        <Redirect to = {{
          pathname:"/login",
          state: {from:props.location}
        }}
        />
      )

    }
    />
  )
}