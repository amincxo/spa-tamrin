import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function LandingPage() {
     const navigate =  useNavigate()
    useEffect(()=> {
        navigate("/")
    },[])

  return (
    <div>LandingPage</div>
  )
}

export default LandingPage