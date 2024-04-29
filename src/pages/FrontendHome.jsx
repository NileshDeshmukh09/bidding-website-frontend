import React from 'react'
import Navigation from '../components/Header'
import { Outlet } from 'react-router-dom'

const FrontendHome = () => {
  return (
    <div>
        <Navigation/>
        <Outlet/>
    </div>
  )
}

export default FrontendHome