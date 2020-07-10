import React, {Fragment} from 'react';
import {Header, BtnUp, SlideBox, Outlinks, Select, Footer} from './components'
// import { render } from '@testing-library/react';

 


class App extends React.Component {

  
  render () {
    return (
      <Fragment>
        <Header/>
        <SlideBox/>
        <Outlinks/>
        <Select/>
        <Footer/>
        <BtnUp/>
      </Fragment>
      
      
    );
  }
}

export default App;
