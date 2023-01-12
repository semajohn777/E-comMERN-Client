import React from 'react'
import '../pagescss/singlePage.css'
import { useCart } from 'react-use-cart'
import AmountSegment from './AmountSegment'

const ProdCart = () => {
  const {
    isEmpty,
    items,
    updateItemQuantity,
    removeItem,
  } = useCart()

  
  if (isEmpty) return <h1>Your cart is empty</h1>

  return (
    <div>
      <div className="info-sect">
        <div className="info-div">
          {items.map((item) => (
            <div className="info-div_item">
              <img src={item.image} alt="" />

              <div className="amount-sect">
                <div className="price-sect">
                  <h2 className="naira">N</h2>
                  <h2>{item.price}</h2>
                </div>
                <div style={{display: "flex"}}>
                  <span
                    className="sign"
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity - 1)
                    }
                  >
                    -
                  </span>
                  <button>{item.quantity}</button>
                  <span
                    className="sign"
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity + 1)
                    }
                  >
                    +
                  </span>
                </div>
              </div>

              <p>
                <b>Product:</b> {item.title}
              </p>
              <p>
                <b>Id: </b>
                {item.id}.56784908
              </p>

              <p>
                <b>Size:</b> 34.4
              </p>
              <div>
                <h3 className="close" onClick={() => removeItem(item.id)}>
                  close
                </h3>
              </div>
            </div>
          ))}
        </div>
        
        <AmountSegment/>
      </div>
    </div>
  )
}

export default ProdCart
