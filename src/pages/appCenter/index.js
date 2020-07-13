import React, {Fragment} from 'react'
import {Header, Footer, BtnUp} from '@/components'
import {Banner, Content} from './components'

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