import React, { Component } from 'react'
import './style.less'

export class Content extends Component {

    constructor(props){
        super(props);
        this.state = {
            appList: [
                {href: "###", img: require("@/images/app_li1.jpg"), name: "工业物联平台", func: "智能调度"},
                {href: "###", img: require("@/images/app_li1.jpg"), name: "工业物联平台", func: "智能调度"},
                {href: "###", img: require("@/images/app_li1.jpg"), name: "工业物联平台", func: "智能调度"},
                {href: "###", img: require("@/images/app_li1.jpg"), name: "工业物联平台", func: "智能调度"},
                {href: "###", img: require("@/images/app_li1.jpg"), name: "工业物联平台", func: "智能调度"},
                {href: "###", img: require("@/images/app_li1.jpg"), name: "工业物联平台", func: "智能调度"},
                {href: "###", img: require("@/images/app_li1.jpg"), name: "工业物联平台", func: "智能调度"},
                {href: "###", img: require("@/images/app_li1.jpg"), name: "工业物联平台", func: "智能调度"},
                {href: "###", img: require("@/images/app_li1.jpg"), name: "工业物联平台", func: "智能调度"},
                {href: "###", img: require("@/images/app_li1.jpg"), name: "工业物联平台", func: "智能调度"},
                {href: "###", img: require("@/images/app_li1.jpg"), name: "工业物联平台", func: "智能调度"},
    
            ],
            itemPerPage: [8, 16],
            currNum: 0,
            now: 0,
            dropOn: false,
        }
        this.handleDropClick = this.handleDropClick.bind(this);
        this.handleSelectClick = this.handleSelectClick.bind(this);
        this.handlePrevClick = this.handlePrevClick.bind(this);
        this.handleNextClick = this.handleNextClick.bind(this);
        this.handlePageClick = this.handlePageClick.bind(this);

    }
    

    getPageList (num) {
        // let num = Math.ceil(this.state.appList.length/this.state.ItemPerPage[this.state.currNum]);
        let pageList = []
        for (let i = 0; i < num; i++) {
            pageList.push(<li key={i} className={`page-num ${i===this.state.now ? 'page-active' : ''}`}>{i+1}</li>);
        }
        // console.log(pageList.map((_, i) => <li key={i} className={`page-num ${i===this.state.now ? 'active' : ''}`}>i+1</li>));
        return pageList;
    }

    handleDropClick = () => this.setState((prevState) => ({dropOn: !prevState.dropOn}));
    handleSelectClick (idx) {
        this.setState({currNum: idx})
    }

    handlePrevClick () {
        // console.log(this.now);
        if (this.state.now === 0) return;
        else this.setState((prevState) => ({now: prevState.now-1}));
    }

    handleNextClick (num) {
        if (this.state.now === num-1) return;
        else this.setState((prevState) => ({now: prevState.now+1}));
    }

    handlePageClick (idx) {
        this.setState({now: idx});
    } 



    render() {
        const num = Math.ceil(this.state.appList.length/this.state.itemPerPage[this.state.currNum]);
        const start = this.state.now*this.state.itemPerPage[this.state.currNum];
        const end = start + this.state.itemPerPage[this.state.currNum];
        const arr = new Array(num).fill(1).map((_, i) => i);
        
        
        return (
            <div className="content">
                <div className="wrapper">
                    <h3 className="title">行业应用</h3>
                    <h4 className="subtitle">提供基于长江云工业互联网平台的行业应用</h4>
                    {arr.map((item) => 
                        <ul className="list-app flex-left" style={{display: item===this.state.now ? 'flex' : 'none'}} key={item}>
                            {this.state.appList.slice(start,end).map((app, j) =>
                                <li key={j}>
                                    <a href={app.href}>
                                        <div className="shadow-box">
                                            <div className="img-box"><img src={app.img} alt="img"/></div>
                                            <h4 className="fold-box">{app.name}</h4>
                                            <p className="fold-box">{app.func}</p>
                                        </div>
                                        
                                    </a>
                                </li>)}
                        </ul>
                    )}
                    
                    <ul className="page-bar">
                        <li className={`prev ${this.state.now === 0 ? 'inact' : ''}`} onClick={this.handlePrevClick}>&lt;</li>
                        {this.getPageList(num)}                      
                        <li className={`next ${this.state.now === num-1 ? 'inact' : ''}`} onClick={()=>this.handleNextClick(num)}>&gt;</li>
                        <li className="page-select" onClick={this.handleDropClick}>
                            <span>{this.state.itemPerPage[this.state.currNum] + ' / page'} </span>
                            <ul className="drop-list" style={{display: this.state.dropOn ? 'block' : 'none'}}>
                                {this.state.itemPerPage.map((item, i) => 
                                    <li key={i} className={i===this.state.currNum ? 'drop-li-act' : ''} onClick={()=>this.handleSelectClick(i)}>
                                        {item + ' / page'}</li>)}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Content;
