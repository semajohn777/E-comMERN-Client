import React, {useState} from 'react'
import "./cart.css"
import img from "../images/gallery-1.jpg"
import "../pagescss/singlePage.css"

const Crt = (props) => {
  const cartDynamic = props.onCart
  console.log(cartDynamic);
  const [count, setCount] = useState(1)
  
  const num = 2000

  const increase = () => {
    if (count === 10) {
      return
    }
    setCount((prevCount) => prevCount + 1)
  }

  const decrease = () => {
    if (count === 1) {
      return
    }
    setCount((prevCount) => prevCount - 1)
  }

  const subTotal = count * cartDynamic.price + num
  const ExtimatedShiping = count * cartDynamic.price / 5

  let randomNUmber = Math.ceil(Math.random(2.4) * 50)
console.log(randomNUmber);

  return (
      <div>
          <div className='info-sect'>
                  <div className='info-div'>
                    <div className='info-div_item'>
                    <div className='img-and-amount'>
                        <img src={cartDynamic.img} alt="" />
                        <div className='amount-sect'>
                          <div>
                                <span className='sign' onClick={decrease}>-</span>
                                <button>{ count }</button>
                            <span className='sign' onClick={increase}>+</span>
                              </div>
                              <div className='price-sect'>
                                <h2 className="naira">N</h2>
                                <h2>{count * cartDynamic.price }</h2>
                            </div>
                        </div>
                              
                      </div>
                      <p><b>Product:</b> {cartDynamic.name}</p>
                      <p><b>Id: </b>{cartDynamic.id}.56784908</p>
                     <div className='round red'></div>
                      <p><b>Size:</b> 34.4</p>
                      </div>

                  <div className='info-div_item'>
                    <div className='img-and-amount'>
                        <img src={img} alt="" />
                      <div className='amount-sect'>
                          <div>
                                <span className='sign'>-</span>
                          <button>1</button>
                            <span className='sign'>+</span>
                              </div>
                              <div className='price-sect'>
                                <h2 className="naira">N</h2>
                                <h2> 2,000</h2>
                            </div>
                        </div>
                      </div>
                      <div>
                          <div>
                           <p><b>Product:</b> Loven clothing Shirt</p>
                            <p><b>Id:</b> 987653421</p>
                           <div className='round brown'></div>
                            {/* <p><b>color:</b></p> */}
                            <p><b>Size:</b> 37.4</p>
                          </div>
                      </div>
                      
                      </div>

                      
                     
                 </div>
              <div className='money-info'>
                  <h2>Order Summary</h2>
                  <div className='money-segment'><p>Sub-total</p>
                      <div className='price-sect'>
                                <h5 className="naira">N</h5>
                                <h5>{subTotal}.00 </h5>
                            </div></div>
                  <div className='money-segment'><p>Estimated Shipping</p>
                      <div className='price-sect'>
                                <h5 className="naira">N</h5>
                                <h5> { ExtimatedShiping}.00</h5>
                            </div></div>
                  <div className='money-segment'><p>Shipping Discount</p>
                      <div className='price-sect'>
                                <h5 className="naira">N</h5>
                                <h5> { randomNUmber }.00</h5>
                            </div></div>
                  <div className='money-segment total' ><h5 >Total</h5>
                      <div className='price-sect'>
                                <h5 className="naira">N</h5>
                                <h5> { subTotal + ExtimatedShiping - randomNUmber }.00</h5>
                            </div></div>
                  </div>
              </div>
    </div>
  )
}

export default Crt