import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../component/Header'
import AboutBanner from '../component/AboutBanner'
import About from '../component/About'
import Value from '../component/Value'
import Aboutmain from '../component/Aboutmain'
import Footer from '../component/Footer'

const Aboutus = () => {
  return (
    <>
        <Header/>
        <AboutBanner/>
        <About/>
        <Value/>
        <Aboutmain/>
        <Footer/>
    </>
  )
}

export default Aboutus