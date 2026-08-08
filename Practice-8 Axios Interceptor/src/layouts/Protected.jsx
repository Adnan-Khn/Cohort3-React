import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router'
import { AuthStore } from '../context/AuthContext'

const Protected = () => {
  const {loggedUser} = useContext(AuthStore)
  if(loggedUser)
    return <Navigate to={"/main"}/>
  return (
    <div>
        <Outlet/>
    </div>
  )
}

export default Protected