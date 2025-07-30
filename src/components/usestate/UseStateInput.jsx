import React,{useState} from 'react'

const UseStateInput = () => {
    const[name,setName]=useState('');
    const handleCLick=(e)=>
    {
        setName(e.target.value);
    }
    const handleClear=()=>
    {
        setName('');
    }
  return (
    <div>
      <input type="text" placeholder='Enter name' value={name} onChange={handleCLick}/>
      <button onClick={handleClear}>click</button>
    </div>
  )
}

export default UseStateInput
