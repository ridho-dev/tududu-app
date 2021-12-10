import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div class="logo">
        <button type="button" class="hamburger-btn" id="hamburgerBtn">
          <div class="hamburger-img" id="hamburgerIcon"></div>
        </button>
        <a href="/" class="logo-text">Tududu App</a>
      </div>
      <button type="button" class="settings-btn" id="settingsBtn">
        <div class="setting-img" id="settingsIcon"></div>
      </button>
    </nav>
  )
}

export default Navbar
