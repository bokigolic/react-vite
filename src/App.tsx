import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Uncontrolled from './Forma'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Counter />
      <Uncontrolled />
    </>
  )
}

export default App
