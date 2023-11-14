
import styles from "./SubCategories.module.css"
import {NavLink,useParams} from "react-router-dom" 

const SubCategories=(props)=>{
    const params=useParams()
console.log(props.imageUrl)
return( <>

<div className={styles.container}>

<div className={styles.subCatContainer}>
<NavLink to={`/categories/${params.id}/${props.title}`}><img src={`http://localhost:8000/images/${props.imageUrl}`} className={styles.image} alt={props.title}></img></NavLink> 
</div>
<NavLink to={`/categories/${params.id}/${props.title}`} className={styles.buttonCatName}>{props.title}</NavLink>
</div>
</>)

}
export default SubCategories