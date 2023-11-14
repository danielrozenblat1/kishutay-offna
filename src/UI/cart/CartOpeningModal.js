import styles from "./CartOpeningModal.module.css"
import { useContext,useState,useEffect } from "react"
import CartContext from "../../context/cart-context"
import { NavLink } from "react-router-dom"
const CartOpeningModal=(props)=>{
    const cartId=sessionStorage.getItem("cartId")
    const ctx=useContext(CartContext)

    const [cartProducts,setCartProducts]=useState([])
    const [totals,setTotals]=useState({price:0,meters:0})
    useEffect(()=>{
        const getCartProducts=async()=>{
            const cart= await ctx.gettingCart(cartId)
      
            setCartProducts(cart)
            const updatedTotals = ctx.calculateTotals(cart); // Calculate totals after cart products are updated
            setTotals(updatedTotals);
         }
          getCartProducts()
    
    },[ctx.cartLength])
    console.log(cartProducts)
return <>
 <div className={`${styles.cartContainer} ${ctx.cartModalOpen ? "open" : ""}`}>
<div className={styles.cartHeader}>עגלת הקניות שלך </div>
<div className={styles.cartProducts}>
    {cartProducts.map(product=>{
    return <div className={styles.row}><div className={styles.productTitle}>{product.productTitle}</div>
     
    <img className={styles.productImage} src={product.imageUrl.substring(0, 4) === "http" ?product.imageUrl : `http://localhost:8000/images/${product.imageUrl}`} alt={product.productTitle} />
    <div className={styles.quantity}>{product.quantity} מטרים  </div>
    
    <div className={styles.quantity}>{product.totalPrice}₪</div>

    </div>
 
})}
    <div className={styles.total}>{totals.price}₪ סה''כ עד כה </div>
</div>

<NavLink to="/cart" style={{textDecoration:"none"}}><button  className={styles.button} onClick={ctx.closeCartModal}>המשך לקופה</button></NavLink>
<br/>
<button  className={styles.button} onClick={ctx.closeCartModal}>סגור והמשך בקנייה</button>
</div>

</>
}
export default CartOpeningModal