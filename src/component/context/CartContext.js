import React, { createContext, useState } from 'react'

export const CartContext = createContext()


const CartContextProvider = (props) => {
    const [tryingContext, setTryingContext] = useState(1)
    
    const tryingContextHandler = () => {
        setTryingContext((prevCount)=> prevCount + 1)
    }
    return ( 
        <CartContext.Provider value={{tryingContext, tryingContextHandler}}>
            {props.children}
        </CartContext.Provider>
     );
}
 
export default CartContextProvider;