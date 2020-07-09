import React from 'react';
import './header.css';
import './styles/common.css';
import  './styles/rest.css';
 

class DropRow extends React.Component {
  liArr = this.props.arr.map((subLi, i) => <li key={i}><a href={this.props.linkArr[i]}>{subLi}</a></li>);
  timer = null;
  oDropList = document.getElementsByClassName('drop-list')[0];

  render () {
    return (
      <div>
        <span>{this.props.name}</span>
        <ul className="drop-list">
            {this.liArr}
        </ul>
      </div>
      
    );
  }
}
class MenuRow extends React.Component {
  render () {
    return (
      <li className={this.props.clsName} >
        <a href={this.props.link}>{this.props.name}</a>
      </li>
    );
  }
}

class Menu extends React.Component {
  frontPage = ["解决方案","典型案例"]
  frontPageLink = ["", ""]
  sqr = ["产品大厅","采购大厅","能力大厅","协作大厅"]
  sqrLink = ["", "", "", ""]
  
  render () {
    return (
      <ul className="menu">
          <li className="drop-row">
            <DropRow name="首页" arr={this.frontPage} linkArr={this.frontPageLink}></DropRow>
          </li>
          <MenuRow link="###" name="应用中心" clsName="item"></MenuRow>
          <MenuRow link="###" name="服务商广场" clsName="item"></MenuRow>
          <MenuRow link="###" name="行业资讯" clsName="item"></MenuRow>
          <li className="drop-row">
            <DropRow name="供需广场" arr={this.sqr} linkArr={this.sqrLink}></DropRow>
          </li>
          <MenuRow link="###" name="企事通" clsName="item"></MenuRow>
      </ul>
    );
  }
}

class SubMenu extends React.Component {
  render () {
    return (
      <ul className="submenu">
        <MenuRow link="###" name="关于我们" clsName="submenu-item"></MenuRow>
        <span></span>
        <MenuRow link="###" name="平台介绍" clsName="submenu-item"></MenuRow>
        <span></span>
        <MenuRow link="###" name="合作咨询" clsName="submenu-item"></MenuRow>
        <span></span>
        <MenuRow link="###" name="账号注册" clsName="submenu-item"></MenuRow>
        <span></span>
        <li className="submenu-item">
          <div className="scan">
            <img src={require("./images/phone.png")} alt="scan" className="scan-phone"></img>
            <div className="qrcode">
              <img src={require("./images/qrcode.png")} alt="qrcode"></img>
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
    this.state = {backgroundColor: 'rgba(34, 34, 34, .5)'};
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
            <a href={"#/"} className="logo-bar">
              <img className="img-inline" src={require('./images/logo.png')}  alt=""/>
              <h1>长江云工业互联网平台</h1>
            </a>
            <Menu></Menu>
          </div>
          <SubMenu></SubMenu> 
        </div>  
      </header>
    );
  }
}

export default Header;
