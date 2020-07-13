import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link, 
  Redirect,
} from "react-router-dom";
import Home from '@/pages/home'
import AppCenter from '@/pages/appCenter'


 


class App extends React.Component {

  
  render () {
    return (
      <Router>
      <div>
          {/* <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Redirect exact from="/" to="/home" />
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/appCenter">
            <AppCenter />
          </Route>
        </Switch>
      </div>
    </Router>
      
      
    );
  }
}

export default App;
