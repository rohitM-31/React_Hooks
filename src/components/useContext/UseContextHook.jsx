import React,{createContext} from 'react'
import Parent from './Parent'
export const userContext=createContext();
const UseContextHook = () => {
    const user="John"
  return (
    <div>
        <userContext.Provider value={user}>
            <Parent/>
        </userContext.Provider>
      
    </div>
  )
}

export default UseContextHook
