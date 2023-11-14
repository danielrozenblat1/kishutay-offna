import styles from "./CategorieDetails.module.css";
import { useParams, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import SubCategories from "../UI/SubCategories";
import ProductDesign from "../UI/product/ProductDesign";
import NavigationBar from "../UI/NavigationBar";
import {ThreeDots} from "react-loader-spinner";
import NewNavBar from "../UI/product/NewNavBar";
import NewNavigation from "../UI/product/NewNavigation";
import PerureyLehem from "./location/PerureyLehem";



const CategorieDetails = (props) => {
  const [subcategories, setSubcategories] = useState([]);
  const [chosenCategory, setChosenCategory] = useState({});
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [ isLoading,setIsLoading]=useState(false) 
  const { id } = useParams();

  useEffect(() => {
    const gettingDetails = async () => {
        setIsLoading(true)
      const response = await fetch(`http://localhost:8000/categories/${id}`);
      const categorieDetails = await response.json();
console.log(categorieDetails)
      setChosenCategory(categorieDetails.categorie);

      setSubcategories(categorieDetails.subcategoriesArr);

      setCategoryProducts(categorieDetails.products);
      setIsLoading(false)
    };
    gettingDetails();
  }, [id]);
console.log(subcategories)
  return (
    <>
     <NewNavigation/>

      {/* <NavigationBar /> */}
      <div className={styles.container}>
      {/* <PerureyLehem pageTitle={chosenCategory.title?chosenCategory.title:""}/> */}
        <div className={styles.header}>{chosenCategory.title}</div>

        {/* {subcategories.length > 0 && !isLoading && (
          <div className={styles.subCat}>תת קטגוריות</div>
        )} */}
        <div className={styles.subCatContainer}>
          {subcategories.length > 0 && (
            subcategories.map((subCat) => (
              <SubCategories
                key={subCat.title}
                title={subCat.title}
                imageUrl={subCat.imageUrl}
              />
            ))
          ) }
           {subcategories.length ===0 && isLoading &&  (
            <div className={styles.loading}><ThreeDots color="grey" height={70} width={70} /></div>
          )}
          {subcategories.length===0 && !isLoading &&<div className={styles.noProducts}>אין לקטגוריה הזו תת קטגוריות</div>}
        </div>
        <div className={styles.header}>מוצרים</div>
        <div className={styles.products}>
          {categoryProducts.length > 0 &&  (
            categoryProducts.map((product) => (
              <ProductDesign
            
              onDiscount={product.onDiscount}
              newPriceAfterDiscount={product.newPriceAfterDiscount}
                key={product.title}
                title={product.title}
                src={`http://localhost:8000/images/${product.imageUrl}`}
                price={product.price}
                available={product.isAvailable}
              />
            ))
          )} 
          {categoryProducts.length === 0 && isLoading&& (
             <div className={styles.loading}><ThreeDots color="grey" height={70} width={70} /></div>
          )}
          {categoryProducts.length === 0 && !isLoading&&<div className={styles.noProducts}>לא קיימים מוצרים כרגע</div>}
        </div>
      </div>
    </>
  );
};

export default CategorieDetails;