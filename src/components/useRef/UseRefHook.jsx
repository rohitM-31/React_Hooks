import React,{useRef} from 'react'

const UseRefHook = () => {
    const inputRef=useRef(null);
    const handlefocus=(e)=>
    {
        inputRef.current.focus();
        console.log(inputRef);
    }
  return (
    <div>
      <input type="text" ref={inputRef}/>
      <button onClick={handlefocus}>submit</button>
      
    </div>
  )
}

export default UseRefHook
