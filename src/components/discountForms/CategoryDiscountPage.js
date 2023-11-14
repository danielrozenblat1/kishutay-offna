import { useEffect } from "react";
import styles from"./ProductDiscountPage.module.css"
import Select from "react-select";
import { useState } from "react";
const CategoryDiscountPage=(props)=>{
const [allcategories,setAllCategories]=useState([])
const [selectedOption,setSelectedOption]=useState()
const gettingCategories=async()=>{
  const response=  await fetch("http://localhost:8000/categories")
  const categories=await response.json()
return categories.categories
}
useEffect(()=>{
const getCategories=async()=>{
    const categories=await gettingCategories()
    setAllCategories(categories)
}
getCategories()
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
category:selectedOption
     }
     props.getDataAndRemove(formData)
  }
console.log(selectedOption)

return(
 <>

<div className={styles.formContainer}><form onSubmit={submitHandler}>
<div className={styles.header}> ? על איזו קטגוריה  </div>
        <Select
          options={allcategories}
          value={selectedOption}
          onChange={handleChange}
          isClearable
          placeholder="חפש פריט..."
          getOptionLabel={(option) => option.title}
        />

        <button className={styles.button} type="submit">בחירת קטגוריה קשורה</button>
        </form></div>
</>)
}
export default CategoryDiscountPage