import React from 'react'
import Header from '../component/Header'
import ServicesBenner from '../component/ServicesBenner'
import ServiceCards from '../component/ServiceCards'
import Serviceloans from '../component/Serviceloans'
import Footer from '../component/Footer'

const Services = () => {
  return (
    <>
      <Header/>
      <ServicesBenner/>
      <ServiceCards/>
      <Serviceloans/>
      <Footer/>
    </>
  )
}

export default Services