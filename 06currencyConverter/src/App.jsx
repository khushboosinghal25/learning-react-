import { useState } from 'react'
import './App.css'
import InputBox from './components/InputBox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <InputBox/>
      <h1 className='text-3xl bg-blue-700'>Currency Convertor</h1>
    </>
  )
}

export default App
