import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import ProductDetail from './pages/ProductDetail'
import Register from './pages/Register'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './component/navbar/Navbar'
import Specific from './component/Specific'
import CartContextProvider from './component/context/CartContext'
import SeeMoreCart from './pages/SeeMoreCart'
import SeeMoreSinglePg from './pages/SeeMoreSinglePg'
import { CartProvider } from "react-use-cart";

function App() {
  return (
    <div className="Ap">
      <BrowserRouter>
        <CartProvider>

        <CartContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/details" element={<ProductDetail />} />
            <Route path="/singlepg/:id" element={<SeeMoreSinglePg />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cartdetails/:id" element={<SeeMoreCart />} />
            <Route path="/prodcart" element={<SeeMoreCart />} />
          </Routes>
        </CartContextProvider>
        </CartProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
