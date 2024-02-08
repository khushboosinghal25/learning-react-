import { useState , useCallback , useRef , useEffect } from 'react'
// useEffect , useRef , useCallback
// import './App.css'

function App() {
  const [length , setLength] = useState(8);
  const [char , setchar] = useState(false);
  const [num , setnum] = useState(false);
  const [Password,setPassword] = useState("");
  const passwordGenerator = useCallback(fn , [length , num , char , setPassword])

  

  return (
    <>
    <div className='w-400 , h-100 bg-slate-700'>
      <h1 className='text-center text-4xl text-yellow-400 m-4 p-4'>Password Generator</h1>

    </div>
    </>
  )
}

export default App
