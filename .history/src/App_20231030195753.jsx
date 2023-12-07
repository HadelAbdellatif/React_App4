import React, { useState } from 'react'

export default function App() {

  let [age, setAge] = useState

  const getData = (namee)=> {
    console.log(namee);
  }

  return (
    
    <>
    
    <button onClick={()=>getData("hadeel")}>Click</button>
    
    </>
  )
}
