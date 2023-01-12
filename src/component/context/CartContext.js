
import React, { createContext, useState, useReducer } from 'react'

const initialState = {count: 0, arr:[]}
export const CartContext = createContext()
const reducer = (state, action) => {
    console.log(state);
    switch (action.type) {
        case "INCREASE_NUMBER":
           return {count: state.count + 1}
        case "ADD":
            const controlAddToCart = state.filter((item) => action.payload.id === item.id)
            if (controlAddToCart.length > 0 ) {
                return state;  
            } else {
                // return [{arr:[State]}, action.payload] 
                return [ ...state, action.payload ] 
        }
      // case "INCREASE":
      //   const IncreaseCount = state.map((item) => {
      //     if ( action.payload.id === item.id) {
      //       console.log(true);
      //       return { ...item, quantit: item.quantity + 1 }
      //       } else {
      //         return item
      //       }
          
      //   });
      //   return IncreaseCount;
    
        default:
          return state
    }
}

const CartContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, [])
  console.log(state);
  const [tryingContext, setTryingContext] = useState(1)

  const tryingContextHandler = (item) => {
      setTryingContext((prevCount) => prevCount + 1)
      // dispatch({type: "ADD",  payload: item})
      
  }
  const cartContext = {
    state,
    tryingContext,
    setTryingContext,
    dispatch,
    tryingContextHandler
  }
  return (
    <CartContext.Provider value={ cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
