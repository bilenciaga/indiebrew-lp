import React from 'react';
import '../assets/css/main.css';
import {IoArrowForwardOutline} from 'react-icons/io5';
import { StaticImage } from "gatsby-plugin-image";


const Info = () => {
  return (
    <div className='page'>
      <div className='info-section1'>
        <div className='info-image-1'>
          <StaticImage src='../assets/images/Social Media Icons.png' />
        </div>
        <div className='info-content'>
          <h1>
            Curate your feed from dozens of resources.
          </h1>
          <p>
            We cover all major platforms where one could want to curate their feed from. Reddit, ProductHunt, IndieHackers, and so much more.
          </p>
          <a className='info-link'>
            See full list of resources <IoArrowForwardOutline value={{ className: 'arrow-icon' }} />
          </a>
        </div>
      </div>
      <div className='info-section2'>
        <div className='info-image-2'>
          <StaticImage src='../assets/images/Phone Mockup.png' />
        </div>
        <div className='info-content'>
          <h1>
            Access your feed from the comfort of your phone.
          </h1>
          <p>
            With native apps for both iOS and and Android, accessing your curated content has never been easier.
          </p>
          <a className='info-link'>
            Sign up for the waitlist <IoArrowForwardOutline value={{ className: 'arrow-icon' }} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Info