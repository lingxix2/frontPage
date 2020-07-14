import React from 'react';
import './style.less'


export class News extends React.Component {
    state = {
        pic: {link: "####", img: require('@/images/news.jpg'), name:"重磅！浩鲸科技建设的安徽省第一个工业互联网标识解析二级节点正式上线！"},
        more: "###"
    }
    render () {
        if (this.props.news !== undefined) {
            // const picNews = this.props.news[0]
            return (
                <div className="news wrapper">
                    <h3 className="title">热门资讯</h3>
                    <div className="content-box flex-inline">
                        <div className="pic-news">
                            <a href={this.props.news[0].href}>
                                <img src={this.state.pic.img} alt="img"/>
                                <div className="name fold-box">{this.props.news[0].title}</div>
                            </a>
                        </div>
                        <ul className="news-list flex-vertical">
                            {this.props.news.slice(0, 5).map((item, i) => 
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
        } else {
            return (
                <div className="news wrapper"></div>
            );
        }
        
       
    }
}


export default News