import React from 'react';
import './style.less'

export class Diagram extends React.Component {
    render () {
        return (
            <div className="diagram">
                <div className="wrapper">
                    <img src={require('@/images/diagram.gif')} alt="img"/>
                </div>
            </div>
        );

    }
}

export default Diagram;