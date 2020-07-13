import React from 'react';
import './style.less';

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

export default BtnUp;