import React from 'react';
import './styles/common.css';
import './styles/rest.css';
import './body.css'



export class SlideBox extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            now: 0,
            left: 0,
            mouseOver: true,
            links: [ 
                    {
                        // id: 1,
                        href: 'https://baidu.com',
                        img: require('./images/rot1.png')
                    },
                    {
                        // id: 2,
                        href: 'https://sohu.com',
                        img: require('./images/rot2.png')
                    },
                    {
                        href: 'https://sohu.com',
                        img: require('./images/rot3.png')
                    },
                    {
                        // id: 1,
                        href: 'https://baidu.com',
                        img: require('./images/rot1.png')
                    },
                    
                ]
        };
        this.timer = null;
        this.slideTimer = null;
        this.handleSlide = this.handleSlide.bind(this);
        this.move = this.move.bind(this);
        this.len = this.state.links.length - 1;
        this.step = document.documentElement.clientWidth;
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
        this.handleLeftClick = this.handleLeftClick.bind(this);
        this.handleRightClick = this.handleRightClick.bind(this);
    }

    move(target, speed) {
        console.log('move', this)
        if (this.slideTimer) clearInterval(this.slideTimer);
        else this.slideTimer = null;

        
        
        let goNext = this.state.left > target
        target -= target % this.step;

        
        
        if (goNext && this.state.now === this.len) {
            this.setState({left: 0, now: 0})
            target = -this.step
        } else if (!goNext && this.state.now === 0) {
            let last = -this.len * this.step
            console.log(last)
            console.log("before setState:", this.state.left, target, goNext, this.state.now)
            this.setState({left: last, now: this.len})
            console.log("after setState:", this.state.left, target, goNext, this.state.now)
            target = this.state.left + this.step
            
        }
        
        
        this.setState((prevState) => goNext ? ({now: (prevState.now + 1)}): ({now: (prevState.now - 1)}));
        

        this.slideTimer = setInterval(function () {
            // 
            if (Math.abs(this.state.left - target) <= Math.abs(speed)) {
                this.setState({left: target});
                clearInterval(this.slideTimer);
            } else {
                this.setState((prevState) => ({left: prevState.left + speed}));
            }

            
        }.bind(this), 30)
    }

    handleSlide () {
        if (this.timer) clearInterval(this.timer);
        else this.timer = null;

        console.log("start slide")

        this.timer = setInterval(function () {
            if (this.state.mouseOver) clearInterval(this.timer)
            else {
                this.move(this.state.left + this.step, 60) // move left
            }
        }.bind(this), 2000)
    }

    componentDidMount () {
        this.handleSlide();
    }

    handleMouseOver = () => this.setState({mouseOver: true})

    handleMouseOut () {
        this.setState({mouseOver: false});
        this.handleSlide();
    }


    handleLeftClick = () => this.move(this.state.left + this.step, 60);


    handleRightClick = () => this.move(this.state.left - this.step, -60)


    render () {
        return (
            <div className="carousel-box">
                <div className="slide-bar" style={{left: this.state.left+'px'}} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
                    {this.state.links.map((item, i) => 
                        <div className="slide-elem" key={i}>
                            <a href={item.href}>
                                <img src={item.img} style={{width:this.step+'px'}} alt={i}/>
                            </a>
                        </div>)}
                    
                </div> 
                <div className="left-btn" onClick={this.handleLeftClick} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}></div>
                <div className="right-btn" onClick={this.handleRightClick} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}></div>
            </div>
             

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
                <img src={require('./images/up.png')} alt='up'/>
            </div>
        )
    }
}



