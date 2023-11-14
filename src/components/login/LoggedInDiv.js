import styles from "./LoggedInDiv.module.css"
import { useContext } from "react"
import CartContext from "../../context/cart-context"
import { NavLink } from "react-router-dom"
const LoggedInDiv=(firstName,lastName)=>{
    const ctx=useContext(CartContext)
return <div className={styles.container}>
<div className={styles.textContainer} > 
<div className={styles.namesContainer}>{ctx.firstName}</div>
<div className={styles.namesContainer}>{ctx.lastName} </div>
</div>
<NavLink   to="/ordersHistory" className={styles.subChoise}>היסטוריית ההזמנות שלי</NavLink> 
<NavLink to="/myBenefits" className={styles.subChoise}>רשימת ההטבות שלי </NavLink>
<button  className={styles.button} onClick={ctx.logout}>התנתק</button>
</div>
}
export default LoggedInDiv