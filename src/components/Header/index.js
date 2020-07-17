import React from 'react';
import './style.less';
import {Link} from "react-router-dom"


class Menu extends React.Component {

  state = {
    cat: [
      {
        name: "首页", 
        dropList: [
          {name: "解决方案", href: "###"}, 
          {name: "典型案例", href: "###"}, 
        ]
      },
      {
        name: "应用中心",
        href: "#/appCenter",
        dropList: [],
      },
      {
        name: "服务商广场",
        href: "###",
        dropList: [],
      },
      {
        name: "行业资讯",
        href: "###",
        dropList: [],
      },
      {
        name: "供需广场",
        dropList: [
          {name: "产品大厅", href: "###"}, 
          {name: "采购大厅", href: "###"}, 
          {name: "能力大厅", href: "###"}, 
          {name: "协作大厅", href: "###"}, 
        ]
      },
      {
        name: "企事通", 
        href: "###",
        dropList: [],
      },
    ]
  }
  
  render () {
    return (
      <ul className="menu">
        {this.state.cat.map((item, i) => {
          if (item.dropList.length === 0) {
            return <li className='item' key={i}><a href={item.href}>{item.name}</a></li>
          } else {
            return <li className='drop-row' key={i}>
                <span>{item.name}</span>
                <ul className="drop-list">
                  {item.dropList.map((v, j) => <li key={j}><Link to={v.href}>{v.name}</Link></li>)}
                </ul>         
            </li>
          }
        })}
      </ul>
    );
  }
}

class SubMenu extends React.Component {
  state = {
    links: [
      {href: "###", name:"关于我们"},
      {href: "###", name:"平台介绍"},
      {href: "###", name:"合作咨询"},
      {href: "###", name:"账号注册"},
    ]
  }

  render () {
    
    return (
      <ul className="submenu">
        {this.state.links.map((item, i) => <li className="submenu-item" key={i}><a href={item.href}>{item.name}</a></li>)}
        <li className="submenu-item">
          <div className="scan">
            <img src={require("./phone.png")} alt="scan" className="scan-phone"></img>
            <div className="qrcode">
              <img src={require("@/images/qrcode.png")} alt="qrcode"></img>
              <p>扫一扫移动端</p>
            </div>
          </div>
        </li>
      </ul>
    );
  }
}

export class Header extends React.Component {


  constructor(props){
    super(props)
    this.state = {backgroundColor: 'rgba(34, 34, 34, .5)',};
    this.handleScroll = this.handleScroll.bind(this);

  }

  handleScroll (e) {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    this.setState({backgroundColor: (scrollTop > 70 ? 'rgba(34, 34, 34)' : 'rgba(34, 34, 34, .5)')});
  }


  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll);
  }


  
  render () {
    return (
      <header className="header" style={{backgroundColor:this.state.backgroundColor}}>
        <div className='wrapper flex-inline'>
          <div className="flex-inline">
            <Link to='/home' className="logo-bar">
              <img className="img-inline" src={require('@/images/logo.png')}  alt=""/>
              <h1>长江云工业互联网平台</h1>
            </Link>
            <Menu></Menu>
          </div>
          <SubMenu></SubMenu> 
        </div> 
      </header>
    );
  }
}

export default Header;
