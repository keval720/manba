import React from 'react'
import '../component/HomeService.css'
import serviceimg from "../Assets/homeServiceimg.jpg"

const HomeService = () => {
  return (
    <>
        <div id='HomeService-div'>
            <div id='serviceimg-div' className='container'>
                <img src={serviceimg} alt="" style={{width:"100%"}}/>
            </div>
        </div>
    </>
  )
}

export default HomeService