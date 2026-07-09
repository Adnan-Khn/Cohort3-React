import { useState } from "react"

const App = () => {
  const [formData,setFormData] = useState()
  const handleChange = (e) =>{
    const {name,value} = e.target
    setFormData({...formData,[name]:value})
    console.log(formData)
  }
  return (
    <div>
      <input name = "name"type="text"  placeholder="Enter your name" onChange={handleChange}/>
      <input name=" email"type="email" placeholder="Enter your email" onChange={handleChange}/>
      <input name="password" type="password"  placeholder="Enter your password" onChange={handleChange} />
    </div>
  )
}
export default App