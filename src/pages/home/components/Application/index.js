import React from 'react';
import './style.less'

class AppList extends React.Component {  
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

export class Application extends React.Component {
    appList = [
        {href: "###", name: "OA办公系统", icon: require('./sel_icon1.png'), 
         bgImg: 'url('+ require('@/images/app_bg1.png') + ')', 
         detail: "OA管理模块包括，会议室管理，物品管理，值班管理，车辆管理，公告管理，个人中心。"},
        {href: "###", name: "费用报销系统", icon: require('./sel_icon1.png'), 
         bgImg: 'url('+ require('@/images/app_bg2.png') + ')', 
         detail: "财务报销系统功能模块包括，报销管控，预算管控，记账中心，支付中心，发票中心，移动办公。"},
        {href: "###", name: "长江工业·智慧能源大数据监控云平台", icon: require('./sel_icon1.png'), 
         bgImg: 'url('+ require('@/images/app_bg3.png') + ')', 
         detail: "1、能源管理体系建设；2、能源消耗指标管控；3、能源管理基础工作检查考核与对标；4、体系运行、能源消耗数据异常报警；5、重点能源设备管理。"},
        {href: "###", name: "新型云CRM", icon: require('./sel_icon1.png'), 
         bgImg: 'url('+ require('@/images/app_bg4.png') + ')', 
         detail: "新型云CRM系统是结合中小微企业的管理现状，融合14年来新型云CRM项目实施经验，同时加强了移动应用的全新企业管理系统。以客户为中心的管理思想，提供了内部办公、客户管理、售前管理、销售管理、服务管理等5大管理模块、200多个功能，全面解决企业的售前、售中、售后及内部管理的全过程。"},
    ]
    render () {
        return (
            <div className="app">
                <div className="wrapper">
                    <h3 className="title">精选工业应用</h3>
                    <AppList list={this.appList}/>
                </div>
            </div>
        );
    }
}

export default Application;