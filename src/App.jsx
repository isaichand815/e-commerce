import { useState } from 'react'
import './App.css'
import BuyerRegistration from './buyer/buyerRegistration'
import SellerRegistration from './seller/sellerRegistration'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Login } from './login/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path='/login' element={<Login/>}/>
          <Route path="/buyer-registration" element={<BuyerRegistration />} />
          <Route path="/seller-registration" element={<SellerRegistration />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
