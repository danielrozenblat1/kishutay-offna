import styles from "./RelatedProductsForm.module.css"
import { useState,useEffect } from "react"
import Select from "react-select";

const RelatedProductsForm=(props)=>{
    const [allProducts,setAllProducts]=useState([])
    const [selectedOption, setSelectedOption] = useState();

    const getProducts=async()=>{
        const response=await fetch("http://localhost:8000/products")
        const products=await response.json()
          return products.products
      }
      console.log(allProducts)
      //מכניס את הקטגוריות והתת קטגוריות למשתנים הרלוונטים
      useEffect(()=>{
        const gettingCategories=async()=>{
      const theProducts=await getProducts()
      const formattedProducts = theProducts.map((product) => ({
        label: product.title, // Use product title as the label
        value: product._id, // Use product _id as the value
      }));
      setAllProducts(formattedProducts);
          }
      gettingCategories()
      },[])

    const handleChange = (selected) => {
      setSelectedOption(selected);
    };
    const submitHandler=(e)=>{
        e.preventDefault()
       const formData={
        RelatedProdTitle:selectedOption.label,
        relatedProdId:selectedOption.value
       }
       props.getDataAndRemove(formData,props.id)
    }
    return (
      <div className={styles.container}>
        <form onSubmit={submitHandler}>
        <h2>בחירת פריט</h2>
        <Select
          options={allProducts}
          value={selectedOption}
          onChange={handleChange}
          isClearable
          placeholder="חפש פריט..."
        />
        {selectedOption && (
          <div>
            <h3>תוצאה:</h3>
            <p>שם: {selectedOption.label}</p>
          </div>
        )}
        <button className={styles.button} type="submit">בחירת מוצר קשור</button>
        </form>
      </div>
    );
  };
  export default RelatedProductsForm
    
    //המשתנים שלנו

// console.log(props.id)
//     //בחירת המוצר 
//     const selectProductHandler=(e)=>{
//         e.preventDefault()
//          const productIndex=categoryProducts.findIndex(product=>{
//             return product.title===e.target.value
//         })
//         const product=categoryProducts[productIndex]
//         setChosenProduct(product)
//     }
//     //שליחת הטופס
//     const submitHandler=(e)=>{
// e.preventDefault()
// const formData={
//     relatedProduct:chosenProduct
// }
// props.getProductsAndRemove(formData,props.id)
//     }



//     const changingCategoriesHandler=(e)=>{
//         e.preventDefault()
//         const catTitle=e.target.value
//        const catIndex= allCategories.findIndex(category=>{
//             return category.title===catTitle
//         })
//     //updateing the category and the related products
//         setChosenCategory(allCategories[catIndex])
//         setCategoryProducts(allCategories[catIndex].products)
//       }

// return <>
// <div className={styles.container}>
//     <form >
//    <div className={styles.labels}>  משתייך לקטגוריה </div>

//    <button type="sumbit">בחירת מוצר</button>
//    </form>
//  </div>
// </>
// }


   /* <select onChange={changingCategoriesHandler}className={styles.inputs}>
    {allCategories.map(category=>{
 return <option  key={category.title} value={category.title}>{category.title}</option>
   })}  </select >
  <div className={styles.labels}> שם המוצר </div>
   <select onChange={selectProductHandler}>
    <option className={styles.inputs} value="none">אין</option>
    {categoryProducts.map(product=>{
 return <option  key={product.title} value={product.title}>{product.title}</option>
   })}  </select> */