import styles from "./Categorie.module.css"
import { NavLink } from "react-router-dom"
const Categorie=(props)=>{

return <>

<div className={styles.container}>
 <NavLink to={`/categories/${props.id}`}><img className={styles.image} src={`http://localhost:8000/images/${props.src}`} alt={props.src}></img></NavLink> 
 <NavLink to={`/categories/${props.id}`}><div className={styles.buttonCatName}>{props.header}</div></NavLink>
</div>
</>
}
export default Categorie