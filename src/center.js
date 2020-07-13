import React, {Fragment} from 'react'
import {Header, Banner, Content, Footer, BtnUp} from '@/app_center'

export class AppCenter extends React.Component {
    render() {
        return (
            <Fragment>
                <Header/>
                <Banner/>
                <Content/>
                <BtnUp/>
                <Footer/>
            </Fragment>
                
        )
    }
}


export default AppCenter;