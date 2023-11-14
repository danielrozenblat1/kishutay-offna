import SubcategoryForm from "./SubcategoryForm"
import styles from "./UploadCategoryForm.module.css"
import { useState,useRef } from "react"

const UploadCategoryForm=()=>{
const titleRef=useRef()
const [subcategories,setSubcategories]=useState([])
const [subcategoriesData,setSubcategoriesData]=useState([])
const [categoryImage,setCategoryImage]=useState()
//getting the sub categories from the subform ,removing it from the forms count and adding the data to the data form(in and out..)
 const gettingSubcategories=(data,id)=>{
setSubcategoriesData(prevData=>{
    return [data, ...prevData]
})
setSubcategories(prevSubForms=>{
    return prevSubForms.filter(formId=>{
        return formId!==id
    })
})
 }

 const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCategoryImage(file); // Store the selected image file in the state
    }
  };
 

 const subcategoryHandler=(e)=>{
    let renderForms=[]
    const subcategoriesNumber= Number(e.target.value)
    setSubcategoriesData([])
if(subcategoriesNumber===0){
        renderForms=[]
        setSubcategories(renderForms)
    }
if(subcategoriesNumber>0){
    for(let i=0; i<subcategoriesNumber; i++){
     renderForms.push(i+1)
    }
    setSubcategories(renderForms)
}
}
    const submitHandler=(e)=>{
e.preventDefault()
const categoryTitle=titleRef.current.value
const tatCategories= subcategoriesData
const realTat=tatCategories.map(subCat=>{

return JSON.stringify(subCat)
})
const formData = new FormData();
formData.append('title', categoryTitle);
formData.append('image', categoryImage);
formData.append("subcategories",realTat)
formData.append('products', []);
console.log(formData)
// const categoryFormData={
//     title:categoryTitle,
//     imageUrl:categoryImage,
//     subcategories:tatCategories,
//     products:[]
// }
fetch("http://localhost:8000/categories/upload",{
    method:"POST",
    body:formData
})
titleRef.current.value=""
setCategoryImage()
setSubcategories([])
setSubcategoriesData([])
    }
return <div className={styles.container}>
  <div className={styles.header}> הוספת קטגוריה</div>
    <form onSubmit={submitHandler} className={styles.formContainer} encType="multipart/form-data">
  <div className={styles.labels}>שם הקטגוריה</div>
   <input ref={titleRef} className={styles.inputs} type="text" name="title"></input>
   <div  className={styles.labels}>תמונה</div>
   <input onChange={handleImageChange}className={styles.inputs} type="file" name="image" accept="image/*"/>
   <div className={styles.labels}>  תת קטגוריות  </div>
  <div className={styles.subCategories}>
    <select onChange={subcategoryHandler} defaultValue="0" className={styles.inputs} name="subcategoriesQuantity">
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
    </select>
    </div>
   <button  className={styles.button} type="submit">העלאת הקטגוריה</button>
</form>
{subcategories.length> 0 && subcategories.map(category=>{
    return <div id={category} key={category}><SubcategoryForm id={category} getDataAndRemove={gettingSubcategories}/></div>
})}
</div>
}
export default UploadCategoryForm