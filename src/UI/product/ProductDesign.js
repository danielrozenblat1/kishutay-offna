
import AddProductButton from "./AddProductButton"
import styles from "./ProductDesign.module.css"

const ProductDesign=(props)=>{
return <>

<div className={styles.container}>

<a href={`/products/${props.title}`} className={styles.a}><img className={styles.image} src={props.src}></img></a>
<div className={styles.title}>{props.title}</div>
{props.onDiscount && <div className={styles.discount}>{props.price}₪</div>}
<div className={styles.price}>
(למטר) {props.onDiscount ? props.newPriceAfterDiscount : props.price}₪</div>
<div className={styles.buttonContainer}><AddProductButton productPrice={props.onDiscount ? props.newPriceAfterDiscount :props.price} productImage={props.src} productTitle={props.title} available={props.available}/></div>
</div>

</>
}
export default ProductDesign