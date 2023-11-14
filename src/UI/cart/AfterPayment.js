import logoFinal from "../../images/logoFinal.png"
import styles from "./AfterPayment.module.css"
import { NavLink } from "react-router-dom"
const AfterPayment=()=>{
    return <>
<div className={styles.paid}>תודה שקנית </div>
<div style={{textAlign:"center",margin:"5vh"}}><img  className={styles.image} src={logoFinal} height={200}/></div>
<div className={styles.paid}><NavLink  style={{textDecoration:"none" ,color:"black" ,fontSize:"3vw"}}to="/"> לדף הבית</NavLink></div>
</>
}
export default AfterPayment