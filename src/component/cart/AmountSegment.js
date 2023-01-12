import React from 'react'
import { useCart } from "react-use-cart"
import "./cart.css"

const AmountSegment = () => {
    const { cartTotal,
  } = useCart()
  const totalCart = cartTotal.toFixed(2)
    const shippingTotal = cartTotal + Math.floor(Math.random() * 5);
    const ExtimatedShiping = Math.random().toFixed(2) * 10;
    const total = cartTotal + shippingTotal - ExtimatedShiping
    
  return (
      <div className="money-info">
        <h2>Order Summary</h2>
        <div className="money-segment">
          <p>Sub-total</p>
          <div className="price-sect">
            <h5 className="naira">N</h5>
            <h5>{totalCart}</h5>
          </div>
        </div>
        <div className="money-segment">
          <p>Estimated Shipping</p>
          <div className="price-sect">
            <h5 className="naira">N</h5>
            <h5>{shippingTotal}</h5>
          </div>
        </div>
        <div className="money-segment">
          <p>Shipping Discount</p>
          <div className="price-sect">
            <h5 className="naira">N</h5>
            <h5>{ExtimatedShiping}</h5>
          </div>
        </div>
        <div className="money-segment total">
          <h5>Total</h5>
          <div className="price-sect">
            <h5 className="naira">N</h5>
            <h5>{total.toFixed(2)}</h5>
          </div>
        </div>
      </div>
  )
}

export default AmountSegment
