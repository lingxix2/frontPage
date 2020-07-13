import React, {Fragment} from 'react';

import Home from '@/pages/home'
import AppCenter from '@/pages/appCenter'
// import {Header, BtnUp, SlideBox, LinkTab, Portal, CoreProduct, Diagram, Application, Solution, Service, Case, News, Footer} from '@/components'
// import { render } from '@testing-library/react';

 


class App extends React.Component {

  
  render () {
    return (
      <Fragment>
        <Home/>
        <AppCenter/>
      </Fragment>
      
      
    );
  }
}

export default App;
