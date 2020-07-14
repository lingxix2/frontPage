
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
        return (
            <div className="case-bg">
                <div className="wrapper">
                    <h3 className="title">精选典型案例</h3>
                    <ul className="case-list flex-inline">
                        {this.props.cases.map((item, i) => 
                            <li className="case" style={{backgroundImage:this.state.casesBg[i]}} key={i}>
                                <a href={'/case-detail/'+item.id} >
                                    <div className="name fold-box">{item.title}</div>
                                </a>
                            </li>)}
                    </ul>
                </div>
            </div>
        );

    }
}

export default Case;