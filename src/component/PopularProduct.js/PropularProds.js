import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { FiHeart } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { DataProduct } from '../datas/Data'
import './product.css'

const PropularProds = () => {
  const [displayFilter, setDisplayFilter] = useState(DataProduct)
  const [showFilter, setShowFilter] = useState("men's clothing")

  const filterMyArray = displayFilter.filter((array) => {
    // if (array.category === showFilter ) {
    //   return
    // } else {
    //   return array
    // }
     return array.category === showFilter
  })

  const catHandler = (e) => {
    console.log(e.target.value);
    setShowFilter(e.target.value)
  }

  return (
    <div>
      <div className="filter_flex">
        <h4>Filter categories</h4>
        <select value={showFilter} onChange={catHandler}>
          {/* <option value="All">All Products</option> */}
          <option className="categories_opt" value="men's clothing">
            men's clothing
          </option>
          <option value="women's clothing">Women</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
          {/* <option>Bags</option> */}
        </select>

        <select name="size" onChange={catHandler} id="">
          <option disabled>
            size
          </option>
          <option>XS</option>
          <option>M</option>
          <option>L</option>
          <option>Xl</option>
        </select>
      </div>
      <div className="prod-grid">
        {filterMyArray.map((item) => (
          <div className="prod" key={item.id}>
            <div className="product" >
              <Link to={`/singlepg/${item.id}`}>
                <img src={item.image} alt="" />
              </Link>
            </div>
            <div className="prod-icons">
              <FaSearch size={25} />
              <AiOutlineShoppingCart size={25} />
              <FiHeart size={25} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PropularProds
