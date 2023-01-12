import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined'
import Badge from '@mui/material/Badge'
import './navbar.css'
import { useCart } from 'react-use-cart'
import { Link } from 'react-router-dom'


const Navbar = () => {
  const { totalUniqueItems } = useCart()
  // if (totalUniqueItems > 0) {
  //   return totalUniqueItems
  // } else {
  //   return  0
  // }
  return (
    <div className="nav_div">
      <nav>
        <div>
          <h1>
            <Link to={'/'}>
              Se<span>ma</span> <span className="shop">Shop</span>
            </Link>
          </h1>
        </div>
        <div className="fieldset">
          <input type="text" id="search" placeholder="Search..." />
          <label htmlFor="search">
            <AiOutlineSearch size={30} />
          </label>
        </div>
        <div>
          <ul className="ul">
            <li className="li">
              <Link to={'/register'}>Register</Link>
            </li>

            <Link  to={'/prodcart'}>
              <Badge badgeContent={totalUniqueItems.length === 0 ? "njhnoilji" : totalUniqueItems} color="secondary">
                <AddShoppingCartOutlinedIcon color="action" />
              </Badge>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
