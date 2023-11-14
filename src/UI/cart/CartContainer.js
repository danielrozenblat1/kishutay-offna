import styles from "./CartContainer.module.css"
import { useEffect,useState,useContext } from "react"
import AddProductButton from "../product/AddProductButton"
import CartContext from "../../context/cart-context"
import CustomButton from "../CustomButton"
import {RiDeleteBin2Line} from "react-icons/ri";
import NavigationBar from "../NavigationBar"
import { useNavigate } from "react-router-dom"
import NewNavigation from "../product/NewNavigation"

const CartContainer=(props)=>{
const navigator=useNavigate()
    const ctx=useContext(CartContext)

    const [cartProducts,setCartProducts]=useState([])
    const [totals,setTotals]=useState({price:0,meters:0})
    const firstName=sessionStorage.getItem("firstName")
    const lastName=sessionStorage.getItem("lastName")
    const [deserveDiscount,setDeserveDiscount]=useState(false)
// const [productTotalPriceChanged,setProductTotalPriceChanged]=useState(false)
const cartId=sessionStorage.getItem("cartId")
console.log(ctx)
const discount=async()=>{
  const deserveDiscount=await ctx.isSubClickedToDiscount(firstName,lastName)
  if(!deserveDiscount){
    return;
  }
  if(deserveDiscount.countDiscount>-1){
    
    setDeserveDiscount(true)
  }
  if(deserveDiscount.sumDiscount>-1){
    
   
    setDeserveDiscount(true)
  }
}
useEffect(()=>{
    const getCartProducts=async()=>{
        const cart= await ctx.gettingCart(cartId)
  
        setCartProducts(cart)
        const updatedTotals = ctx.calculateTotals(cart); // Calculate totals after cart products are updated
        setTotals(updatedTotals);
     }
      getCartProducts()
     if(firstName&&lastName){
     discount()
     }
},[])


const handleQuantityChange=async (productCounter,productTitle)=>{
 
  let updatedProducts
  if (productCounter === 0) {
    updatedProducts = cartProducts.filter(prod => prod.productTitle !== productTitle);
  } 

    else{
  updatedProducts = cartProducts.map(prod => {
      if (prod.productTitle === productTitle) {
        return {
          ...prod,
          quantity: productCounter,
          totalPrice: productCounter * prod.price // Update totalPrice here
        };
      }
      return prod;
    });
  }
  setCartProducts(updatedProducts);
  setTotals(ctx.calculateTotals(updatedProducts))
};

const handleRemoveProduct=async (product,cartId)=>{
 const updatedCart = await ctx.deleteProduct(product.productTitle,cartId)
  setCartProducts(updatedCart.items)
  handleQuantityChange(0,product.productTitle)
}
const navigateHandler=(e)=>{
e.preventDefault()
navigator('/payment', { state: { totals,cartProducts } });

}

return <>
<NewNavigation/>
<div className={styles.header}>  עגלת הקניות שלך</div>
<div className={styles.container}>
<table className={styles.table}>
      <thead >
        <tr>
          <th className={styles.columns}>סה''כ</th>
          <th className={styles.columns}>מחיר למטר</th>
          <th className={styles.columns}>כמות המטרים שבחרת</th>
          <th className={styles.columns} >תמונה</th>
          <th className={styles.columnsWidther}>שם המוצר</th>
        </tr>
      </thead>
      <tbody>
        {cartProducts.map((product, index) => (
          <tr key={product.productTitle} >
            <td >{product.totalPrice}₪</td>
            <td>
            {product.price}₪  
            </td>
            <td><div  className={styles.productCounter}>
            <div className={styles.littleSpace}> <button onClick={()=>{handleRemoveProduct(product,cartId)}} style={{border:"none",background:"#edf5e1",cursor:"pointer",fontSize:"3vh",alignItems:"center"}}><RiDeleteBin2Line style={{backgroundColor: "#edf5e1"}} color="red"/></button></div>
              <AddProductButton  productImage={product.imageUrl} productPrice={product.price} productTitle={product.productTitle} 
            changePrice={handleQuantityChange} available={true}/>
           
            </div></td>
            <td><img className={styles.productImage} src={product.imageUrl.substring(0, 4) === "http" ?product.imageUrl : `http://localhost:8000/images/${product.imageUrl}`} alt={product.productTitle} /></td>
            <td>{product.productTitle}</td>
          </tr>

        ))}

      </tbody>
    </table>

    </div>
    {cartProducts.length===0 &&<div> 
          <div className={styles.center}> עגלת הקניות ריקה כרגע</div>
          <CustomButton text="אני רוצה להתחיל לקנות"/>
          </div>}
    {cartProducts.length>0 && <div className={styles.totalSummary}>
      <div className={styles.borderTop}></div>
    <div className={styles.summary}>סיכום ביניים </div>

    <div className={styles.totalMeters}> כמות המטרים עד כה היא {totals.meters}  מטרים</div>
    <div  className={styles.totalPrice}>עד כה קנית בסך {totals.price} שקלים </div>
    {deserveDiscount&& <div className={styles.totalPrice}>את ההנחה תראו בעמוד הבא </div>}
     <button  onClick={navigateHandler}className={styles.ToPayment}>! סיימתי, אני רוצה לשלם </button>
  
      </div>}
</>
}
export default CartContainer
// !productTotalPriceChanged ? product.totalPrice: productTotalPriceChanged