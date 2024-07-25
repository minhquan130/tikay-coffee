import React from 'react'
import './LayoutMaster.scss'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Home from '../../pages/user/Home/Home'

const LayoutMaster = () => {
    return (
        <>
            <Header />
            <Home />
            <Footer />
        </>
    )
}

export default LayoutMaster