// import './App.css'
import { useState } from 'react'
// import React from 'react'
function App() {
  const [color , setColor] = useState("red")

  return (
      <div style={{backgroundColor:color}} className="fixed  flex-wrap  justify-center bottom-0 inset-x-0 px-2 h-screen ">
        <div className="flex flex-wrap justify-center gap-4 shadow-lg bg-white px-2 py-2 bottom-2 rounded-2xl">
          <button className="outline-none px-4 justify-center py-1 rounded-full text-white"
          style={{backgroundColor:"red"}}>Red</button>
          <button className="outline-none px-4 justify-center py-1 rounded-full text-white"
          style={{backgroundColor:"BlUE"}}>Blue</button>
          <button onClick={()=>setColor("Yellow")} className="outline-none px-4 justify-center py-1 rounded-full text-white"
          style={{backgroundColor:"Yellow"}}>Yellow</button>
          <button className="outline-none px-4 justify-center py-1 rounded-full text-white"
          style={{backgroundColor:"Green"}}>Green</button>
          <button className="outline-none px-4 justify-center py-1 rounded-full text-white"
          style={{backgroundColor:"red"}}>Red</button>
          <button className="outline-none px-4 justify-center py-1 rounded-full text-white"
          style={{backgroundColor:"red"}}>Red</button>
          <button className="outline-none px-4 justify-center py-1 rounded-full text-white"
          style={{backgroundColor:"red"}}>Red</button>
          <button className="outline-none px-4 justify-center py-1 rounded-full text-white"
          style={{backgroundColor:"red"}}>Red</button>
       </div>
      </div>
  )
}

export default App
