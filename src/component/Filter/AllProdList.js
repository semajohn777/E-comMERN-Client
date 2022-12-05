import React from 'react'

const AllProdList = (props) => {
   const catHandler = (e) => {
    console.log(e.target.value);
    props.onFilterCat(e.target.value)
  }
  return (
      <div>
          <div className="filter_flex">
        <h4>Filter categories</h4>
        <select value={props.onShowFilter} onChange={catHandler}>
          <option value="All">All Products</option>
          <option className="categories_opt" value="men's clothing">
            men's clothing
          </option>
          <option value="women's clothing">Women</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
          {/* <option>Bags</option> */}
        </select>

        <select name="size" onChange={catHandler} id="">
          <option disabled selected>
            size
          </option>
          <option>XS</option>
          <option>M</option>
          <option>L</option>
          <option>Xl</option>
        </select>
      </div>
    </div>
  )
}

export default AllProdList