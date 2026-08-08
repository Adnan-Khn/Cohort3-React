import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'
import HomeSkeleton from '../../shared/ui/pages/HomeSkeleton'

const MainProtected = () => {
  const {user,isLoading} = useSelector((state)=>state.auth)
  if(isLoading)
    return <HomeSkeleton/>
  if(!user)
    return <Navigate to={"/"}/>
  return (
    <Outlet/>
  )
}

export default MainProtected