import { useState } from "react"
import Register from "./components/Register"
import Login from "./components/Login"
import Users from "./components/Users"
import "./index.css"

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isRegistered, setIsRegistered] = useState(false)
  const [users,setUsers] = useState(localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : []);

  return (
    <div className ="flex justify-center items-center h-screen w-screen bg-slate-300">
    { isRegistered ?
        (isLoggedIn ? <Users/> : <Login users = {users} setIsLoggedIn = {setIsLoggedIn} setIsRegistered = {setIsRegistered} />)
      :
      (<Register props = {{users,setUsers,setIsRegistered}} />)
    }
    </div>    
  )
}
export default App