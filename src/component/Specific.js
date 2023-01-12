import React from 'react'
import { FiArrowRightCircle } from 'react-icons/fi'
import {  useNavigate } from 'react-router-dom'

const Specific = (props) => {
  const catHandler = (e) => {
    props.onFilterCat(e.target.value)
  }
     const navigate = useNavigate()
    const navigatorHandler = () => {
        navigate(`/details`)
    }
  return (
    <div style={{marginBottom: "1em"}}>
      <div className="space">
        <div className="filter_flex">
          <h4>Filter categories</h4>
        <select  onChange={catHandler}>
          <option value="all">All Products</option>
          <option className="categories_opt" value="men's clothing">
            men's clothing
          </option>
          <option value="women's clothing">Women</option>
          <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
            <option value="wear">Wear</option>
        </select>
        </div>
        
         <button className='seeMore' onClick={navigatorHandler}>
          See more <FiArrowRightCircle />
          </button>
        
      </div>
    </div>
  )
}

export default Specific
