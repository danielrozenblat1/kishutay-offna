import { FaShoppingCart } from "react-icons/fa"
import styles from "./ShoppingCartIcon.module.css"
import { useEffect,useState,useContext } from "react"
import CartContext from "../../context/cart-context"

const ShoppingCartIcon=(props)=>{
    const [cartLength,setCartLength]=useState([])
    const ctx=useContext(CartContext)
    const cartId=sessionStorage.getItem("cartId")
    const gettingCart=async()=>{
        const cart= await ctx.gettingCart(cartId) 
        setCartLength(cart.length)
    }
    useEffect(()=>{
       gettingCart()
    },[])
    return <div className={styles.iconContainer}> 
    <div className={styles.greenIcon}>{cartLength?cartLength:0 }</div>
</div>
}
export default ShoppingCartIcon