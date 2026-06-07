import React from 'react'
import Header from '../component/Header'
import HomeProvide from '../component/HomeProvide'
import Banner from '../component/banner'
import HomeAbout from '../component/HomeAbout'
import HomeService from '../component/HomeService'
import HomeSuccess from '../component/HomeSuccess'
import HomeCaseLoan from '../component/HomeCaseLoan'
import Footer from '../component/Footer'

const HomePage = () => {
  return (
    <>
        <Header/>
        <Banner/>
        <HomeProvide/>
        <HomeAbout/>
        <HomeService/>
        <HomeSuccess/>
        <HomeCaseLoan/>
        <Footer/>
    </>
  )
}

export default HomePage