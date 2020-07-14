import React, { Component } from 'react'
import './style.less'

export class Content extends Component {

    constructor(props){
        super(props);
        this.state = {
            
            itemPerPage: [8, 16],
            // currNum: 0,
            // now: 0,
            dropOn: false,
        }
        this.handleDropClick = this.handleDropClick.bind(this);
        this.clickCancelDrop = this.clickCancelDrop.bind(this);

    }
    

    getPageList (num) {
        let pageList = []
        for (let i = 0; i < num; i++) {
            pageList.push(<li key={i} className={`page-num ${i===this.props.now ? 'page-active' : ''}`} onClick={()=>this.props.pClick(i)}>{i+1}</li>);
        }
        // console.log(pageList.map((_, i) => <li key={i} className={`page-num ${i===this.state.now ? 'active' : ''}`}>i+1</li>));
        // console.log(pageList);
        return pageList;
    }

    handleDropClick = () => this.setState((prevState) => ({dropOn: !prevState.dropOn}));
    

    clickCancelDrop (e) {
        if (e.target === document.getElementsByClassName('content')[0] && this.state.dropOn) {
            this.setState({dropOn: false})
        }
    }

    componentDidMount () {
        document.addEventListener('click', this.clickCancelDrop)
    }



    render() {
        if (this.props.appList !== undefined) {
            const num = this.props.pages         
            return (
                <div className="content">
                    <div className="wrapper">
                        <h3 className="title">行业应用</h3>
                        <h4 className="subtitle">提供基于长江云工业互联网平台的行业应用</h4>
                        
                        <ul className="list-app flex-left">
                            {this.props.appList.map((app, i) =>
                                <li key={i}>
                                    <a href={app.href}>
                                        <div className="shadow-box">
                                            <div className="img-box"><img src={app.img} alt="img"/></div>
                                            <h4 className="fold-box">{app.name}</h4>
                                            <p className="fold-box">{app.func}</p>
                                        </div>
                                        
                                    </a>
                                </li>)}
                        </ul>
                        
                        <ul className="page-bar">
                            <li className={`prev ${this.props.now === 0 ? 'inact' : ''}`} onClick={this.props.prevClick}>&lt;</li>
                            {this.getPageList(num)}                      
                            <li className={`next ${this.props.now === num-1 ? 'inact' : ''}`} onClick={this.props.nextClick}>&gt;</li>
                            <li className="page-select" onClick={this.handleDropClick}>
                                <span>{this.state.itemPerPage[this.props.sizeIdx] + ' / page'} </span>
                                <ul className="drop-list" style={{display: this.state.dropOn ? 'block' : 'none'}}>
                                    {this.state.itemPerPage.map((item, i) => 
                                        <li key={i} className={i===this.props.sizeIdx ? 'drop-li-act' : ''} onClick={()=>this.props.pNumClick(i)}>
                                            {item + ' / page'}</li>)}
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="content"></div>
            );
        }
        
    }
}

export default Content;
