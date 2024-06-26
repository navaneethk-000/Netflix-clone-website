import React from 'react'
import './NavBar.css'
function NavBar() {
  return (
    <div className='navbar'>
        <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="NetFlix-logo" />
        <div className='navbar-brand'>
          <ul className='navbar-nav'>
            <li className='nav-item'>Home</li>
            <li className='nav-item'>About</li>
            <li className='nav-item'>Services</li>
            <li className='nav-item'>Movies</li>
            <li className='nav-item'>Contact</li>
          </ul>
        </div>
        <img className='avatar' src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/1200px-Logonetflix.png" alt="Netflix-Avatar" />
    </div>
  )
}

export default NavBar
