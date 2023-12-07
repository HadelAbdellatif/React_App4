import React from 'react'

export default function App() {

  let [age, setAge]

  const getData = (namee)=> {
    console.log(namee);
  }

  return (
    
    <>
    
    <button onClick={()=>getData("hadeel")}>Click</button>
    
    </>
  )
}
