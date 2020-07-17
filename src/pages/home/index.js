import React, {Fragment} from 'react';
import {Header, BtnUp, Footer} from '@/components'
import {SlideBox, LinkTab, Portal, CoreProduct, Diagram, Application, Solution, Service, Case, News} from './components'
import {postBannerReq, postNewsReq, postCaseReq} from './api'



class Home extends React.Component {
  state = {
    bannerLink: [],
    newsLink: [],
    caseLink: [],
    loading: true
  }

  async componentDidMount() {
    // console.log(this.props.history.location, this.props.location, this.props.history.length)

    let bannerLink, newsLink, caseLink = []
    // Axios.all([
    //   postBannerReq({}), 
    //   postNewsReq({}),
    //   postCaseReq({pageNum:1, pageSize:4})]
    // ).then(([res1, res2, res3]) =>
    //   this.setState({
    //     bannerLink: res1, 
    //     newsLink: res2.list, 
    //     caseLink: res3.list,
    //     loading:false,})
    // );
    await postBannerReq({}).then(res=>bannerLink=res);
    await postNewsReq({}).then(res=>newsLink=res.list);
    await postCaseReq({pageNum:1, pageSize:4}).then(res=>caseLink=res.list)
    
    this.setState({
      bannerLink,
      newsLink,
      caseLink,
      loading:false,
    })
  }
    
  
  render () {
    const {bannerLink, newsLink, caseLink, loading} = this.state
    if (loading) return <div>loading...</div>

    return (
      <Fragment>
        <Header/>
        <SlideBox links={bannerLink}/>
        <button onClick={(e)=>this.props.history.push('/appCenter')}>应用中心</button>
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
