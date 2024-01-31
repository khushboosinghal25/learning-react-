// import { useState } from "react"
import './App.css'
import Card from "./components/Card"

export default function App() {
  // const [count , setCount] = useState(0)
  return (
    <>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <Card channel = "chaiaurcode"/>
    <Card/>
    </>
    
  )
}