import { useEffect } from "react";
import styles from"./ProductDiscountPage.module.css"
import Select from "react-select";
import { useState } from "react";
const SubCatDiscountPage=(props)=>{
const [allSubcategories,setAllSubcategories]=useState([])
const [selectedOption,setSelectedOption]=useState()


const gettingSubCategories=async()=>{
    const response=  await fetch("http://localhost:8000/categories/subCat")
    const subcategories=await response.json()
  return subcategories.subCategories
  }
useEffect(()=>{
const getSubCategories=async()=>{
    const subcategories=await gettingSubCategories()
    setAllSubcategories(subcategories)
}
getSubCategories()
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
subcategory:selectedOption
     }
     props.getDataAndRemove(formData)
  }
  console.log(selectedOption)
return(
 <>

<div className={styles.formContainer}><form onSubmit={submitHandler}>
<div className={styles.header}> ? על איזו תת קטגוריה  </div>
        <Select
          options={allSubcategories}
          value={selectedOption}
          onChange={handleChange}
          isClearable
          placeholder="חפש פריט..."
          getOptionLabel={(option) => option.title}
        />

        <button className={styles.button} type="submit">בחירת תת קטגוריה קשורה</button>
        </form></div>
</>)
}
export default SubCatDiscountPage