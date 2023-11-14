import { useEffect } from "react";
import styles from"./ProductDiscountPage.module.css"
import Select from "react-select";
import { useState } from "react";
const ProductDiscountPage=(props)=>{
const [allProducts,setAllProducts]=useState([])
const [selectedOption,setSelectedOption]=useState()
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
const handleChange = (selected) => {
    setSelectedOption(selected);
  };
  const submitHandler=(e)=>{
      e.preventDefault()
      if(!selectedOption){
        //הוספת הערה
        return;
      }
     const formData={
product:selectedOption
     }
     props.getDataAndRemove(formData)
  }
console.log(selectedOption)

return(
 <>

<div className={styles.formContainer}><form onSubmit={submitHandler}>
<div className={styles.header}> ?  על איזה מוצר   </div>
        <Select
          options={allProducts}
          value={selectedOption}
          onChange={handleChange}
          isClearable
          placeholder="חפש פריט..."
          getOptionLabel={(option) => option.title}
        />

        <button className={styles.button} type="submit">בחירת מוצר קשור</button>
        </form></div>
</>)
}
export default ProductDiscountPage