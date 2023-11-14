import styles from "./AddProduct.module.css"
import { FaShoppingCart} from "react-icons/fa";
import { IoMdCloseCircle } from 'react-icons/io';
import { useState,useEffect, useContext } from "react";
import AddToCartCounterButton from "./AddToCartCounterButton";
import CartContext from "../../context/cart-context";
import CartTotalCounter from "../cart/CartTotalCounter";
const AddProductButton=(props)=>{

    const ctx=useContext(CartContext)
    const [addedToCart,setAddedToCart]=useState(false)
    const [cartQuantity,setCartQuantity]=useState(0)
    const cartId=sessionStorage.getItem("cartId")
    useEffect(()=>{
        const getCartProducts=async()=>{
            const cart= await ctx.gettingCart(cartId) 
          
            const alreadyInCartIndex=cart.findIndex(cartItem=>{
                return cartItem.productTitle===props.productTitle
            })
            if(alreadyInCartIndex>=0){
                const cartProdQuantity=cart[alreadyInCartIndex].quantity
              
                setAddedToCart(true)
            setCartQuantity(cartProdQuantity)
            }
        }
        getCartProducts()

    },[])

    const removedFromCart=(e)=>{
        e.preventDefault()
        setAddedToCart(false)
        updatingTheCart(0)
        setCartQuantity(0)
        ctx.updateCartLength("minus")
    }
    const addedToCartHandler=(e)=>{
        e.preventDefault()
        setAddedToCart(true)
        updatingTheCart(1)
        setCartQuantity(1)
        ctx.updateCartLength("plus")
    }
const updatingTheCart=(productCounter)=>{
    const updatedTotalPrice = productCounter * props.productPrice;
    ctx.updatingTheCart(productCounter,props.productTitle,cartId,props.productPrice,props.productImage,updatedTotalPrice)
    if(props.changePrice){
    props.changePrice(productCounter,props.productTitle)
}
ctx.updateCartLength("same")
}
return <>
    {/* <div style={{opacity:0}}><CartTotalCounter/></div> */}
<div className={styles.container}>

   {props.available && !addedToCart && <button onClick={addedToCartHandler} className={styles.button}><FaShoppingCart className={styles.cartIcon}/> הוספה לסל </button>}
   {!props.available &&  !addedToCart && <button className={styles.notAvailable}> <IoMdCloseCircle className={styles.redIcon} /> אזל מהמלאי <IoMdCloseCircle className={styles.redIcon}  /></button>}
   {props.available && addedToCart && <AddToCartCounterButton cartQuantity={cartQuantity} cartUpdate={updatingTheCart} outOfCart={removedFromCart}/>}
</div>
</>
}
export default AddProductButton