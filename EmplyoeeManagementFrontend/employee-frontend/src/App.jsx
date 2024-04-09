import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Hello from './components/Hello'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Header></Header> */}
      <Hello/>
    </>
  )
}

export default App
