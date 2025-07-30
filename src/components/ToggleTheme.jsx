import React,{useState} from 'react'

const ToggleTheme = () => {
    const[dark,setDark]=useState(false);
    const toggle=()=>
    {
        setDark((prev)=>!prev);
    }
    const ThemeStyles={
         backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#000",
    display: "flex",
    }
  return (
    <div style={ThemeStyles}>
        <button onClick={toggle}>Toggle theme</button>
      
    </div>
  )
}

export default ToggleTheme
