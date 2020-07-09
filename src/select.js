import React, {Fragment} from 'react';
import './styles/common.css';
import './styles/rest.css';
import './body.css'



class AppList extends React.Component {
    state = {
        list: [
            {href: "###", name: "OA办公系统", icon: require('./images/sel_icon1.png'), 
             bgImg: 'url('+ require('./images/app_bg1.png') + ')', 
             detail: "OA管理模块包括，会议室管理，物品管理，值班管理，车辆管理，公告管理，个人中心。"},
            {href: "###", name: "费用报销系统", icon: require('./images/sel_icon1.png'), 
             bgImg: 'url('+ require('./images/app_bg2.png') + ')', 
             detail: "财务报销系统功能模块包括，报销管控，预算管控，记账中心，支付中心，发票中心，移动办公。"},
            {href: "###", name: "长江工业·智慧能源大数据监控云平台", icon: require('./images/sel_icon1.png'), 
             bgImg: 'url('+ require('./images/app_bg3.png') + ')', 
             detail: "1、能源管理体系建设；2、能源消耗指标管控；3、能源管理基础工作检查考核与对标；4、体系运行、能源消耗数据异常报警；5、重点能源设备管理。"},
            {href: "###", name: "新型云CRM", icon: require('./images/sel_icon1.png'), 
             bgImg: 'url('+ require('./images/app_bg4.png') + ')', 
             detail: "新型云CRM系统是结合中小微企业的管理现状，融合14年来新型云CRM项目实施经验，同时加强了移动应用的全新企业管理系统。以客户为中心的管理思想，提供了内部办公、客户管理、售前管理、销售管理、服务管理等5大管理模块、200多个功能，全面解决企业的售前、售中、售后及内部管理的全过程。"},
        ]
    }
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

class Solution extends React.Component {
    state = {
        adv : [
            {icon: require('./images/advantage.png'), text: '先进的云计算技术架构'},
            {icon: require('./images/advantage.png'), text: '先进的云计算技术架构'},
            {icon: require('./images/advantage.png'), text: '先进的云计算技术架构'},
        ],
        func: [
            {title: '工业内网改造', text: '工业内网是全面支持生产系统的生产网', img: require('./images/sol_bg.png'), href:'###'},
            {title: '工业内网改造', text: '工业内网是全面支持生产系统的生产网', img: require('./images/sol_bg.png'), href:'###'},
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
                                <img src={require('./images/soln.png')} alt="img"/>
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

const appList = [
    {href: "###", name: "OA办公系统", icon: require('./images/sel_icon1.png'), 
     bgImg: 'url('+ require('./images/app_bg1.png') + ')', 
     detail: "OA管理模块包括，会议室管理，物品管理，值班管理，车辆管理，公告管理，个人中心。"},
    {href: "###", name: "费用报销系统", icon: require('./images/sel_icon1.png'), 
     bgImg: 'url('+ require('./images/app_bg2.png') + ')', 
     detail: "财务报销系统功能模块包括，报销管控，预算管控，记账中心，支付中心，发票中心，移动办公。"},
    {href: "###", name: "长江工业·智慧能源大数据监控云平台", icon: require('./images/sel_icon1.png'), 
     bgImg: 'url('+ require('./images/app_bg3.png') + ')', 
     detail: "1、能源管理体系建设；2、能源消耗指标管控；3、能源管理基础工作检查考核与对标；4、体系运行、能源消耗数据异常报警；5、重点能源设备管理。"},
    {href: "###", name: "新型云CRM", icon: require('./images/sel_icon1.png'), 
     bgImg: 'url('+ require('./images/app_bg4.png') + ')', 
     detail: "新型云CRM系统是结合中小微企业的管理现状，融合14年来新型云CRM项目实施经验，同时加强了移动应用的全新企业管理系统。以客户为中心的管理思想，提供了内部办公、客户管理、售前管理、销售管理、服务管理等5大管理模块、200多个功能，全面解决企业的售前、售中、售后及内部管理的全过程。"},
]

const serviceList = [
    {href: "###", name: "杭州安财软件有限公司", icon: require('./images/ser_icon1.png'), 
     bgImg: 'url('+ require('./images/ser_bg1.png') + ')', 
     detail: "1、杭州市高新技术企业"},
    {href: "###", name: "苏州精易会信息技术有限公司", icon: require('./images/ser_icon1.png'), 
     bgImg: 'url('+ require('./images/ser_bg2.png') + ')', 
     detail: "公司成立以来累计申请发明专利达70多项，自有软件著作权30多项，并获得国家高新技术企业、江苏省双软企业、ISO27001、ISO20000、AAA、江苏省民营科技企业等多项资质认证。"},
    {href: "###", name: "杭州安财软件有限公司", icon: require('./images/ser_icon1.png'), 
     bgImg: 'url('+ require('./images/ser_bg3.png') + ')', 
     detail: "1、杭州市高新技术企业"},
    {href: "###", name: "杭州安财软件有限公司", icon: require('./images/ser_icon1.png'), 
     bgImg: 'url('+ require('./images/ser_bg4.png') + ')', 
     detail: "1、杭州市高新技术企业"},
]

class Case extends React.Component {
    state = {
        cases: [
            {href: "###", name:"森源电气智能工厂项目",
             bgImg: 'url(' + require('./images/case_bg1.png') + ')'},
            {href: "###", bgImg: 'url('+ require('./images/case_bg2.png') + ')', name:"龙源电力集团党建工作，助推业务国际化发展"},
            {href: "###", bgImg: 'url('+ require('./images/case_bg3.png') + ')', name:"安徽省电信合作伙伴"},
            {href: "###", bgImg: 'url('+ require('./images/case_bg4.png') + ')', name:"大陆马牌工厂智能生产辅助系统项目实施"},
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

// const newsDates = [[2019, 12, 3, 0, 10, 0], [2019, 12, 3, 0, 10], [2019, 12, 3, 0, 10], [2019, 12, 3, 0, 10], [2019, 12, 3, 0, 10]];

class News extends React.Component {
    state = {
        news: [
            {time: "2019-12-03 09:10", title: "重磅！浩鲸科技建设的安徽省第一个工业互联网标识解析二级节点正式上线！", content: "铜陵工业互联网发展迎来新的时刻", link: "###"},
            {time: "2019-11-06 09:50", title: "产业互联与数字经济大会：安徽长江工业大数据得“十大”奖项", content: "11月6日，2019年产业互联与数字经济大会暨第二届工业互联网平台创新发展大会在苏州国际博览中心举办，本届大会以“探寻数字化转型之路”为主题，旨在全面…", link: "###"},
            {time: "2019-09-04 09:10", title: "胡启生市长主持召开氢产业发展工作领导小组会议", content: "9月3日上午，市委副书记、市长胡启生主持召开氢产业发展工作领导小组会议，对我市氢产业推进、氢产业基金及氢产业项目招商等进行全面部署。市领导程双林、黄化…", link: "###"},
            {time: "2019-03-28 09:25", title: "战略合作！市长出席的这场签约有多重要！", content: "浩鲸科技“朋友圈”持续壮大！今天上午，阿里云副总裁兼浩鲸科技执行董事杨名与铜陵市人民政府市长正式签订战略合作协议并共同为安徽长江工业大数据科技股份有限…", link: "###"},
            {time: "2019-05-24 10:18", title: "干货解读长江云上工厂", content: "干货来袭", link: "###"},
        ],
        pic: {link: "####", img: require('./images/news.jpg'), name:"重磅！浩鲸科技建设的安徽省第一个工业互联网标识解析二级节点正式上线！"},
        more: "###"
    }
    render () {
        return (
            <div className="news wrapper">
                <h3 className="title">热门资讯</h3>
                <div className="content-box flex-inline">
                    <div className="pic-news">
                        <a href={this.state.pic.link}>
                            <img src={this.state.pic.img} alt="img"/>
                            <div className="name fold-box">{this.state.pic.name}</div>
                        </a>
                    </div>
                    <ul className="news-list flex-vertical">
                        {this.state.news.map((item, i) => 
                            <li className="news-li" key={i}>
                                <a href={item.link} className="flex-left">
                                    <div className="time center-vertical"><span>{item.time}</span></div>
                                    <div className="text">
                                        <h4 className="fold-box">{item.title}</h4>
                                        <p className="fold-box">{item.content}</p>
                                    </div>
                                </a> 
                            </li>
                        )}
                    </ul>
                </div>
                <a className="more" href={this.state.more}>
                    查看更多 &gt;
                </a>
                
                
                
            </div>
        );
       
    }
}

export class Select extends React.Component {
    render () {
        return (
            <Fragment>
                <div className="container">
                    <div className="wrapper">
                        <h3 className="title">精选工业应用</h3>
                        <AppList list={appList}/>
                    </div>
                </div>
                <Solution/>
                <div className="container service">
                    <div className="wrapper">
                        <h3 className="title">精选服务商</h3>
                        <AppList list={serviceList}/>
                    </div>
                </div>
                <Case/>
                <News/>
            </Fragment>
        );
    }
}

export default Select