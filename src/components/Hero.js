import React from 'react';
import '../assets/css/main.css'
import { StaticImage } from "gatsby-plugin-image";

const Hero = () => {
  return (
    <div className='page'>
      <div className='hero-section'>
        <div className='hero-image'>
          <StaticImage src='../assets/images/Feed Mockup.png' 
          />
        </div>
        <div className='hero-content'>
          <h1>
            Your weekly personal feed digest.
          </h1>
          <p>
            With IndieBrew, get personal feeds from resources all around the web including Reddit, HackerNews, IndieHackers, and much more
          </p>
          <button className='hero-signup-btn'>
            Get Started - it's free
          </button>
          <div className='hero-avatar'>
            <StaticImage src='../assets/images/User Avatars.svg' 
            />
          </div>
          <p>
            Join 32,642 IndieBrewers in curating their personal digest.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero