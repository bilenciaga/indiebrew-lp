import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Info from '../components/Info'
import '../assets/css/main.css'
import Footer from '../components/Footer'


const index = () => {
  return (
    <>
      <div className='gradient-background'>
        <Navbar />
        <Hero />
      </div>
        <Info />
        <Footer />
    </>
  )
}

export default index