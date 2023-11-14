import RelatedProductsForm from "./RelatedProductsForm"
import styles from "./UploadProductForm.module.css"
import { useState,useEffect, useCallback, useRef } from "react"

const UploadProductForm=()=>{
    const titleRef=useRef()
    const priceRef=useRef()
    const descriptionRef=useRef()
    const [chosenCat,setChosenCat]=useState()
    const [chosenSubCat,setChosenSubCat]=useState()
    const [categories,setCategories]=useState([])
    const [subCategories,setSubCategories]=useState([])
    const [allRelatedProducts,setRelatedProducts]=useState([])
    const [chosenRelatedProducts,setChosenRelatedProducts]=useState([])
    const [productImage,setProductImage]=useState()
    const [sideImagesAndVideos,setSideImagesAndVideos]=useState([])
    const [isAvilable,setIsAvilable]=useState(true)
    //מטפל בהוספת כמות המוצרים הקשורים
    const relatedProductsHandler=(e)=>{
        let relatedProducts=[]
        const relatedProductsNumber= Number(e.target.value)
    if( relatedProductsNumber===0){
        //user choses no related products
            relatedProducts=[]
            setRelatedProducts(relatedProducts)
        }
    if( relatedProductsNumber>0){
        //user choses a number between 1-10...
        for(let i=0; i< relatedProductsNumber; i++){
            relatedProducts.push(i+1)
        }
        setRelatedProducts(relatedProducts)
    }
    }
    const isAvialableHandler=(e)=>{
        e.preventDefault()
        if(e.target.value==="כן"){
            setIsAvilable(true)
        }else{setIsAvilable(false)}
    }

//מטפל בשינוי התמונות
const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log(file)
    if (file) {
        setProductImage(file.name); // Store the selected image file in the state
    }
  };

    //מקבל את הקטגוריות
    const getCategories=useCallback(async()=>{
        const response=await fetch("http://localhost:8000/categories")
        const categories=await response.json()
          return categories
      },[])
      //מכניס את הקטגוריות והתת קטגוריות למשתנים הרלוונטים
      useEffect(()=>{
        const gettingCategories=async()=>{
      const allCategories=await getCategories()

 if(allCategories.categories.length>0){
 
      setCategories(allCategories.categories)
      setSubCategories(allCategories.categories[0].Subcategory)
      setChosenCat(allCategories.categories[0])
 }
          }
      gettingCategories()
      },[getCategories])
      //  בשינוי בחירת קגטוריה זה מעדכן גם את הקטגוריה הנבחרת וגם את התת קטגוריה
      const changingCategoriesHandler=(e)=>{
        e.preventDefault()
        const catTitle=e.target.value
       const catIndex= categories.findIndex(category=>{
            return category.title===catTitle
        })

    setChosenCat(categories[catIndex])
    setSubCategories(categories[catIndex].Subcategory)
      }

      const subCatChooseHandler=(e)=>{
e.preventDefault()
const subcatTitle=e.target.value
const subcatIndex=subCategories.findIndex(subcategory=>{
     return subcategory.title===subcatTitle
 })
 setChosenSubCat(subCategories[subcatIndex])
      }
      //טיפול בסרטונים 
      const handleMultipleVideoChange = (e) => {
        const files = e.target.files;
        const newVideos = [];
      
        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          console.log(file)
          newVideos.push(file.name);
        }
      
        // Update the state with the array of filenames
        setSideImagesAndVideos(prevArr => {
          return [...prevArr, { "videos": newVideos }];
        });
      };

      // טיפול בקבלת תמונות
      const handleMultipleImagesChange = (e) => {
        const files = e.target.files;
        const newImages = [];
      
        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          newImages.push(file.name);
        }
      
        // Update the state with the array of filenames
        setSideImagesAndVideos(prevArr => {
          return [...prevArr, { "images": newImages }];
        });
      };

      const addProductsHandler=(e)=>{
        e.preventDefault()
        const productTitle=titleRef.current.value
        const productPrice=Number(priceRef.current.value)
        const productDescription=descriptionRef.current.value

    const formData={
    title:productTitle,
   image:productImage,
    price:productPrice,
    description: productDescription,
    category:chosenCat,
    subcategory:chosenSubCat,
    avialable:isAvilable,
    infoImagesAndVideos:sideImagesAndVideos,
    relatedProducts:chosenRelatedProducts
}
fetch("http://localhost:8000/products/addProduct",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(formData)
})
      }
      const gettingRelatedProducts=(data,id)=>{
        setChosenRelatedProducts(prevData=>{
            return [data, ...prevData]
        })
        
        setRelatedProducts(prevSubForms=>{
            return prevSubForms.filter(formId=>{
                return formId!==id
            })
        })
         }


      
return <>
<div className={styles.container}>
  <div className={styles.header}> הוספת מוצר</div>
    <form onSubmit={addProductsHandler} className={styles.formContainer}>
  <div className={styles.labels}>שם המוצר</div>
   <input ref={titleRef} className={styles.inputs} type="text" name="title"></input>
   <div  className={styles.labels}>תמונה</div>


   <input onChange={handleImageChange}  className={styles.inputs} type="file" name="image" accept="image/*"/>

   <div className={styles.labels}>מחיר המוצר</div>
   <input ref={priceRef} className={styles.inputs} type="number" name="price" min="0"></input>
   <div className={styles.labels}>תיאור המוצר</div>
   <textarea ref={descriptionRef} className={styles.bigInputs} type="text" name="description"></textarea>
  
   <div className={styles.labels}>העלאת תמונות</div>
  <input onChange={handleMultipleImagesChange} className={styles.inputs} type="file" id="imageUpload" name="images" accept="image/*" multiple/>

  <div className={styles.labels} >העלאת סרטונים</div>
  <input  onChange={handleMultipleVideoChange} className={styles.inputs} type="file" id="videoUpload" name="videos" accept="video/*" multiple/>
  <div  className={styles.labels}> ? זמין כרגע במלאי </div>
  <select  defaultValue="כן" onChange={isAvialableHandler}>
    <option value="כן">כן</option> 
    <option value="לא">לא</option>
  </select>
   <div className={styles.labels}>  משתייך לקטגוריה </div>
   <select onChange={changingCategoriesHandler}className={styles.inputs}>
    {categories.map(category=>{
 return <option  key={category.title} value={category.title}>{category.title}</option>
   })}  </select >
  <div className={styles.labels}>  משתייך לתת קטגוריה </div>
   <select onChange={subCatChooseHandler}>
    <option className={styles.inputs} value="none">אין</option>
    {subCategories.map(subcategory=>{
 return <option key={subcategory.title} value={subcategory.title}>{subcategory.title}</option>
   })}  </select>


<div className={styles.labels}>בחירת מוצרים קשורים </div>
<select onChange={relatedProductsHandler} defaultValue="0" className={styles.inputs} name="relatedProductsQuantity">
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        
    </select>


<br/>
<button  className={styles.button} type="submit">העלאת מוצר</button>
   </form>
   {allRelatedProducts.length> 0 && allRelatedProducts.map(category=>{
    return <div id={category} key={category}> <RelatedProductsForm  getDataAndRemove={gettingRelatedProducts} id={category} categories={categories} /></div>
})}
   </div>

</>
}
export default UploadProductForm