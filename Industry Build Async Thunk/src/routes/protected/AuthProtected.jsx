import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'
import HomeSkeleton from '../../shared/ui/pages/HomeSkeleton'

const AuthProtected = () => {
  const {user,isAuthenticated,isLoading} = useSelector((state)=>state.auth)
  if(isLoading)
    return <HomeSkeleton/>
  if(user) 
    return <Navigate to={"/main"}/>
  return (
    <Outlet/>
  )
}

export default AuthProtected