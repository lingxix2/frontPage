import React, {Fragment} from 'react';
import {Header, BtnUp, Footer} from '@/components'
import {SlideBox, LinkTab, Portal, CoreProduct, Diagram, Application, Solution, Service, Case, News} from './components'
import {postBannerReq, postNewsReq, postCaseReq} from './api'
// import { render } from '@testing-library/react';





class Home extends React.Component {
  state = {
    bannerLink: [],
    newsLink: [],
    caseLink: [],
    loading: true
  }

  componentDidMount() {
    let bannerLink, newsLink, caseLink = [];
    postBannerReq(null, (res) => {
      bannerLink = res;
      postNewsReq({}, (res) => {
        newsLink = res.list;
        postCaseReq({pageNum: 1, pageSize: 4}, (res) => {
          caseLink = res.list;
          this.setState({
            bannerLink,
            newsLink,
            caseLink,
            loading: false,
          })
        })
      })
    })


  }
  
  render () {
    const {bannerLink, newsLink, caseLink, loading} = this.state
    if (loading) return <div>loading...</div>
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
