import React, { useState } from 'react'

export default function App() {

  let [age, setAge] = useState(20);


 const changeAge9a0 =>{
  setAge(a);
 }

  return (
    
    <>
    
    <h2>Hello my name is Hadeel</h2>
    <p></p>
    <button onClick={()=>getData("hadeel")}>Click</button>
    
    </>
  )
}
