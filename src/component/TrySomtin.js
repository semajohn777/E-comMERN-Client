import React from 'react'
import {Link} from "react-router-dom"
import { popularProducts } from "./Data"
import { FaSearch } from "react-icons/fa"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { FiHeart } from "react-icons/fi"
import "./pagescss/product.css"

const TrySomtin = (props) => {
  const item = props.propsMovement
  const displayFunc = props.onSetFilter

  const logingtoConsole = () => {
    console.log("add to cart");
  }
  // const showFilterItems = props.setItem
 
  // const menuItems = [...new Set(popularProducts.map((Val) => Val.category))];
  // console.log(menuItems);

  // const filterItem = (curcat) => {
  //   const newItem = popularProducts.filter((newVal) => {
  //     return newVal.category === curcat; 
  //       	// comparing category for displaying data
  //   });
  //   props.setItem(newItem);
  // };
  return (
    <div>
      <div className="">
        <>

        {props.onMenuItems.map((cat, id) => {
          return (
            <button
            className="array_btn"
            key={id}
            onClick={() => props.onSetFilterItem(cat)}
            
            >
              {cat}
            </button>
          );
        })}
        </>
        <button
          className="array_btn"
          onClick={() => props.onSetDisplay(popularProducts)}
        >
          All
        </button>
       </div>
      {/* <button onClick={()=>setDisplayFilter(popularProducts)}>all</button> */}
      
          {/* <button onClick={() => {displayFunc(item.category) }}>tyr</button> */}
          <div className='prod' >
                  <div className='product' key={item.id}>
                      <Link to={`/singlePage/${item.id}`}>
            <img src={item.img} alt="" />
                      </Link>
                </div>
                  <div className='prod-icons'>
                      <FaSearch  size={25} />
          <AiOutlineShoppingCart size={25} onClick={logingtoConsole} /> 
                      <FiHeart size={25} />
              </div>
              </div>
    </div>
  )
}

export default TrySomtin