import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { DataProduct } from '../component/datas/Data'
import Footer from '../component/Footer/Footer'
import { useCart } from "react-use-cart";


const SeeMoreSinglePg = () => {
  const {addItem} = useCart()
  const params = useParams()
  const singleProd = DataProduct.find((single) => single.id == params.id)
  const logingtoConsole = () => {
     addItem(singleProd)
    alert('add to cart')
  }
 
  const [count, setCount] = useState(1)

  const increase = () => {
    if (count === 10) {
      return
    }
    setCount((prevCount) => prevCount + 1)
  }

  const decrease = () => {
    if (count === 0) {
      return
    }
    setCount((prevCount) => prevCount - 1)
  }

  return (
    <div>
      <div className="sign-flex">
        <div className="control_div">
          <button className="sign" onClick={decrease}>
            --
          </button>
          <h1>{count}</h1>
          <button className="sign" onClick={increase}>
            +
          </button>
        </div>
          <button
            onClick={() => logingtoConsole()}
          >
            Add to Cart
          </button>
       
       
      </div>
      <div className="single-page_div">
        <div className="jeans_div">
          <img src={singleProd.image} alt="" />
        </div>
        <div className="single-page_text">
          <h2>{singleProd.title}</h2>
          <p>{singleProd.description}</p>
          <div className="price-sect">
            <h2 className="naira">N</h2>
            <h2> {count * singleProd.price * 700}</h2>
          </div>
          <div>
            <p>
              <b>Colors</b>
            </p>
            <div className="round-color_flex">
              <div className="round blue"></div>
              <div className="round red"></div>
              <div className="round brown"></div>
            </div>
            <div className="single-page_seltect-option">
              <p>Size </p>
              <select name="" id="">
                <option value="" disabled selected>
                  select
                </option>
                <option value="">XS</option>
                <option value="">M</option>
                <option value="">L</option>
                <option value="">Xl</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default SeeMoreSinglePg
