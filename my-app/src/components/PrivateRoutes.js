import React from 'react'
import {Navigate ,Outlet} from 'react-router-dom'

function PrivateRoutes() {
    const auth = localStorage.getItem('User')
  return auth? <Outlet /> :<Navigate to='/singup'/>
}

export default PrivateRoutes
