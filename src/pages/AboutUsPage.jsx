import React from 'react'
import NavBar from '../components/NavBar'
import { Outlet , Link  } from 'react-router-dom'

function AboutUsPage() {
  return (
    <div>
        <NavBar />
        <h1>AboutUsPage</h1>
        <Link to="program" > go to programes </Link>
        <hr/>
        <Link to="ceo" > go to ceo </Link>
        <Outlet />
    </div>
  )
}

export default AboutUsPage