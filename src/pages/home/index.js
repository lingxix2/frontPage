import React, {Fragment} from 'react';
import {Header, BtnUp, Footer} from '@/components'
import {SlideBox, LinkTab, Portal, CoreProduct, Diagram, Application, Solution, Service, Case, News} from './components'
// import { render } from '@testing-library/react';

 


class Home extends React.Component {

  
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

export default Home;
