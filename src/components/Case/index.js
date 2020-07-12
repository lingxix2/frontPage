
import React from 'react';
import './style.less'

export class Case extends React.Component {
    state = {
        cases: [
            {href: "###", name:"森源电气智能工厂项目",
             bgImg: 'url(' + require('@/images/case_bg1.png') + ')'},
            {href: "###", bgImg: 'url('+ require('@/images/case_bg2.png') + ')', name:"龙源电力集团党建工作，助推业务国际化发展"},
            {href: "###", bgImg: 'url('+ require('@/images/case_bg3.png') + ')', name:"安徽省电信合作伙伴"},
            {href: "###", bgImg: 'url('+ require('@/images/case_bg4.png') + ')', name:"大陆马牌工厂智能生产辅助系统项目实施"},
        ]
    }
    render () {
        return (
            <div className="case-bg">
                <div className="wrapper">
                    <h3 className="title">精选典型案例</h3>
                    <ul className="case-list flex-inline">
                        {this.state.cases.map((item, i) => 
                            <li className="case" style={{backgroundImage:item.bgImg}} key={i}>
                                <a href={item.bgImg} >
                                    <div className="name fold-box">{item.name}</div>
                                </a>
                            </li>)}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Case;