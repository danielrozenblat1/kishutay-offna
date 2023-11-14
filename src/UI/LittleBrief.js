import styles from "./LittleBrief.module.css"
import image9 from "../images/image9.jpeg"

import { NavLink } from "react-router-dom"
const LittleBrief=(props)=>{
return <div className={styles.container}>
    <div style={ { height : "20vh",
  width: "93vw",
  objectFit: "cover",
  border: "1px solid black",
  borderRadius: "7%",
  opacity: 0.75,
  marginTop: "2%",
  marginBottom:"3%",
  backgroundImage: `url(${image9})`}} >
<div className={styles.down}><NavLink className={styles.a} to="/categories/new"> {props.text}</NavLink></div>
</div>
</div>
}
export default LittleBrief