import React,{useState} from 'react'

const UseStateHook = () => {
    const[count,setCount]=useState(0);
    const handleInc=(e)=>
    {
           setCount(count+1);
    }
    const handleDec=(e)=>
    {
        setCount(count-1);
    }
  return (
    <div>
        <p>count:{count}</p>
        <button onClick={handleInc}>count</button>
        <button onClick={handleDec}>count</button>
       

      
    </div>
  )
}

export default UseStateHook
