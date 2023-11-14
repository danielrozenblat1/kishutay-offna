import styles from "./NavigationBar.module.css"
import {NavLink,useNavigate,useLocation} from "react-router-dom"
import kishutayLogo from "../images/kishutayLogoNew.jpeg"
import { IoMdInformationCircleOutline } from "react-icons/io";
import { FaInstagram,FaFacebook,FaPhone, FaHome, FaWaze,FaLongArrowAltRight, FaShoppingCart,FaBars } from "react-icons/fa";


import ShoppingCartIcon from "./cart/ShoppingCartIcon";
import { useEffect, useContext,useState } from "react";

const NavigationBar=(props)=>{
    const navigate=useNavigate()
    const location = useLocation();
  
   
     const cartId=sessionStorage.getItem("cartId")
    

 
    // const [cartItems,setCartItems]=useState([])
    // useEffect(()=>{
    //     const getCartProducts=async()=>{
    //         const cart= await ctx.gettingCart(cartId)
    //         setCartItems(cart)
    //      }
    //       getCartProducts()
    
    // },[location])

return  (  <nav className={styles.nav}>
   
          
          <div className={styles.logo}><NavLink  className={styles.fabrik}  to ="/about"><IoMdInformationCircleOutline style={{fontSize:"4vh",color:"black"}}/></NavLink></div>
          <div className={styles.logo}><NavLink  className={styles.fabrik}  to ="/categories/upload">העלאת קטגוריות זמנית</NavLink></div>
         <div className={styles.logo}><NavLink  className={styles.fabrik}  to ="/products/upload">העלאת מוצרים זמנית</NavLink></div>
          <div className={styles.logo}><NavLink  className={styles.fabrik}  to ="/group/upload">יצירת קבוצה</NavLink></div>
          {/* <div className={styles.logo}>
          <a href="https://instagram.com/kishutay_offna?igshid=MzRlODBiNWFlZA=="  target="_blank" rel="noopener noreferrer"> <FaInstagram style={{fontSize:"4vh",color:"black"}}/></a>
          </div> */}

          <div className={styles.logo}><a href="tel:0544872223"  
          target="_blank" rel="noopener noreferrer"><FaPhone style={{fontSize:"4vh",color:"black"}}/></a>
          </div>
          {/* <div className={styles.logo}>
          <a href="https://waze.com/ul?q=ז'בוטינסקי%2016%20ראשון%20לציון

"  target="_blank" rel="noopener noreferrer"> <FaWaze style={{fontSize:"4vh",color:"black"}}/></a>
          </div> */}

          {/* <div className={styles.logo}><a href="https://www.facebook.com/search/top?q=%D7%A7%D7%99%D7%A9%D7%95%D7%98%D7%99%20%D7%90%D7%95%D7%A4%D7%A0%D7%94%20-%20%D7%97%D7%A0%D7%95%D7%AA%20%D7%91%D7%93%D7%99%D7%9D%20%D7%A8%D7%90%D7%A9%D7%9C%22%D7%A6"  
          target="_blank" rel="noopener noreferrer"><FaFacebook style={{fontSize:"4vh",color:"black"}}/></a>
          </div> */}
    
          <div className={styles.logo}>
          <NavLink to="/cart" style={{textDecoration:"none"}}> {cartId&&<ShoppingCartIcon/>} <FaShoppingCart style={{fontSize:"4vh",color:"black"}}/></NavLink>
          </div>
     
          <img  className={styles.kishutayLogo} src={kishutayLogo}></img> 
      

          <div className={styles.logo}>
          {/* <div className={styles.logo}><NavLink  className={styles.fabrik}  to ="/discount">הנחה</NavLink></div> */}
          
          </div>
      

      {/* should be here a logo */}
      <div className={styles.logo}><NavLink className={styles.fabrik}  to ="/categories">קטגוריות</NavLink></div>
      {location.pathname !== '/' &&< div className={styles.logo}> <NavLink to="#" onClick={() => navigate(-1)}><FaLongArrowAltRight color="black" size={34}/></NavLink></div>}
      <div className={`${styles.logo} ${styles.right}`}><NavLink  to="/"><FaHome style={{fontSize:"4vh",color:"black"}} /></NavLink>
          </div>
     
      </nav>


     
)}



export default NavigationBar

// "#4b75ab"
// "#4b75ab"
// "#4b75ab"
// "#4b75ab"