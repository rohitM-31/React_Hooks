import React,{useContext} from 'react'
import { userContext } from './UseContextHook'
const Child = () => {
    const user=useContext(userContext);
  return (
    <div>
        <h1>Hello {user}</h1>
      
    </div>
  )
}

export default Child
