import React, { useEffect, useState } from 'react'
import { popularProducts } from "../Data"
import "./product.css"
import TrySomtin from '../TrySomtin'


const Propularprod = (props) => {
    const { onCatLocation, onCat, onSize } = props;
    console.log(onCatLocation, onCat, onSize);
      const [displayFilter, setDisplayFilter] = useState(popularProducts)
  //   const displayFunc = (cat) => {
  //      const tryingFilter = popularProducts.filter(x => x.category === cat)
  //      setDisplayFilter(tryingFilter);
  // }
  
    const menuItems = [...new Set(popularProducts.map((Val) => Val.category))];
  console.log(menuItems);

  const filterItem = (curcat) => {
    const newItem = popularProducts.filter((newVal) => {
      return newVal.category === curcat; 
        	// comparing category for displaying data
    });
    setDisplayFilter(newItem);
  };
    console.log(displayFilter);
    useEffect(()=> {
    // onCatLocation
   },[])

    
  return (
      <div className='prod-grid'>
          
        
          {displayFilter.map((item) => (
              
            <TrySomtin propsMovement={item}
              onMenuItems={menuItems}
              onSetFilterItem={filterItem}
              onSetDisplay={ setDisplayFilter} />
         ))} 
    </div>
  )
}

export default Propularprod