import styles from "./CartTotalCounter.module.css"
import { useState,useContext,useEffect } from "react"
import CartContext from "../../context/cart-context"
const CartTotalCounter=(props)=>{

const ctx=useContext(CartContext)
const [cartCounter,setCartCounter]=useState(0)
const cartId=sessionStorage.getItem("cartId")

const updatingCartCounter=async()=>{
    const cartLength =await ctx.gettingCart(cartId)
    setCartCounter(cartLength.length)
    
    }

    updatingCartCounter()



return <>
<div>{cartCounter}</div>
</>
}
export default CartTotalCounter