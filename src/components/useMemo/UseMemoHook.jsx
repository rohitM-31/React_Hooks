
// The useMemo hook in React is used to optimize performance by memoizing the result of an expensive computation,
//  so it's only recalculated when its dependencies change.
import React,{useState,useMemo} from 'react'

const UseMemoHook = () => {
    const[dark,setDark]=useState(false);
    const[num,setNum]=useState(0);
        const toggle=()=>
        {
            setDark((prev)=>!prev);
        }
        const ThemeStyles={
             backgroundColor: dark ? "#333" : "#fff",
        color: dark ? "#fff" : "#000",
        display: "flex",
         padding: '10px',
    marginTop: '10px',
        }
        const slowFunc=(num)=>
        {
            console.log("slow functiom calling");
            for(let i=0;i<1e9;i++)
            {
                return num*2;
            }
        }
        const doubleNum=useMemo(()=>slowFunc(num),[num]);
  return (
    <div>
        <input type="text" value={num} onChange={(e)=>setNum(e.target.value)}/>
        <button onClick={toggle}>Toggle Theme</button>
        <div style={ThemeStyles}>
            <p>Double:{doubleNum}</p>

        </div>

      
    </div>
  )
}

export default UseMemoHook
