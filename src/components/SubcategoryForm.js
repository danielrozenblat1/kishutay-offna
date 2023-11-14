import styles from "./SubcategoryForm.module.css"
import { useRef,useState } from "react"
const SubcategoryForm=(props)=>{
const subcategoryTitleRef=useRef()

// const [subCategories,setSubcategories]=useState([])
const [subcategorieImage,setSubCategorieImage]=useState()
const handleImageChange = (e) => {
    console.log(" filesss ",e.target.files[0])
    const file = e.target.files[0];
    if (file) {
        setSubCategorieImage(file.name); // Store the selected image file in the state
    }
  };

    const submitHandler=(e)=>{
    e.preventDefault()
const subcategorieTitle=subcategoryTitleRef.current.value
// const subcategorieImage= subcategoryImageRef.current.value
const subcatergoryFormData={
    title:subcategorieTitle,
    imageUrl:subcategorieImage,
    subcategoryProducts:[],
    number:props.id
}
console.log("FormData:", subcatergoryFormData); 
//fetch to the backend
props.getDataAndRemove(subcatergoryFormData,props.id)
    }

    return(
<div className={styles.container}>
    <div className={styles.header}> תת קטגוריה</div>
    <form onSubmit={submitHandler}  encType="multipart/form-data">
   <div className={styles.labels}>שם</div>
   <input  className={styles.inputs} ref={subcategoryTitleRef} type="text" name="subcategoryTitle"></input>
   <div  className={styles.labels}  >תמונה</div>
   <input className={styles.inputs} onChange={handleImageChange} type="file" name="subcategoryImage" accept="image/*"/>
   <br/>
   <button  className={styles.submit} type="submit">הוספה</button>
</form>
</div>)
}
export default SubcategoryForm