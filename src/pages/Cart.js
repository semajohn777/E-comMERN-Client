import React from 'react'
import Footer from '../component/Footer/Footer'
import "../component/cart/cart.css"
import "../component/pagescss/singlePage.css"
import Crt from '../component/cart/Crt'
import { useNavigate, useParams } from 'react-router-dom'
import {popularProducts, DataProduct} from "../component/datas/Data"



const Cart = () => {
    const param = useParams();
    console.log(param);
    const singleProd = popularProducts.find((single) => single.id == param.id)
    const detailsLink = DataProduct.find((single) => single.id == param.id)

    const navigate = useNavigate()
    const navigatorHandler = () => {
        navigate(`/details`)
    }

  return (
      <div>
          <div className='cart-sect'>
              <h1>Your Cart </h1>
              
              <div className='cart_ctrl'>
                  <button onClick={navigatorHandler}>Continue Shopping</button>
                  <div className='items-details'>
                      <p>Items Purchased (2) </p>
                  <p>Items wish to Get</p>
                  </div>
                  <button onClick={()=> navigate("/")} >Cheak Out</button>
              </div>
              <Crt onCart={singleProd ? singleProd : detailsLink } />
          </div>
          <Footer/>
    </div>
  )
}

export default Cart