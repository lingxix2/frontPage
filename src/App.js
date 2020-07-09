import React, {Fragment} from 'react';
import {Header} from './header.js';
import {BtnUp, SlideBox} from './slide.js';
import {Outlinks} from './outlink.js';
import {Select} from './select.js';
import {Footer} from './footer.js';
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
