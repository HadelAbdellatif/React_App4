import React, { useState } from 'react'

export default function App() {

  let [age, setAge] = useState(20);
  

  const getData = (namee)=> {
    console.log(namee);
  }

  return (
    
    <>
    
    <button onClick={()=>getData("hadeel")}>Click</button>
    
    </>
  )
}
