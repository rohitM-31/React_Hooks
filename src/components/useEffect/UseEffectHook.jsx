import React,{useEffect,useState} from 'react'

const UseEffectHook = () => {
    const[fetch1,setFetch]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>res.json())
        .then((data)=>setFetch(data));
    },[]);
  return (
    <div>
        <ul>
            {fetch1.map((item)=>(
                <li key={item}>{item.id}
                {item.name}
                {item.body}</li>
            ))};
        </ul>
      
    </div>
  )
}

export default UseEffectHook
