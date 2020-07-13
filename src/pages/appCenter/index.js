import React, {Fragment} from 'react'
import Header from '@/sharedComponents/Header'
import BtnUp from '@/sharedComponents/BtnUp'
import Footer from '@/sharedComponents/Footer'
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