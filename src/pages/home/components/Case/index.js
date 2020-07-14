
import React from 'react';
import './style.less'

export class Case extends React.Component {
    state = {
        casesBg: [
             'url(' + require('@/images/case_bg1.png') + ')',
             'url('+ require('@/images/case_bg2.png') + ')',
             'url('+ require('@/images/case_bg3.png') + ')',
             'url('+ require('@/images/case_bg4.png') + ')',
        ]
    }
    render () {
        
        if (this.props.cases !== undefined) {
            return (
                <div className="case-bg">
                    <div className="wrapper">
                        <h3 className="title">精选典型案例</h3>
                        <ul className="case-list flex-inline">
                            {this.props.cases.map((item, i) => 
                                <li className="case" style={{backgroundImage:this.state.casesBg[i]}} key={i}>
                                    <a href={item.href} >
                                        <div className="name fold-box">{item.name}</div>
                                    </a>
                                </li>)}
                        </ul>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className="case-bg"></div>
            )
        }
    }
}

export default Case;