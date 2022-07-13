import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Info from '../components/Info'
import '../assets/css/main.css'


const index = () => {
  return (
    <>
      <div className='gradient-background'>
        <Navbar />
        <Hero />
      </div>
        <Info />
    </>
  )
}

export default index