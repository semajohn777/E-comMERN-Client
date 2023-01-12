import React, { useState } from 'react'
import TrySomtin from '../allProductList/TrySomtin'
import { DataProduct } from '../datas/Data'
import './product.css'
import {useCart} from "react-use-cart"

const PropularProds = () => {
  const [displayFilter, setDisplayFilter] = useState(DataProduct)
  const [showFilter, setShowFilter] = useState("all")
  const {addItem} = useCart()

  const filterMyArray = displayFilter.filter((array) => {
    if (showFilter === "men's clothing" ) {
      return array.category === "men's clothing"
    }
    else if (showFilter === "women's clothing" ) {
      return array.category === "women's clothing"
    }
    else if (showFilter === "jewelery" ) {
      return array.category === "jewelery"
    } 
    else if (showFilter === "electronics" ) {
      return array.category === "electronics"
    }
    else if (showFilter === "wear" ) {
      return array.category === "wear"
    }else {
      return array
    }
    
  })

 

  const catHandler = (e) => {
    console.log(e.target.value);
    setShowFilter(e.target.value)
  }

  return (
    <div>
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
          <option value="wear">Wears</option>
        </select>
      </div>
      <div className="prod-grid">
        {filterMyArray.map((item) => (
           <TrySomtin
            propsMovement={item}
            key={item.id}
            onSetDisplay={setDisplayFilter}
            onAddItem={addItem}
          />
        ))}
      </div>
    </div>
  )
}

export default PropularProds
