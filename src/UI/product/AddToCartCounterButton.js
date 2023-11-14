import styles from "./AddToCartCounterButton.module.css"
import { useState ,useEffect,useRef} from "react"
import {debounce} from "lodash"
import CartTotalCounter from "../cart/CartTotalCounter"
const AddToCartCounterButton=(props)=>{
    const [productCounter,setProductCounter]=useState(1)

  

useEffect(()=>{
if(props.cartQuantity>0){
    setProductCounter(props.cartQuantity)
}
},[])

const removeHalfMeterHandler = (e) => {
    e.preventDefault();
    if (productCounter === 1) {
    setProductCounter(0);
      props.outOfCart(e);

    } else {
      const newCount = productCounter - 0.5;
      setProductCounter(newCount);
      props.cartUpdate(newCount);
    }
  }
const addHalfMeterHandler =(e) => {
    e.preventDefault();
    const newCount = productCounter + 0.5;
    setProductCounter(newCount);
    props.cartUpdate(newCount);
  }; 

return <div className={styles.buttonWrapper}>

    <button onClick={removeHalfMeterHandler} className={styles.button}>-</button>
    <div className={styles.counter}>{productCounter}</div>
    <button onClick={addHalfMeterHandler} className={styles.button}>+</button>
    </div>
}
export default AddToCartCounterButton