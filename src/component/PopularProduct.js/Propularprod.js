import React, { useState } from 'react'
import { DataProduct } from '../datas/Data'
import './product.css'
import TrySomtin from '../allProductList/TrySomtin'
import Specific from '../Specific'
import {useCart} from "react-use-cart"

const Propularprod = (props) => {
  const [displayFilter, setDisplayFilter] = useState(DataProduct)
  const [showFilter, setShowFilter] = useState('all')
  const {addItem} = useCart()

  const filterMyArray = displayFilter.filter((array) => {
    return array.id <= 8
  })

  const filterMyArrayData = filterMyArray.filter((array) => {
    if (showFilter === "men's clothing") {
      return array.category === "men's clothing"
    } else if (showFilter === "women's clothing") {
      return array.category === "women's clothing"
    } else if (showFilter === 'jewelery') {
      return array.category === 'jewelery'
    } else if (showFilter === 'electronics') {
      return array.category === 'electronics'
    } else if (showFilter === 'wear') {
      return array.category === 'wear'
    } else {
      return array
    }
  })

  const filterCat = (catArguement) => {
    setShowFilter(catArguement)
  }

  return (
    <div>
      <Specific onFilterCat={filterCat} onShowFilter={showFilter} />
      <div className="prod-grid">
        {filterMyArrayData.map((item) => (
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

export default Propularprod
