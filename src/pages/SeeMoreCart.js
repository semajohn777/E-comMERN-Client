import React from 'react'
import Footer from '../component/Footer/Footer'
import "../component/cart/cart.css"
import "../component/pagescss/singlePage.css"
import { useNavigate } from 'react-router-dom'
import ProdCart from '../component/cart/ProdCart'
import {useCart} from "react-use-cart"

const SeeMoreCart = () => {
    

    const navigate = useNavigate()
    const navigatorHandler = () => {
        navigate(`/details`)
    }

    const {
    
    totalItems,
  } = useCart();
  return (
      <div>
          <div className='cart-sect'>
              <h1>Your Cart </h1>
              
              <div className='cart_ctrl'>
                  <button onClick={navigatorHandler}>Continue Shopping</button>
                  <div className='items-details'>
                      <p>Items Purchased ({totalItems}) </p>
                  <p>Items wish to Get</p>
                  </div>
                  <button onClick={()=> navigate("/")} >Cheak Out</button>
              </div>
              <ProdCart />
          </div>
          <Footer/>
    </div>
  )
}

export default SeeMoreCart