import '../assets/css/main.css'
import logo from "../assets/images/Logo.svg"
import React from 'react'
import { Link } from "gatsby";
import { MdOutlineArrowBackIosNew } from "react-icons/md"
import { FcKindle } from 'react-icons/fc'
import { FcInTransit } from 'react-icons/fc'
import { FcVoicePresentation } from 'react-icons/fc'

const signup = () => {
  return (
<div className='signup-background'>
  <div className='page'>
    <nav className="signup-navbar">
      <div className="signup-nav-header">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <div className="signup-nav-container">
          <Link to='/'>
            <button className="signup-nav-btn">
              <MdOutlineArrowBackIosNew className='back-icon' />
            </button>
          </Link>
          <p className='signup-nav-text'>back to homepage</p>
        </div>
      </div>
    </nav>
    <div className="signup">
      <div className="signup-content">
        <h1>Create your personalized feed.</h1>
        <div className='signup-content-p'>
          <div className='signup-content-icon'style={{marginTop:'3px'}}>
            <FcKindle size='1.5rem'/>
          </div>
          <p><span className='bold'>Over 20 resources.</span> With resources ranging from Reddit to IndieHackers,we've got all your needs covered.</p>
        </div>
        <div className='signup-content-p'>
          <div className='signup-content-icon'>
            <FcInTransit size='1.5rem' />
          </div>
          <p><span className='bold'>Delivered weekly.</span> Every week at exactly Tuesday 12:00 P.M. EST - expect a value-packed digest right in your email</p>
        </div>
        <div className='signup-content-p'>
          <div className='signup-content-icon'>
            <FcVoicePresentation size='1.5rem'/>
          </div>
          <p><span className='bold'>Unlimited ideas.</span> With all the ideas you'll be reading about, what's stopping you from creating a sustainable startup?</p>
        </div>
      </div>
      <div className="signup-form-container">
        <h1>Create your IndieBrew Account</h1>
        <form className='signup-form'>
          <label htmlFor="">Full Name</label>
          <input
              type='text'
              className='name-input'
              placeholder='John Doe'
            />
          <label htmlFor="">Email</label>
          <input
            type='email'
            className='email-input'
            placeholder='Email'
          />
          <label htmlFor="">Password</label>
          <input
            type='password'
            className='password-input'
            placeholder='At least 8 characters'
          />
        </form>
        <div className="signup-terms">
          <input type="checkbox" style={{marginTop:'3px', alignSelf:'baseline'}}/>
          <label htmlFor="">By creating an account on IndieBrew, you agree to the <span style={{textDecoration:'underline', color:'#664EFC', fontWeight:'bold', cursor:'pointer'}}>Terms & Conditions.</span></label>
        </div>
        <button className='signup-form-btn'>
          Create an Account
        </button>
      </div>
    </div>
  </div>
</div>  
  )
}

export default signup