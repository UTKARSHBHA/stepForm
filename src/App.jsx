import { useState } from 'react'
import './App.css'
import MultiStepForm from './components/MultiStepForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MultiStepForm/>
    </>
  )
}

export default App
