import React from 'react'
import logo from "../assets/logo.png";


function Header() {


  return (
     <header  className={`w-full flex items-center justify-between px-4 py-3 sticky top-0 z-50 transition-all duration-500 bg-transparent`}>
      {/* Insert Logo */}
      <div>
        <img
          src={logo}
          alt="Logo"
          className="h-25 w-25"
        />

      </div>
    </header>
  )
}

export default Header