import React, { useState } from 'react'
import { popularProducts } from "../datas/Data"
import "./product.css"
import TrySomtin from '../allProductList/TrySomtin'
import Specific from '../Specific'



const Propularprod = (props) => {
    const { onCatLocation, onCat, onSize } = props;
    console.log(onCatLocation, onCat, onSize);
    const [displayFilter, setDisplayFilter] = useState(popularProducts)
    const [showFilter, setShowFilter] = useState("all")

  
  //   const menuItems = [...new Set(popularProducts.map((Val) => Val.category))];
  // console.log(menuItems);

  // const filterItem = (curcat) => {
  //   const newItem = popularProducts.filter((newVal) => {
  //     return newVal.category === curcat; 
  //       	// comparing category for displaying data
  //   });
  //   setDisplayFilter(newItem);
  // };
  console.log(displayFilter);
  
  const filterMyArray = displayFilter.filter((array) => {
    if (array.category === showFilter ) {
      return
    } else {
      return array
    }
  })
  
  const filterCat = (catArguement) => {
    setShowFilter(catArguement);
  }

    
  return (
    <div>
      <Specific onFilterCat={filterCat} onShowFilter={showFilter } />
      <div className='prod-grid'>
          
          {filterMyArray.map((item) => (
              
            <TrySomtin propsMovement={item} 
              key={item.id}
              // onMenuItems={menuItems}
              // onSetFilterItem={filterItem}
              onSetDisplay={setDisplayFilter}
              onFilterCat={filterCat}
              />
            
          ))} 
   
    </div>
    </div>
  )
}

export default Propularprod