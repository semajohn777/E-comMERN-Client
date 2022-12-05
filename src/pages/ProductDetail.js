import React from 'react'
import Footer from '../component/Footer/Footer'
import Propularprod from '../component/PopularProduct.js/Propularprod'
import '../component/pagescss/product.css'
import NewLetter from '../component/newPages/NewLetter'
import { useLocation } from 'react-router-dom'
import PropularProds from '../component/PopularProduct.js/PropularProds'


const ProductDetail = () => {
  const location = useLocation()
  const catLocation = location.pathname.split('/')[2]
  console.log(catLocation)
  // const [size, setSize] = useState({})
  // const [cat, setCat] = useState({})

  // const obj = {
  //   size,
  //   cat,
  // }
  // console.log(obj)
 

  return (
    <div>
      <h1 className="prod_text">Dresses</h1>
     
      {/* <Propularprod onCatLocation={catLocation} onCat={cat} onSize={size} /> */}
      <PropularProds />
      <NewLetter />
      <Footer />
    </div>
  )
}

export default ProductDetail
