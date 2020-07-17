import React from 'react';
// import {Router} from 'react-router'
import {
  HashRouter as Router,
  Switch,
  Route,
  // Link, 
  Redirect,
} from "react-router-dom";
import Home from '@/pages/home'
import AppCenter from '@/pages/appCenter'
import history from '@/utils/jump'


class App extends React.Component {

  render () {
    return (
      <Router history={history}>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
            <Redirect exact from={'/'} to='home'/>
            <Route path={'/home'} component={Home}/>
            <Route path={'/appCenter'} component={AppCenter}/>
        </Switch>
    </Router>
      
      
    );
  }
}

export default App;
