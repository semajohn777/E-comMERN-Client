import React from 'react'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { FiHeart } from 'react-icons/fi'
import '../pagescss/product.css'

const TrySomtin = (props) => {
  const item = props.propsMovement
  const logingtoConsole = () => {
     props.onAddItem(item)
    alert('add to cart')
  }
 
  return (
    <div>
      <div className="prod">
        <div className="product" key={item.id}>
          <Link to={`/singlepg/${item.id}`}>
            <img src={item.image} alt="" />
          </Link>
        </div>
        <div className="prod-icons">
          <FaSearch size={25} />
          <AiOutlineShoppingCart size={25} onClick={logingtoConsole} />
          <FiHeart size={25} />
        </div>
      </div>
    </div>
  )
}

export default TrySomtin
