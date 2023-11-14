import { useEffect } from "react";
import styles from"./ProductDiscountPage.module.css"
import Select from "react-select";
import { useState } from "react";
const AllProductsDiscount=(props)=>{
const [allProducts,setAllProducts]=useState([])

const gettingProducts=async()=>{
  const response=  await fetch("http://localhost:8000/products")
  const products=await response.json()
return products.products
}
useEffect(()=>{
const getProducts=async()=>{
    const products=await gettingProducts()
    setAllProducts(products)
}
getProducts()
},[])
const submitHandler=(e)=>{
    e.preventDefault()

   const formData={
allProducts:allProducts
   }
   props.getDataAndRemove(formData)
}

return <>
<div className={styles.formContainer}><form onSubmit={submitHandler}>
<div className={styles.header}>בחרת בכל המוצרים באתר </div>


        <button className={styles.button} type="submit"> מאשר</button>
        </form></div>
</>
}
export default AllProductsDiscount