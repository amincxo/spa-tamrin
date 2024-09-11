import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'

function HomePage() {
  return (
    <div>
        <NavBar />
        <h1>HomePage</h1>

        <Link to='/courses' > bro be courses </Link>
        ||||
        <Link to='about-us' > about us </Link>
    </div>
  )
}

export default HomePage