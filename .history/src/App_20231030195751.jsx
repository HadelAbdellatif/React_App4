import React from 'react'

export default function App() {

  let [age, setAge] = useS

  const getData = (namee)=> {
    console.log(namee);
  }

  return (
    
    <>
    
    <button onClick={()=>getData("hadeel")}>Click</button>
    
    </>
  )
}
