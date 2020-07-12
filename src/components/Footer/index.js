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
                            <div className="img-box"><img src={require('../../images/qrcode_cj.png')} alt="qrcode"/></div>
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


export default Footer