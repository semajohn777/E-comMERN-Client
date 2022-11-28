import React, { useState } from 'react'
import Footer from '../component/Footer/Footer'
import Propularprod from '../component/PopularProduct.js/Propularprod'
import "../component/pagescss/product.css"
import NewLetter from '../component/newPages/NewLetter'
import { useLocation } from 'react-router-dom'

const ProductDetail = () => {
  const location = useLocation();
  const catLocation = location.pathname.split("/")[2];
  console.log(catLocation);
  const [size, setSize] = useState({})
  const [cat, setCat] = useState({})

  const obj = {
    size,
    cat,
  }
  console.log(obj);

  const sizeHandler = (e) => {
    setCat(e.target.value)
  }

  const catHandler = (e) => {
    setSize(e.target.value)
  }
  
  // console.log(valuesToFilter);
  // const filterHandeler = (e) => {
  //   const valuesToFilter = e.target.value;
  //   setSizeFilter({
  //     [e.target.name]: valuesToFilter
  //   })
   
  //   // setSizeFilter({
  //   //   [e.target.name]: valuesToFilter
  //   // })
  //   console.log(sizeFilter);
    
  // }


  
 

  return (
      <div>
          <h1 className='prod_text'>Dresses</h1>
          <div className='filter_flex'>
              <h4>Filter categories</h4>
              <select name="sex" id="" value={cat} onChange={sizeHandler} >  
                <option value="" disabled>Categories</option>
              <option className='categories_opt' value="">men</option>
              <option >Women</option>
              <option >Children</option>
              <option >Shoes</option>
              <option >Bags</option>
              </select>
              
              <select name="size" value={size} onChange={catHandler} id="">
              <option disabled selected>size</option>
              <option>XS</option>
              <option>M</option>
              <option>L</option>
              <option>Xl</option>
        </select>
        
      </div>
      <Propularprod onCatLocation={catLocation} onCat={cat} onSize={size } />
          <NewLetter/>
          <Footer/>
    </div>
  )
}

export default ProductDetail