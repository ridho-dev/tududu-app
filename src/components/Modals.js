import React, { useState } from 'react'

const Modals = () => {
  const unShowAside = () => {
    const asideElement = document.querySelector('aside')
    const asideContainer = document.getElementById('asideContainer');
    const overlay = document.getElementById("overlay");

    overlay.style.animation = "fadeOut 0.2s"
    setTimeout(() => { overlay.style.display = "none"; }, 190)
    asideContainer.classList.remove("show-aside")
    asideContainer.classList.add("no-show-aside")
    asideElement.style.transform = 'translate(-200px)'
  }
  return (
    <div>
      <div className="overlay" id="overlay" onClick={unShowAside}></div>
    </div>
  )
}

export default Modals
