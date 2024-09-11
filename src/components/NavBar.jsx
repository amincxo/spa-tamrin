import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <div>
        <ul>
            <li>
                <NavLink to='/' >Home</NavLink>
            </li>
            <li>
                <NavLink to='/courses' >Courses</NavLink>
            </li>
            <li>
                <NavLink to='/about-us' >AboutUs</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default NavBar