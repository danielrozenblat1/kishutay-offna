import { NavLink } from "react-router-dom"
import image1 from "../../images/aboutUsBackground.jpeg"
import styles from "./ErrorPage.module.css"
const ErrorPage=(props)=>{
return <div className={styles.background}>
<div className={styles["image-text-header"]} style={{backgroundColor:"black"}}>  ...משהו השתבש בדרך   </div>
<div className={styles.error}>{props.statusCode}</div>

<div className={styles.errorContainer}>

<div className={styles.explain}>{props.error}</div>
</div>
<NavLink to="/" className={styles.center}><button className={styles.button} >לדף הראשי</button></NavLink>
</div>
}
export default ErrorPage