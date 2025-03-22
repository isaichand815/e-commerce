import { useState } from 'react'
import './App.css'
import BuyerRegistration from './buyer/buyerRegistration'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BuyerRegistration></BuyerRegistration>
    </>
  )
}

export default App
