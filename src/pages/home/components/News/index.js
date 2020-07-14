import React from 'react';
import './style.less'
import getFormatedTime from '@/utils/time.js';



export class News extends React.Component {
    state = {
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
                            <a href={'#/news-detail/'+this.props.news[0]}>
                                <img src={require('@/images/news.jpg')} alt="img"/>
                                <div className="name fold-box">{this.props.news[0].title}</div>
                            </a>
                        </div>
                        <ul className="news-list flex-vertical">
                            {this.props.news.slice(0, 5).map((item, i) => 
                                <li className="news-li" key={i}>
                                    <a href={'#/news-detail/'+item.id} className="flex-left">
                                        <div className="time center-vertical"><span>{getFormatedTime(item.createTime)}</span></div>
                                        <div className="text">
                                            <h4 className="fold-box">{item.title}</h4>
                                            <p className="fold-box">{item.summary}</p>
                                        </div>
                                    </a> 
                                </li>
                            )}
                        </ul>
                    </div>
                    <a className="more" href='###'>
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