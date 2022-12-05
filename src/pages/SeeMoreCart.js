import React from 'react'
import Footer from '../component/Footer/Footer'
import "../component/cart/cart.css"
import "../component/pagescss/singlePage.css"
import { useNavigate, useParams } from 'react-router-dom'
import { DataProduct} from "../component/datas/Data"
import ProdCart from '../component/cart/ProdCart'

const SeeMoreCart = () => {
     const param = useParams();
    console.log(param);
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
              <ProdCart onDetailsLink={ detailsLink } />
          </div>
          <Footer/>
    </div>
  )
}

export default SeeMoreCart