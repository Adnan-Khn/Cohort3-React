import React, { useEffect, useState } from 'react'
import UserCard from '../components/UserCard'
import axios from 'axios'
import { axiosInstance } from '../config/axiosInstance'

const Users = () => {
  const [users,setUsers] = useState([])

  const getUsers = async()=>{
    try{
      let res = await axiosInstance.get("/users")
      setUsers(res.data)
    }catch(err){
      console.log("Error in user api: ",err)
    }
  }
  useEffect(()=>{
    getUsers()
  },[])
  return (
    <div>
      {users.map((user)=>
        <UserCard key={user.id} user={user}/>
      )}
    </div>
  )
}

export default Users