import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <button type="button" className="hamburger-btn" id="hamburgerBtn">
          <div className="hamburger-img" id="hamburgerIcon"></div>
        </button>
        <a href="/" className="logo-text">Tududu App</a>
      </div>
      <button type="button" className="settings-btn" id="settingsBtn">
        <div className="setting-img" id="settingsIcon"></div>
      </button>
    </nav>
  )
}

export default Navbar
