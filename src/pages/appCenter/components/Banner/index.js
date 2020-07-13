import React from 'react';
import './style.less'

export class Banner extends React.Component {
    bgImg = 'url('+ require('@/images/banner_app_center.png') + ')'
    render () {
        return (
            <div className="banner" style={{backgroundImage:this.bgImg}}>
                <div className="wrapper" >
                    <h2>应用中心</h2>
                    <h4>基于工业互联网平台的行业应用</h4>
                </div>
            </div>
        );
    }
}

export default Banner;
