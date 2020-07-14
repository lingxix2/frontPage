import React from 'react';
import './style.less'




export class SlideBox extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            now: 0,
            left: 0,
            right: 0,
            mouseOver: true,
            
        };
        
        this.timer = null;
        this.slideTimer = null;
        this.handleSlide = this.handleSlide.bind(this);
        this.move = this.move.bind(this);
        this.width = document.documentElement.clientWidth;
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
        this.handleLeftClick = this.handleLeftClick.bind(this);
        this.handleRightClick = this.handleRightClick.bind(this);
        this.handleTabClick = this.handleTabClick.bind(this);
    }

    move(step, decay) {
        if (this.slideTimer) clearInterval(this.slideTimer);
        else this.slideTimer = null;

        
        
        // let goNext = this.state.left > target
        this.setState((prevState) => ({now: prevState.now + step}));
        // target -= target % this.step;

        let goNext = step > 0;
        let target = this.state.left - this.width * step;
        target -= target % this.width;
        

        
        // if (goNext && this.state.now === this.len) {
        //     this.setState({left: 0, now: 0})
        //     target = -this.step
        // } else if (!goNext && this.state.now === 0) {
        //     let last = -this.len * this.step
        //     console.log("before setState:", this.state.left, this.state.right)
        //     this.setState({left: last, now: this.len}, ()=>)
        //     this.setState({right: 100})
        //     console.log("after setState:", this.state.left, this.state.right)
        //     target = this.state.left + this.step        
        // }
        
        
        // this.setState((prevState) => goNext ? ({now: (prevState.now + 1)}): ({now: (prevState.now - 1)}));
        

        this.slideTimer = setInterval(function () {

            // wrap around
            if (goNext && target < -this.len * this.width) {
                this.setState({left: 0, now: step})
                // console.log('wrap right')
                target = -this.width * step;
            } else if (!goNext && target > 0) {
                //console.log("before setState:", this.state.left, this.state.now)
                this.setState({left: -(this.props.links.length*this.width), now: this.props.links.length+step});
                // console.log('wrap left')
                // this.setState({left: -this.len * this.step, now: this.len-1}, () => console.log(this.state.left, this.state.now));
                //console.log("after setState:", this.state.left, this.state.now)

                target = this.state.left - this.width*step;
            }
            
            let speed = goNext ? Math.floor((target-this.state.left)/decay) : Math.ceil((target-this.state.left)/decay) 
            
            // if (Math.abs(this.state.left - target) <= Math.abs(speed)) {
            if (this.state.left === target) {
                // this.setState({left: target});
                // this.setState((prevState) => ({now: prevState.now + step}));
                clearInterval(this.slideTimer);
            } else {
                this.setState((prevState) => ({left: prevState.left + speed}));
            }

            
        }.bind(this), 30)
    }

    handleSlide () {
        if (this.timer) clearInterval(this.timer);
        else this.timer = null;

        // console.log("start slide")

        this.timer = setInterval(function () {
            if (this.state.mouseOver) clearInterval(this.timer)
            else {
                //this.move(this.state.left - this.width, 6) // move left
                this.move(1, 6);
            }
        }.bind(this), 4000)
    }

    componentDidMount () {
        this.handleSlide();
    }

    componentWillUnmount () {
        clearInterval(this.timer);
    }

    handleMouseOver = () => this.setState({mouseOver: true})

    handleMouseOut () {
        this.setState({mouseOver: false});
        this.handleSlide();
    }


    // handleLeftClick = () => this.move(this.state.left + this.step, 6);
    handleLeftClick = () => this.move(-1, 6);


    // handleRightClick = () => this.move(this.state.left - this.step, 6)
    handleRightClick = () => this.move(1, 6);

    handleTabClick (idx) {
        let step = idx - this.state.now % this.props.links.length;
        this.move(step, 6);
    }

    

    

    render () {
        // console.log(this.props)
        if (this.props.links.length > 0) {
            
            let slickItem = []
            // console.log(this.state.left, this.state.now);
            for (let i = 0; i < this.props.links.length; i++) {
                slickItem.push(<li className={i === (this.state.now % this.props.links.length) ? "active" : "inact"} onClick={()=>this.handleTabClick(i)} key={i}></li>);
            }
            return (
                <div className="carousel-box">
                    <div className="slide-bar" style={{left: this.state.left+'px'}} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
                        {this.props.links.map((item, i) => 
                            <div className="slide-elem" key={i}>
                                <a href={item.href}>
                                    <img src={item.img} style={{width:this.width+'px'}} alt={i}/>
                                </a>
                            </div>)}
                        
                    </div> 
                    <ul className="slick-bar">
                        {slickItem}
                    </ul>
                    <div className="left-btn" onClick={this.handleLeftClick} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}></div>
                    <div className="right-btn" onClick={this.handleRightClick} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}></div>
                </div>
            );
        } else {
            return (
            <div className="carousel-box">
                <div className="slide-bar"></div>
            </div>);
        }

    }
}

export default SlideBox;





