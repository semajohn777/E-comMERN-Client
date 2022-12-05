import React from 'react'
import { FiArrowRightCircle } from 'react-icons/fi'
import {  useNavigate } from 'react-router-dom'

const Specific = (props) => {
  const catHandler = (e) => {
    props.onFilterCat(e.target.value)
  }
     const navigate = useNavigate()
    const navigatorHandler = () => {
        navigate(`/details`)
    }
  return (
    <div style={{marginBottom: "1em"}}>
      <div className="space">
        <div className="filter_flex">
          <h4>Filter categories</h4>
          <select
            name="sex"
            id=""
            value={props.onShowFilter}
            onChange={catHandler}
          >
            <option value="all">All</option>
            <option className="categories_opt" value="men">
              Fashion
            </option>
            <option value="Fashion">Men</option>
          </select>

          {/* <select name="size"  onChange={catHandler} id="">
          <option disabled selected>
            size
          </option>
          <option>XS</option>
          <option>M</option>
          <option>L</option>
          <option>Xl</option>
        </select> */}
        </div>
        
         <button onClick={navigatorHandler}>
          See more <FiArrowRightCircle />
          </button>
        
      </div>
      {/* <hr style={{marginBottom: "1em"}} /> */}
    </div>
  )
}

export default Specific
