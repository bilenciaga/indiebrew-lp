import React from 'react'

const Footer = () => {
  return (
    <div className='page'>
      <div className="footer">
        <div className="footer-main">
          <h1>IndieBrew</h1>
          <p>With IndieBrew, get personal feeds from resources all around the web, including Reddit, HackerNews, and much more.</p>
        </div>
        <div className="footer-link-container">
          <div className="footer-link">
            <h2>Sitemap</h2>
            <ul>
              <li>Homepage</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div className="footer-link">
            <h2>Company</h2>
            <ul>
              <li>About</li>
              <li>Customers</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="footer-link">
            <h2>Resources</h2>
            <ul>
              <li>Support</li>
              <li>Contact</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className="footer-link">
            <h2>Portfolios</h2>
            <ul>
              <li>HackerNews</li>
              <li>Reddit</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer