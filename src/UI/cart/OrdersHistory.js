import { useContext,useEffect,useState } from "react"
import CartContext from "../../context/cart-context"
import styles from "./OrdersHistory.module.css"
import { NavLink } from "react-router-dom"
import NewNavigation from "../product/NewNavigation"
import { dateConvertor } from "./DateConvertor"
import { ThreeDots } from "react-loader-spinner"
const OrdersHistory=()=>{
    const [subOrders,setSubOrders]=useState()
    const [isLoading,setIsLoading]=useState(false) 
    const firstName=sessionStorage.getItem("firstName")
    const lastName=sessionStorage.getItem("lastName")
const ctx=useContext(CartContext)    
const gettingOrders=async()=>{
    const response=await fetch(`http://localhost:8000/sub/getOrdersHistory?firstName=${firstName}&lastName=${lastName}`)
    const data=await response.json()
    console.log(data)
     setSubOrders(data.allOrders)
}
useEffect(()=>{
    setIsLoading(true)
  gettingOrders()
  setIsLoading(false)
},[])

return   <>
      <NewNavigation />
      {ctx.loggedIn && !isLoading && (
        <div className={styles.ordersHistory}>
          <div className={styles.howMuch}>  ביצעת {subOrders?.length}  הזמנות </div>
          {subOrders?.length === 0 && (
            <div style={{ textAlign: "center" }}>
              <NavLink to="/categories">
                <button className={styles.button}>! זמן להזמנה ראשונה</button>
              </NavLink>
            </div>
          )}
          {isLoading &&   <div style={{margin:"0 auto"}}><ThreeDots color="grey" height={70} width={70} /></div>} {/* Show loading component while isLoading is true */}
          {!isLoading && (
            <div className={styles.row}>
              {subOrders?.map((order) => {
                return (
                  <div key={order[3]} className={styles.order}>
                    <div className={styles.date}>{dateConvertor(order[1])}</div>
                    <div className={styles.productquantity}>מספר הזמנה : {order[3]}</div>
                    {order[0].map((product) => {
                      return (
                        <div key={order[2]} className={styles.productcontainer}>
                          <div className={styles.productTitle}>{product.productTitle}</div>
                          <div> x </div>
                          <div className={styles.productquantity}> כמות : {product.quantity} מטרים</div>
                          <div className={styles.totalPrice}> סה''כ למוצר ₪ {product.totalPrice} </div>
                        </div>
                      );
                    })}
                    <div className={styles.totalPriceOrder}>סה''כ שילמת ₪ {order[2]}</div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
     
      {!ctx.loggedIn && !isLoading && (
        <div>
          <div className={styles.notLogged}>הסטוריית ההזמנות זמינה רק לקהל המנויים של קישוטי אופנה</div>
          <div className={styles.row}>
            <NavLink to="/">
              <button className={styles.button}>הבנתי, תחזיר אותי לדף הבית</button>
            </NavLink>
            <NavLink to="/signup">
              <button className={styles.button}>אני רוצה להרשם כמנוי</button>
            </NavLink>
            <NavLink to="/login">
              <button className={styles.button}>יש לי מנוי ואני רוצה להתחבר</button>
            </NavLink>
          </div>
        </div>
      )}
    </>

};

export default OrdersHistory;