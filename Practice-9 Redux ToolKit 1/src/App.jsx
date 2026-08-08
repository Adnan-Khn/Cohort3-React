import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementbyAmout } from "./redux/features/counter";

const App = () => {
  const counter = useSelector((state)=>state.counter.value)
  const dispatch = useDispatch()

  const [num,setNum]=useState(0)
  return (
    <div className="flex bg-zinc-600 text-white gap-5 h-screen justify-center items-center">
      <button onClick={()=>dispatch(increment())}>➕</button>
      <h1>{counter}</h1>
      <button onClick={()=>dispatch(decrement())}>➖</button>
      <input type="number" value={num} onChange={(e)=>setNum(e.target.value)} />
      <button onClick={()=>dispatch(incrementbyAmout(Number(num)))}>Increment by {num}</button>
    </div>
  );
};

export default App;
