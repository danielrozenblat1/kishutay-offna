import NavigationBar from "../../UI/NavigationBar"
import styles from "./DiscountPage.module.css"
import { useState } from "react"
import ProductDiscountPage from "./ProductDiscountPage"
import CategoryDiscountPage from "./CategoryDiscountPage"
import SubCatDiscountPage from "./SubCatDiscountPage"
import AllProductsDiscount from "./AllProductsDiscount"

const DiscountPage=(props)=>{
    const [chosenDiscount,setChosenDiscount]=useState()
    const [chosenTime,setChosenTime]=useState()
    const [chosenPercent,setChosenPrecent]=useState()  
    const [selectedDiscountProduct,setSelectedDiscountProduct]=useState() 
    const selectOptionHandler=(e)=>{
      e.preventDefault()
      setSelectedDiscountProduct(null)
      setChosenDiscount(e.target.value)

    }
   const gettingSelectedProduct=(formData)=>{
  setSelectedDiscountProduct(formData)
   }
 
   const timeChangeHandler=(e)=>{
    e.preventDefault()
    setChosenTime(e.target.value)
   }
 const presentChangeHandler=(e)=>{
  e.preventDefault()
  setChosenPrecent(Number(e.target.value))
 }
 const submitDiscountHandler=(e)=>{
  e.preventDefault()
  const allData={
  on:chosenDiscount,
  item:selectedDiscountProduct,
  time:chosenTime,
  present:chosenPercent
  }
  fetch("http://localhost:8000/discount",{
    method:'PUT',
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(allData)
  })
  setChosenTime()
   setChosenPrecent()
   setSelectedDiscountProduct(null)
   setChosenDiscount()
 }
 
    return <>
    <NavigationBar/>
    <div className={styles.header}> הנחה</div>
   
    <div className={styles.onWhat}> ? על מה תרצה לעשות הנחה </div>
    <div className={styles.center}><select className={styles.onWhatSelect}  defaultValue="" onChange={selectOptionHandler}>
    <option value=""></option>
<option value="מוצר">מוצר</option>
<option value="קטגוריה">קטגוריה</option>
<option value="תת קטגוריה"> תת קטגוריה</option>
<option value="כל המוצרים בחנות">כל המוצרים בחנות</option>
  </select></div>
  {chosenDiscount==="מוצר" && !selectedDiscountProduct && <div className={styles.productForm}><ProductDiscountPage getDataAndRemove={gettingSelectedProduct}/></div>}
  {chosenDiscount==="קטגוריה" && !selectedDiscountProduct && <div className={styles.productForm}><CategoryDiscountPage getDataAndRemove={gettingSelectedProduct}/></div>}
  {chosenDiscount==="תת קטגוריה" && !selectedDiscountProduct && <div className={styles.productForm}> <SubCatDiscountPage  getDataAndRemove={gettingSelectedProduct}/></div>}
  {chosenDiscount==="כל המוצרים בחנות" && !selectedDiscountProduct &&<div className={styles.productForm}><AllProductsDiscount getDataAndRemove={gettingSelectedProduct}/></div>}


  <div className={styles.howLong}>  ? לכמה זמן ההנחה תהיה פעילה  </div>
 <div className={styles.center}> <select   className={styles.howLongSelect} defaultValue="" onChange={timeChangeHandler} >
 <option value=""></option>
<option value="יום">יום</option>
<option value="שבוע">שבוע</option>
<option value="חודש">חודש</option>
<option value="שנה">שנה</option>
  </select></div>

  <div className={styles.howMany}> ? כמה אחוזי הנחה תרצה להפעיל על המוצר  </div>
  <div className={styles.center}> <input  defaultValue="" onBlur={presentChangeHandler} className={styles.howManyInput}  type="number" min={1} max={100}></input>
  </div>
  {chosenTime&&chosenPercent&& selectedDiscountProduct&& <div className={styles.center}><button  className={styles.button} onClick={submitDiscountHandler}> החל הנחה</button></div>}

    </>
}
export default DiscountPage