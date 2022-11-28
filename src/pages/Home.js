import React from 'react'
import NewLetter from '../component/newPages/NewLetter'
import Propularprod from '../component/PopularProduct.js/Propularprod'
import Swipe from '../component/Swiper/Swipe'
import Footer from "../component/Footer/Footer"

const Home = () => {
  return (
      <div>
          <Swipe />
          <Propularprod />
      <NewLetter />
      <Footer/>
    </div>
  )
}

export default Home