import React, {Fragment} from 'react'
import {Header, Footer, BtnUp} from '@/components'
import {Banner, Content} from './components'
import postAjax from '@/assets/js/ajax.js'

export class AppCenter extends React.Component {
    
    state = {pageSize: [8, 16], now: 0, sizeIdx: 0}

    constructor(props){
        super(props);
        this.state = {
            
            pageSizes: [8, 16],
            sizeIdx: 0,
            now: 0,
        }

        this.contentUrl = '/api/v1/application/selectAllIndustrialApp';

        this.handlePageClick = this.handlePageClick.bind(this);
        this.handlePrevClick = this.handlePrevClick.bind(this);
        this.handleNextClick = this.handleNextClick.bind(this);
        this.handlePageNumClick = this.handlePageNumClick.bind(this);

    }
    
    handlePageNumClick (idx) {
        postAjax(this.contentUrl, JSON.stringify({pageNum: 1, pageSize: this.state.pageSizes[idx]}), this.getAppData);
        this.setState({sizeIdx: idx, now: 0})
    }

    handlePageClick (idx) {
        postAjax(this.contentUrl, JSON.stringify({pageNum: idx+1, pageSize: this.state.pageSizes[this.state.sizeIdx]}), this.getAppData);
        this.setState({now: idx});
    }

    handlePrevClick () {
        if (this.state.now === 0) return;
        else {
            postAjax(this.contentUrl, JSON.stringify({pageNum: this.state.now, pageSize: this.state.pageSizes[this.state.sizeIdx]}), this.getAppData);
            this.setState((prevState) => ({now: prevState.now-1}));
        }
    }

    handleNextClick () {
        if (this.state.now === this.state.total-1) return;
        else {
            postAjax(this.contentUrl, JSON.stringify({pageNum: this.state.now+2, pageSize: this.state.pageSizes[this.state.sizeIdx]}), this.getAppData);
            this.setState((prevState) => ({now: prevState.now+1}));
        }
    }

    getAppData = (data) => {
        console.log(data)
        let appLink = []
        const li = data.list;
        for (let i = 0; i < li.length; i++) {
            let item = {};
            item.href = '#/app-center-detail/'+li[i].id;
            item.img = li[i].cover;
            item.name = li[i].name;
            item.func = li[i].domainName;
            appLink.push(item);
        }
        let pages = data.pages;
        this.setState({
          appLink,
          pages
        })
    }




    componentDidMount () {
        postAjax(this.contentUrl, JSON.stringify({pageNum: 1, pageSize: 8}), this.getAppData)

    }

    render() {
        const {appLink, pages, now, sizeIdx} = this.state
        return (
            <Fragment>
                <Header/>
                <Banner/>
                <Content appList={appLink} pages={pages} now={now} sizeIdx={sizeIdx} pNumClick={this.handlePageNumClick} pClick={this.handlePageClick} prevClick={this.handlePrevClick} nextClick={this.handleNextClick}/>
                <BtnUp/>
                <Footer/>
            </Fragment>
                
        )
    }
}


export default AppCenter;