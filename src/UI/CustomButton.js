import styles from "./CustomButton.module.css"
import { NavLink } from "react-router-dom"
const CustomButton=(props)=>{
return <div className={styles.container} style={{marginBottom:"2%"}}><NavLink to="/categories" className={styles.button}>
    {props.text}
</NavLink></div>
}
export default CustomButton