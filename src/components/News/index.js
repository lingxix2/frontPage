import React from 'react';
import './style.less'


export class News extends React.Component {
    state = {
        news: [
            {time: "2019-12-03 09:10", title: "重磅！浩鲸科技建设的安徽省第一个工业互联网标识解析二级节点正式上线！", content: "铜陵工业互联网发展迎来新的时刻", link: "###"},
            {time: "2019-11-06 09:50", title: "产业互联与数字经济大会：安徽长江工业大数据得“十大”奖项", content: "11月6日，2019年产业互联与数字经济大会暨第二届工业互联网平台创新发展大会在苏州国际博览中心举办，本届大会以“探寻数字化转型之路”为主题，旨在全面…", link: "###"},
            {time: "2019-09-04 09:10", title: "胡启生市长主持召开氢产业发展工作领导小组会议", content: "9月3日上午，市委副书记、市长胡启生主持召开氢产业发展工作领导小组会议，对我市氢产业推进、氢产业基金及氢产业项目招商等进行全面部署。市领导程双林、黄化…", link: "###"},
            {time: "2019-03-28 09:25", title: "战略合作！市长出席的这场签约有多重要！", content: "浩鲸科技“朋友圈”持续壮大！今天上午，阿里云副总裁兼浩鲸科技执行董事杨名与铜陵市人民政府市长正式签订战略合作协议并共同为安徽长江工业大数据科技股份有限…", link: "###"},
            {time: "2019-05-24 10:18", title: "干货解读长江云上工厂", content: "干货来袭", link: "###"},
        ],
        pic: {link: "####", img: require('@/images/news.jpg'), name:"重磅！浩鲸科技建设的安徽省第一个工业互联网标识解析二级节点正式上线！"},
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


export default News