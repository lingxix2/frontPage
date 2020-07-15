import React, {Fragment} from 'react'
import {Header, Footer, BtnUp} from '@/components'
import {Banner, Content} from './components'
import postContentReq from './api'

export class AppCenter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            pageSizes: [8, 16],
            sizeIdx: 0,
            now: 0,
            loading: true
        }

        this.handlePageClick = this.handlePageClick.bind(this);
        this.handlePrevClick = this.handlePrevClick.bind(this);
        this.handleNextClick = this.handleNextClick.bind(this);
        this.handlePageNumClick = this.handlePageNumClick.bind(this);

    }
    
    handlePageNumClick (idx) {
        postContentReq({pageNum: 1, pageSize: this.state.pageSizes[idx]}, (res)=> {
            this.setState(
                {now: 0,
                 sizeIdx: idx,
                 appLink: res.list,
                 pages: res.pages
            });
        });
    }

    handlePageClick (idx) {
        postContentReq({pageNum: idx+1, pageSize: this.state.pageSizes[this.state.sizeIdx]}, (res)=> {
            this.setState(
                {now: idx,
                 appLink: res.list,
                 pages: res.pages
            });
        });
    }

    handlePrevClick () {
        if (this.state.now === 0) return;
        else {
            postContentReq({pageNum: this.state.now, pageSize: this.state.pageSizes[this.state.sizeIdx]}, (res)=> {
                this.setState((prevState) => (
                    {now: prevState.now-1,
                     appLink: res.list,
                     pages: res.pages
                }));
            });
            
        }
    }

    handleNextClick () {
        if (this.state.now === this.state.total-1) return;
        else {
            postContentReq({pageNum: this.state.now+2, pageSize: this.state.pageSizes[this.state.sizeIdx]}, (res)=> {
                this.setState((prevState) => (
                    {now: prevState.now+1,
                     appLink: res.list,
                     pages: res.pages
                }));
            });
        }
    }

    componentDidMount () {
        let app = null;
        postContentReq({pageNum: 1, pageSize: 8}, (res)=> {
            app = res;
            this.setState({
                appLink: app.list,
                pages: app.pages,
                loading: false
            });
        });
        
        console.log(this.state.loading, this.state.appLink, this.state.pages)

    }

    render() {
        const {appLink, pages, now, sizeIdx, loading} = this.state
        if (appLink===undefined) return <div>loading...</div>
        console.log(loading)
        return (
            <Fragment>
                <Header/>
                <Banner/>
                <Content appList={appLink} 
                         pages={pages} now={now} 
                         sizeIdx={sizeIdx} 
                         pNumClick={this.handlePageNumClick} 
                         pClick={this.handlePageClick} 
                         prevClick={this.handlePrevClick} 
                         nextClick={this.handleNextClick}/>
                <BtnUp/>
                <Footer/>
            </Fragment>
                
        )
    }
}


export default AppCenter;