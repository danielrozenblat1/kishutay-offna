import { useEffect,useState } from "react"
import NavigationBar from "./NavigationBar"
import styles from "./SubcategoryProducts.module.css"
import { useParams } from "react-router-dom"
import ProductDesign from "./product/ProductDesign"
import { ThreeDots } from "react-loader-spinner"
import PerureyLehem from "../components/location/PerureyLehem"
import NewNavigation from "./product/NewNavigation"
const SubCategoryProducts=(props)=>{
    const [filteredSubcatProds,setFilteredSubcatProds]=useState([])
    const [chosenSubCat,setChosenSubCat]=useState()
    const [isLoading,setIsLoading]=useState(false)
    const params=useParams()
const getSubcategory=async()=>{
    const response = await fetch(`http://localhost:8000/subcategories/${params.id}/${params.subCat}`)
    const subCategoryDetails=await response.json()
   
    return subCategoryDetails
}

    useEffect(()=>{
const gettingSubcategory=async()=>{
    setIsLoading(true)
const subCatDetails=await getSubcategory()
setFilteredSubcatProds(subCatDetails.subCategory[0].subcategoryProducts)
setChosenSubCat(subCatDetails.subCategory)
}
gettingSubcategory()
setIsLoading(false)
    },[])
    console.log(chosenSubCat)
return <>
<NewNavigation/>
{!chosenSubCat && isLoading && <div className={styles.center}><ThreeDots color="grey" height={70} width={70}  /></div>}

{chosenSubCat&& <div className={styles.subCatContainer}><div className={styles.header}>{chosenSubCat[0].title}</div>

<div className={styles.center}><img className={styles.image}src={`http://localhost:8000/images/${chosenSubCat[0].imageUrl}`}></img></div>
<div className={styles.subCatProductsHeader}> מוצרים </div>
<div className={styles.subCatProducts}>{filteredSubcatProds?.length>0 && filteredSubcatProds.map(prod=>{
return <ProductDesign  key={prod.title} title={prod.title} src={`http://localhost:8000/images/${prod.imageUrl}`} onDiscount={prod.onDiscount} newPriceAfterDiscount={prod.newPriceAfterDiscount} price={prod.price} available={prod.isAvailable}/>
})}
{filteredSubcatProds?.length===0 && isLoading &&<ThreeDots color="grey" height={70} width={70}  /> }
{filteredSubcatProds?.length===0 && !isLoading &&<div className={styles.text}>תת קטגוריה זו לא מכילה מוצרים כרגע</div> }
</div>
</div>

}
</>
}
export default SubCategoryProducts