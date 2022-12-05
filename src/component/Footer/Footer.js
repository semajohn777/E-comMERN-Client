import React from 'react'
import { BsTelephone } from "react-icons/bs"
import { HiOutlineMail } from "react-icons/hi"
import {FaAddressBook} from "react-icons/fa"
import "./footer.css"

const Footer = () => {
  return (
      <div id='footer'>
          <footer>
          <div>
              <h1>Se<span>ma</span> <span className='shop'>Shop</span></h1>
              <p>Sema Stores is the leading E-commerce shop online for you and your family for a change and better apperance.</p>
                <p>Pick the best of the best item.</p>

          </div>
          
              <div>
            <h2 className='footer_title'>Links</h2>
            <ul className='Footer_items'>
              <li><a className='footer__item' href="">Home</a></li>
              <li><a className='footer__item' href="">Men Fashion</a></li>
              <li><a className='footer__item' href="">Accessories</a></li>
              <li><a className='footer__item' href="">Order Tracking</a></li>
              <li><a className='footer__item' href="">Cart</a></li>
              <li><a className='footer__item' href="">Women Fashion</a></li>
              <li><a className='footer__item' href="">My Account</a></li>
              <li><a className='footer__item' href="">Children Wears</a></li>
              <li><a className='footer__item' href="">Terms</a></li>
          </ul>
          </div>
          
          <div>
              <h2>Contact</h2>
              <p><FaAddressBook/> No. 13 Shomolu Street, mainland Lagos State. Nigeria</p>
              <p><BsTelephone/> +234 7035 295 095</p>
              <p><HiOutlineMail></HiOutlineMail> johnagbudumhe12@gmail.com</p>
              <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt="" />
          </div>
    </footer>
      </div>
  )
}

export default Footer