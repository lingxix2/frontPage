import React, {Fragment} from 'react';
import {Header, BtnUp, SlideBox, LinkTab, Portal, CoreProduct, Diagram, Application, Solution, Service, Case, News, Footer} from './components'
// import { render } from '@testing-library/react';

 


class App extends React.Component {

  
  render () {
    return (
      <Fragment>
        <Header/>
        <SlideBox/>
        <LinkTab/>
        <Portal/>
        <CoreProduct/>
        <Diagram/>
        <Application/>
        <Solution/>
        <Service/>
        <Case/>
        <News/>
        <Footer/>
        <BtnUp/>
      </Fragment>
      
      
    );
  }
}

export default App;
