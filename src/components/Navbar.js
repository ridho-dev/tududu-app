import React from 'react'

const Navbar = () => {
  let isShowAside = true;

  const openAside = () => {
    const asideElement = document.querySelector('aside')
    const asideContainer = document.getElementById('asideContainer');
    const asideClassList = asideContainer.classList;
    const overlay = document.getElementById("overlay");
    if (window.innerWidth <= 768) {
      asideElement.style.width = '200px';
      // because the value will not change when overlay clicked, 
      // must force to change the value here
      if (asideClassList.contains("no-show-aside")) {
        isShowAside = true
      }

      // opposite condition because aside is not shown when window width < 768px
      if (!isShowAside) {
        overlay.style.animation = "fadeOut 0.2s"
        setTimeout(() => { overlay.style.display = "none"; }, 190)
        setTimeout(() => {
          asideClassList.toggle("no-show-aside", isShowAside);
          asideClassList.toggle("show-aside", !isShowAside);
        }, 250)
        asideElement.style.transform = 'translate(-200px)'
        isShowAside = true
      } else {
        overlay.style.animation = "fadeIn 0.2s"
        overlay.style.display = "block"
        setTimeout(() => {
          asideClassList.toggle("no-show-aside", isShowAside);
          asideClassList.toggle("show-aside", !isShowAside);
        }, 250)
        asideElement.style.transform = 'translate(0px)'
        isShowAside = false
      }
    }
    else {
      if (isShowAside) {
        asideElement.style.flexGrow = '0';
        setTimeout(() => {
          asideClassList.toggle("no-show-aside", !isShowAside);
          asideClassList.toggle("show-aside", isShowAside);
        }, 50)
        isShowAside = false
      } else {
        asideElement.style.flexGrow = '1';
        setTimeout(() => {
          asideClassList.toggle("no-show-aside", !isShowAside);
          asideClassList.toggle("show-aside", isShowAside);
        }, 250)
        isShowAside = true
      }
    }

  }

  return (
    <nav className="navbar">
      <div className="logo">
        <button type="button" className="hamburger-btn" id="hamburgerBtn" onClick={openAside}>
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
