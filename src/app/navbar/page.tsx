import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className='navbar'>
      <h1 className='logo'>Portfolio.</h1>
      <ul className='nav-links'>
        <li className='links'>
          <Link href={"/"}>Home</Link>
        </li>
        <li className='links'>
          <Link href={"/about"}>About</Link>
        </li>
        <li className='links'>
          <Link href={"/contact"}>Contact</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar;
