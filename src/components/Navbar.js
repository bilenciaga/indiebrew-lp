import React, {useState} from 'react'
import { Link } from "gatsby"
import logo from "../assets/images/Logo.svg"
import { AiOutlineBars } from "react-icons/ai"



const Navbar = () => {
  const [show, setShow] = useState(false)
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <button className="nav-btn" onClick={() => setShow(!show)}>
            <AiOutlineBars size={24} />
          </button>
        </div>
        <div className={show ? "nav-links show-links" : "nav-links"}>
          <Link
            to="/"
            className="nav-link hide"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            home
          </Link>
          <Link
            to="/"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            pricing
          </Link>
          <Link
            to="/"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            support
          </Link>
          <div className="nav-link" style={{marginRight:'0px'}}>
            <Link to="/signup" className="btn" onClick={() => setShow(false)}>
              <button className='signup-btn'>
                Get Started - it's free
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar