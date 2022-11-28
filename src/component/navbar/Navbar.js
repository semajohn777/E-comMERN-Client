import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined'
import Badge from '@mui/material/Badge'
import './navbar.css'
import { Navigate, Link } from 'react-router-dom'

const Navbar = () => {
  const [showNavLink, setShowNavLink] = useState(true)

  const handleLogoutNavLink = () => {
    setShowNavLink(true)
  }

  const handleDispaly = () => {
    setShowNavLink(false)
  }
  return (
    <div className="nav_div">
      <nav>
        <div>
          <h1>
            <Link to={'/'}>
              Se<span>ma</span>
            </Link>
          </h1>
        </div>
        <div className="fieldset">
          <input type="text" id='search' placeholder="Search..." />
          <label htmlFor="search"><AiOutlineSearch size={30} /></label>
        </div>
        <div>
          <ul className="ul">
            {!showNavLink && (
              <Link onClick={handleLogoutNavLink} to={"/"}>
              <li>
                 Log out
                </li>
              </Link>
            )}
            {showNavLink && (
              <li className="li">
                <Link to={'/register'}>
                  Register
                </Link>
              </li>
            )}
            {showNavLink && (
              <li>
                <Link onClick={handleDispaly} to={'/'}>
                  Login
                </Link>
              </li>
            )}
            {!showNavLink && (
              <Link onClick={handleLogoutNavLink} to={"/"}>
                <Badge badgeContent={4} color="secondary">
                  <AddShoppingCartOutlinedIcon color="action" />
                </Badge>
              </Link>
            )}
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
