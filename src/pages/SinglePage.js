import React, { useState } from 'react'
import Footer from '../component/Footer/Footer'
//import jeans from "../component/images/Jeans-PNG-Image.png"
import '../component/pagescss/singlePage.css'
import { useParams, Link } from 'react-router-dom'
import { popularProducts } from '../component/Data'

const SinglePage = () => {
  const params = useParams()
  const singleProd = popularProducts.find((single) => single.id == params.id)
  const [count, setCount] = useState(1)
  // const [addToCart, setAddToCart] = useState(0)

  const increase = () => {
    if (count === 10) {
      return
    }
    setCount((prevCount) => prevCount + 1)
  }

  //   const increasingAddToCart = () => {
  //     // if (count === 10) {
  //     //     return
  //     // }
  //     setCount(prevCount => prevCount + 1)
  // }

  const decrease = () => {
    if (count === 0) {
      return
    }
    setCount((prevCount) => prevCount - 1)
  }

  // const num = +singleProd.name
  // console.log(typeof num);

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

        <Link to={`/cart/${singleProd.id}`}>
          <button>Add to Cart</button>
        </Link>
      </div>
      <div className="single-page_div">
        <div className="jeans_div">
          <img src={singleProd.img} alt="" />
        </div>
        <div className="single-page_text">
          <h2>{singleProd.name}</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit natus
            accusamus culpa nemo iusto. Accusantium dolorem fugit quam quisquam
            perferendis ex ipsa molestias facilis. Asperiores explicabo mollitia
            cupiditate cumque labore!
          </p>
          <div className="price-sect">
            <h2 className="naira">N</h2>
            <h2> {count * singleProd.price}</h2>
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

export default SinglePage
