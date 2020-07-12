import React from 'react';
import './style.less'

class ServiceList extends React.Component {  
    render () {

        return (
            <ul className="app-list flex-inline">
                {this.props.list.map((item, i) => 
                    <li style={{backgroundImage:item.bgImg}} className="application" key={i}>
                        <a href={item.href}>
                            <div className="img-box">
                                <img src={item.icon} alt="icon"/>
                            </div>
                            <h4>{item.name}</h4>
                            <div className="detail">
                                <p className="fold-box ">{item.detail}</p>
                            </div>
                        </a>
                    </li>
                )}
            </ul>
        );  
    }
}

export class Service extends React.Component {
    serviceList = [
        {href: "###", name: "杭州安财软件有限公司", icon: require('../../images/ser_icon1.png'), 
         bgImg: 'url('+ require('../../images/ser_bg1.png') + ')', 
         detail: "1、杭州市高新技术企业"},
        {href: "###", name: "苏州精易会信息技术有限公司", icon: require('../../images/ser_icon1.png'), 
         bgImg: 'url('+ require('../../images/ser_bg2.png') + ')', 
         detail: "公司成立以来累计申请发明专利达70多项，自有软件著作权30多项，并获得国家高新技术企业、江苏省双软企业、ISO27001、ISO20000、AAA、江苏省民营科技企业等多项资质认证。"},
        {href: "###", name: "杭州安财软件有限公司", icon: require('../../images/ser_icon1.png'), 
         bgImg: 'url('+ require('../../images/ser_bg3.png') + ')', 
         detail: "1、杭州市高新技术企业"},
        {href: "###", name: "杭州安财软件有限公司", icon: require('../../images/ser_icon1.png'), 
         bgImg: 'url('+ require('../../images/ser_bg4.png') + ')', 
         detail: "1、杭州市高新技术企业"},
    ]
    render () {
        return (
            <div className="container service">
                    <div className="wrapper">
                        <h3 className="title">精选服务商</h3>
                        <ServiceList list={this.serviceList}/>
                    </div>
            </div>
        );
    }
}

export default Service;