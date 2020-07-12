import React from 'react';
import './style.less'


export class Portal extends React.Component {
    state = {
        links: [
            {icon: require('@/images/portal.png'), path: "###", name: "企业门户", content: "综合资讯、应用选购、订单管理、我的报障"},
            {icon: require('@/images/portal.png'), path: "###", name: "企业门户", content: "综合资讯、应用选购、订单管理、我的报障"},
            {icon: require('@/images/portal.png'), path: "###", name: "企业门户", content: "综合资讯、应用选购、订单管理、我的报障"},
            {icon: require('@/images/portal.png'), path: "###", name: "企业门户", content: "综合资讯、应用选购、订单管理、我的报障"},
        ]
    }

    render () {
        return (
            <div className="portal-bg">
                <div className="portal-box wrapper ">
                    <ul className="flex-inline">
                    {this.state.links.map((item, i) => 
                        <li key={i}>
                            <a href={item.path}>
                                <div className="img-box"><img src={item.icon} alt="img"/></div>
                                <div className="txt">
                                    <h3>{item.name}</h3>
                                    <p className="content">{item.content}</p>
                                </div>
                            </a>
                        </li>)}
                    </ul>
                </div>
            </div>
        )
    }
}



export default Portal;

