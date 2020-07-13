import React from 'react';
import './style.less';


export class Footer extends React.Component {
    state = {
        links: [
            {href: '###', name: '铜陵市政府'},
            {href: '###', name: "阿里云"},
            {href: '###', name: '浩鲸科技'},
            {href: "###", name: '铜陵有色集团'},
            {href: '###', name: '铜陵化工集团'},
            // {href: '###', name: '长江工业大数据'}
        ]
    }

    render () {
        return (
            <footer>
                <div className="wrapper">
                    <h4>友情链接</h4>
                    <ul className="link-li flex-left">
                        {this.state.links.map((item, i) => 
                            <li key={i}>
                                <a href={item.href}>{item.name}</a>
                            </li>)}
                        <li className="cj">
                            <span>长江工业大数据</span>
                            <div className="img-box"><img src={require('@/images/qrcode_cj.png')} alt="qrcode"/></div>
                        </li>
                    </ul>
                </div>
                <div className="addr">
                    <div className="wrapper flex-inline">
                        <p>© 2019 安徽长江工业大数据科技股份公司 版权所有 | All rights reserved</p>
                        <div className="record">
                            <img src={require('./police.png')} alt="img"/>
                            <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=34070202000398" target="_blank" rel="noopener noreferrer">皖公网安备 34070202000398号</a>
                            <span>皖ICP备19014727号-1</span>
                         </div>
                    </div>
                </div>
            </footer>
            

        );
    }
}

function scrollToTop (obj, doc, speed) {
    if (obj.timer) clearInterval(obj.timer);
    else obj.timer = null;

    obj.timer = setInterval(function () {
        if (Math.abs(doc.scrollTop - 0) > speed) {
            doc.scrollTop -= speed
        } else {
            doc.scrollTop = 0
            clearInterval(obj.timer)
        }
    }, 30);
    
}

export class BtnUp extends React.Component {

    constructor(props){
        super(props)
        this.state = {scrollY: 0};
        this.handleScroll = this.handleScroll.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.timer = null;
    }


    handleScroll = () => this.setState({scrollY: document.documentElement.scrollTop || document.body.scrollTop});
    
    handleClick () {
        if (document.documentElement.scrollTop) {
            scrollToTop(this, document.documentElement, Math.floor(document.documentElement.scrollTop / 10));
        } else {
            scrollToTop(this, document.body.scrollTop, Math.floor(document.body.scrollTop / 10));
        }

    }

    componentDidMount () {
        window.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount () {
        window.removeEventListener('scroll', this.handleScroll)
    }
    render () {
        return (
            <div className='btn-up' style={{opacity: this.state.scrollY >= 300 ? 1 : 0}} onClick={this.handleClick}>
                <img src={require('./up.png')} alt='up'/>
            </div>
        )
    }
}


export default Footer