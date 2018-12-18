import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';
import NavBar from './components/layout/NavBar';
import Home from './components/Pages/Home';
import Members from './components/Pages/Members';
import Login from './components/auth/Login';

import './App.css';

function onAuthRequired({history}){
  history.push('/login');
}

class App extends Component {
  render() {
    return (
      <Router>
      <Security   issuer='https://dev-645483.oktapreview.com/oauth2/default'
                  client_id='0oaieqxwnjM40bGLK0h7'
                  redirect_uri={window.location.origin + '/implicit/callback'}
                  onAuthRequired={onAuthRequired} >
                  
      <div className="App">
        <NavBar />
        

        <Route path ="/" exact={true} component={Home} />
        <SecureRoute path ="/Members" exact={true} component={Members} />

        <Route path='/login' render={() => <Login baseUrl='https://dev-645483.oktapreview.com' /> } />
        <Route path='/implicit/callback' component={ImplicitCallback}/>
      </div>
      </Security>
      </Router>
      
    );
  }
}

export default App;
