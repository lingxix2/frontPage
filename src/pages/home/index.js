import React, {Fragment} from 'react';
import {Header, BtnUp, Footer} from '@/components'
import {SlideBox, LinkTab, Portal, CoreProduct, Diagram, Application, Solution, Service, Case, News} from './components'
import postAjax from '@/assets/js/ajax.js';
import getFormatedTime from '@/assets/js/time.js';
// import { render } from '@testing-library/react';





class Home extends React.Component {
  bannerUrl = '/api/v1/content/homePage/carouselMap';
  newsUrl = '/api/v1/consulation/homePage/newsList';
  caseUrl = '/api/v1/content/vendorContent/selectVendorChosenTypicalCases'

  state = {
    banner: {},
    bannerLink: []
  }

  

  getBannerData = (data) => {
    let bannerLink = []
    for (let i = 1; i < data.length; i++) {
        let item = {};
        item.id = data[i].id;
        item.img = data[i].image;
        item.href = data[i].url;
        bannerLink.push(item);
    }
    this.setState({
      bannerLink
    })
    
  }

  getNewsData = (data) => {
    const li = data.list;
    let newsLink = []
    for (let i = 0; i < li.length; i++) {
      let item = {};
      item.title = li[i].title;
      item.content = li[i].summary;
      item.img = li[i].image;
      item.time = getFormatedTime(li[i].createTime);
      newsLink.push(item);
    }


    this.setState({
      newsLink
    })
  }

  getCaseData = (data) => {
    const li = data.list;
    let caseLink = []
    for (let i = 0; i < li.length; i++) {
      let item = {};
      item.name = li[i].title;
      item.href = '/case-detail/'+li[i].id;
      caseLink.push(item);
    }

    this.setState({
      caseLink
    })
  }


  componentDidMount() {
    postAjax(this.bannerUrl, null, this.getBannerData)
    postAjax(this.newsUrl, JSON.stringify({}), this.getNewsData);
    postAjax(this.caseUrl, JSON.stringify({pageNum: 1, pageSize: 4}),this.getCaseData);
  }
  
  render () {
    const {bannerLink, newsLink, caseLink} = this.state
    // console.log(newsLink)
    return (
      <Fragment>
        <Header/>
        <SlideBox links={bannerLink}/>
        <LinkTab/>
        <Portal/>
        <CoreProduct/>
        <Diagram/>
        <Application/>
        <Solution/>
        <Service/>
        <Case cases={caseLink}/>
        <News news={newsLink}/>
        <Footer/>
        <BtnUp/>
      </Fragment>
      
      
    );
  }
}

export default Home;
