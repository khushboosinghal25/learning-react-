import { useState , useCallback , useRef , useEffect } from 'react'
// useEffect , useRef , useCallback
// import './App.css'

function App() {
  const [length , setLength] = useState(8);
  const [charAllowed , setcharAllowed] = useState(false);
  const [numberAllowed , setnumberAllowed] = useState(false);
  const [password,setPassword] = useState("");
  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="!@#$%^&*(){}'[];,.<>?/~`";
    for(int i=0;i<length;i++)
    {
      let char = Math.random() * str.length()
    }
  })
  
  

  return (
    <>
    <div className='w-400 , h-100 bg-slate-700'>
      <h1 className='text-center text-4xl text-yellow-400 m-4 p-4'>Password Generator</h1>

    </div>
    </>
  )
}

export default App
