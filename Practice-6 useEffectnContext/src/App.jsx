import { useContext, useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import { MyStore } from "./context/StoreContext"
import Cart from "./components/Cart"
import axios from "axios"
import ProductCard from "./components/ProductCard"

const App = () => {
  let {toggle,cartItems,isInCart} = useContext(MyStore)
  //console.log("App->",cartItems)
  const [prods, setProds] = useState([])
  //console.log(prods)
  const getProds = async() =>{
    try{
      let data = await axios("https://fakestoreapi.com/products")
      setProds(data.data)
    }catch(err){
      console.log(err)
    }
    
  }
  useEffect(()=>{
    getProds()
  }, [])
  
  return (
    <div className="min-h-screen bg-zinc-800 text-white p-4 flex flex-col gap-4">
      <Navbar/>
      <div>
        {toggle?<Cart/>:
        <div className = "grid grid-cols-4 gap-4 p-4" >
          {prods.map((prod)=>{
            //console.log("Before:",isInCart)
            isInCart = cartItems.find(item => item.id === prod.id)
            //console.log("After:",isInCart)
            return <ProductCard key={prod.id} product={prod} isInCart={isInCart}/>
          })}
        </div>}
      </div>
      
    </div>
  )
}
export default App