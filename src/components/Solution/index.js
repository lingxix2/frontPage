import React from 'react';
import './style.less'


export class Solution extends React.Component {
    state = {
        adv : [
            {icon: require('../../images/advantage.png'), text: '先进的云计算技术架构'},
            {icon: require('../../images/advantage.png'), text: '先进的云计算技术架构'},
            {icon: require('../../images/advantage.png'), text: '先进的云计算技术架构'},
        ],
        func: [
            {title: '工业内网改造', text: '工业内网是全面支持生产系统的生产网', img: require('../../images/sol_bg.png'), href:'###'},
            {title: '工业内网改造', text: '工业内网是全面支持生产系统的生产网', img: require('../../images/sol_bg.png'), href:'###'},
        ]
    }
    render () {
        return (
            <div className="solution">
                <div className="wrapper">
                    <h3 className="title">精选解决方案</h3>
                    <div className="soln flex-inline">
                        <a className="monitor" href="###">
                            <div className="img-box">
                                <img src={require('../../images/soln.png')} alt="img"/>
                            </div>
                            <div className="cont-box">
                                <h4>智慧配电大数据监管平台解决方案</h4>
                                <ul className="adv">
                                    {this.state.adv.map((item, i) => 
                                        <li key={i}>
                                            <img src={item.icon} alt="icon"/>
                                            <span className="fold-box">{item.text}</span>
                                        </li>)}
                                </ul>
                            </div>
                            
                        </a>
                        {this.state.func.map((item, i) =>
                            <a href={item.href} className="plan" key={i}>
                                <h4>{item.title}</h4>
                                <p className="fold-box">{item.text}</p>
                                <img src={item.img} alt="img"/>
                            </a>)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Solution;