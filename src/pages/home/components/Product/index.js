import React from 'react';
import './style.less'


class Product extends React.Component {
    
    render () {
        return (
            <li key={this.props.cont.key} className={this.props.className} onMouseOver={this.props.onMouseOver} onMouseOut={this.props.onMouseOut}>
                <a className="prod-box" href={this.props.cont.href}>
                    <div className="img-box"><img src={this.props.cont.img} alt="icon"></img></div>
                    <h4>{this.props.cont.title}</h4>
                    <p>{this.props.cont.decrp}</p>
                </a>
                <div className="act-bar"></div>
                <ul className="func-list wrapper flex-inline">
                    {this.props.cont.func.map((subitem, j) => 
                        <li key={j} className={this.props.cont.funcClass}>
                            <h5>{subitem.name}</h5>
                            <p className="fold-box">{subitem.detail}</p>
                        </li>)
                    }
                </ul>
            </li>
        );
    }
}


export class CoreProduct extends React.Component {
    state = {
        currentIndex: 0,
        contents: [
            {
                img: require('@/images/base.png'),
                href: "###",
                title: "IIOT平台",
                decrp: "设备管理、连接管理、边缘计算。",
                func: [
                    {name: '边缘节点', detail: '数据本地清洗、存储、发布和应用的本地运行'},
                    {name: '边缘节点', detail: '数据本地清洗、存储、发布和应用的本地运行'},
                    {name: '边缘节点', detail: '数据本地清洗、存储、发布和应用的本地运行'},
                    {name: '边缘节点', detail: '数据本地清洗、存储、发布和应用的本地运行'},
                    {name: '边缘节点', detail: '数据本地清洗、存储、发布和应用的本地运行'},
                    {name: '边缘节点', detail: '数据本地清洗、存储、发布和应用的本地运行'},
                    {name: '边缘节点', detail: '数据本地清洗、存储、发布和应用的本地运行'},
                    {name: '边缘节点', detail: '数据本地清洗、存储、发布和应用的本地运行'},
                    {name: '边缘节点', detail: '数据本地清洗、存储、发布和应用的本地运行'},
                ], 
                funcClass: "short"
            },{
                img: require('@/images/base.png'),
                title: "IIOT平台",
                decrp: "设备管理、连接管理、边缘计算。",
                func: [
                    {name: '边缘节点', detail: '数据本地清洗、存储、发布和应用的本地运行'},
                    {name: '边缘节点', detail: '数据本地清洗、存储、发布和应用的本地运行'},
                    {name: '边缘节点', detail: '数据本地清洗、存储、发布和应用的本地运行'},
                    {name: '边缘节点', detail: '数据本地清洗、存储、发布和应用的本地运行'},
                    {name: '边缘节点', detail: '数据本地清洗、存储、发布和应用的本地运行'},
                    {name: '边缘节点', detail: '数据本地清洗、存储、发布和应用的本地运行'},
                    {name: '边缘节点', detail: '数据本地清洗、存储、发布和应用的本地运行'},
                    {name: '边缘节点', detail: '数据本地清洗、存储、发布和应用的本地运行'},
                    {name: '边缘节点', detail: '数据本地清洗、存储、发布和应用的本地运行'},
                ],
                funcClass: "short"
            },{
                img: require('@/images/base.png'),
                title: "IIOT平台",
                decrp: "设备管理、连接管理、边缘计算。",
                func: [
                    {name: '边缘节点', detail: '数据本地清洗、存储、发布和应用的本地运行'},
                    {name: '边缘节点', detail: '数据本地清洗、存储、发布和应用的本地运行'},
                    {name: '边缘节点', detail: '数据本地清洗、存储、发布和应用的本地运行'},
                    {name: '边缘节点', detail: '数据本地清洗、存储、发布和应用的本地运行'},
                    {name: '边缘节点', detail: '数据本地清洗、存储、发布和应用的本地运行'},
                    {name: '边缘节点', detail: '数据本地清洗、存储、发布和应用的本地运行'},
                    {name: '边缘节点', detail: '数据本地清洗、存储、发布和应用的本地运行'},
                    {name: '边缘节点', detail: '数据本地清洗、存储、发布和应用的本地运行'},
                    {name: '边缘节点', detail: '数据本地清洗、存储、发布和应用的本地运行'},
                ], 
                funcClass: "short"
            },
            {
                img: require('@/images/base.png'),
                title: "行业私有云",
                decrp: "按照行业特点快速构建行业云，实现行业资源汇聚。",
                func: [
                    {name: '有色云', detail: '着眼于工业园区，通过搭建智慧工厂和环境监测系等系统，为园区的产业聚集、环境治理、能源管理、循环经济等提供有力的支撑，提升工业园区招商引资、生态经济循环、聚焦融合发展以及生态环境的可持续发展能力'},
                    {name: '有色云', detail: '着眼于工业园区，通过搭建智慧工厂和环境监测系等系统，为园区的产业聚集、环境治理、能源管理、循环经济等提供有力的支撑，提升工业园区招商引资、生态经济循环、聚焦融合发展以及生态环境的可持续发展能力'},
                    {name: '有色云', detail: '着眼于工业园区，通过搭建智慧工厂和环境监测系等系统，为园区的产业聚集、环境治理、能源管理、循环经济等提供有力的支撑，提升工业园区招商引资、生态经济循环、聚焦融合发展以及生态环境的可持续发展能力'},
                    
                ],
                funcClass: "long flex-inline" 
            },
        ]
    };

    handleMouseOver = (index) => {
        // console.log(index)
        this.setState({
            currentIndex: index
        })
    }

    handleMouseOut = () => {
        this.setState({
            currentIndex: 0
        })
    }

    render () {
        return (
            <div className="core-prod wrapper">
                <h3 className="title">核心产品与服务</h3>
               
                
                <ul className="prod-list flex-inline">
                    {this.state.contents.map((item, i) => 
                        <Product onMouseOver={()=>this.handleMouseOver(i)} onMouseOut={()=>this.handleMouseOut()} className={`prod ${i===this.state.currentIndex ? 'on' : ''}`} cont={item} key={i}/>)}
                </ul>
            </div>
            
        );

    }
}

export default CoreProduct;