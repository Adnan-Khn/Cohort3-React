import { useContext } from "react"
import { MyStore } from "../context/StoreContext"

const Navbar = () => {
  const {setToggle} = useContext(MyStore)
  return (
    <div className="flex justify-between items-center bg-zinc-900 py-4 px-8 rounded-3xl">
        <h1 className="text-2xl font-bold">Logo</h1>
        <div className="flex gap-4">
          <p onClick={() => setToggle(false)}>Home</p>
          <p onClick={() => setToggle(true)}>Cart</p>
        </div>
    </div>
  )
}
export default Navbar