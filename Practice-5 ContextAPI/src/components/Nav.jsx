import { useContext } from "react";
import { MyStore } from "../context/StoreContext";

const Nav = () => {
  const {setIsCart, setIsCheckout} = useContext(MyStore);
  return (
    <div className = "flex bg-stone-200 w-9/10 p-5 justify-between items-center rounded-3xl text-stone-600">
      <h1>E-Com</h1>
      <div className = "flex gap-5 cursor-pointer">
        <button onClick={()=>setIsCart(false)}>Home</button>
        <button onClick={()=>{setIsCart(true); setIsCheckout(false)}}>Cart</button>
      </div>
    </div>
  )
}
export default Nav