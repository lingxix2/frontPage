import React from 'react';
import './style.less'

export class LinkTab extends React.Component {
    state = {
        links: [
            {img: require('@/images/reopen.png'), path: "###"},
            {img: require('@/images/reopen.png'), path: "###"},
            {img: require('@/images/reopen.png'), path: "###"},
            {img: require('@/images/reopen.png'), path: "###"}
        ]
    }
    render () {
        return (
            <ul className="link-tabs">
                {this.state.links.map((item, i) => 
                    <li key={i}>
                        <a href={item.path}>
                        <img src={item.img} alt="img"/>
                        </a>
                    </li>)}
            </ul>
        );
    }
}

export default LinkTab;