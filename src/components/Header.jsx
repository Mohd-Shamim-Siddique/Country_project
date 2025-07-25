import React, { useEffect, useRef, useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink } from 'react-router-dom'
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa6";

const Header = () => {
  const [isDark, setIsDark] = useState(false)
  const [show, setShow] = useState(false)
  const myRef = useRef(null)
  const handleMenuBar = () => {
    setShow(!show)
    myRef.current.classList.toggle('toggle')
  }
  if (isDark) {
    document.body.classList.add('dark')
  } else {
    document.body.classList.remove('dark')
  }
  useEffect(() => {
    const getTheme = JSON.parse(localStorage.getItem("theme"))
    if (getTheme) {
      setIsDark(getTheme)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("theme", isDark)
  }, [isDark])
  return (
    <div className='header'>
      <div className='nav flex container'>
        <h1>WorldAtlas</h1>
        <div ref={myRef} className='flex nav-links '>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/country'>Country</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
          <div className='flex icons' onClick={() => setIsDark(!isDark)}>{isDark ? <FaSun /> : <FaMoon />}{isDark ? 'Light-Mode' : 'Dark Mode'}</div>
        </div>
        <button className='menu-bar' onClick={handleMenuBar}><RxHamburgerMenu /></button>
      </div>
    </div>
  )
}

export default Header