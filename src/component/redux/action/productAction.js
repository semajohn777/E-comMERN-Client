 import { ActionTypes } from "../contant/action-types";

 export const setProducts =(Products)=>{
    return{
        type:ActionTypes.SET_PRODUCTS,
        payload:Products
    }
 }

 export const selectedProducts =(Product)=>{
    return{
        type:ActionTypes.SElECTED_PRODUCT,
        payload:Product,
    }
 }