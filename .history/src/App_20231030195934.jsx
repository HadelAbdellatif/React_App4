import React, { useState } from 'react'

export default function App() {

  let [age, setAge] = useState(20);


 const changeAge =>{
  setAge(a);
 }

  return (
    
    <>
    
    <h2>Hello my name is Hadeel</h2>
    <p>My Age is {age}</p>
    <button onClick={()=>changeAge("10")}>Click</button>
    
    </>
  )
}
