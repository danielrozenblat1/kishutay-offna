import Categorie from "../Categorie"
import styles from "./Group.module.css"
import { NavLink,useParams } from "react-router-dom"
import {ThreeDots} from "react-loader-spinner";
import { useEffect,useState } from "react";
import NavigationBar from "../../UI/NavigationBar";
import NewNavigation from "../../UI/product/NewNavigation";
const Group=(props)=>{
    const { title } = useParams();

    const [groupDetails,setGroupDetails]=useState()
    const gettingGroup=async()=>{
        const response =await fetch(`http://localhost:8000/group/${title}`) 
        const data=await response.json()
    return data.group
    }
 useEffect(()=>{
    const getGroup=async()=>{
       const group=await  gettingGroup()
       setGroupDetails(group)
    }
    getGroup()
 
 },[])
return <>

<NewNavigation/>

{groupDetails ? <div className={styles.container}>

<div className={styles.header}>{groupDetails.title}</div>

<div className={styles.categories}>{groupDetails.categories.length>0 ?groupDetails.categories.map((category) => {
            return (
              <Categorie
                key={category._id}
                id={category._id}
                header={category.title}
                src={`${category.imageUrl.replace(/\\/g, "/")}`}
              />
            );
          }):<div className={styles.center}> <ThreeDots color="grey" height={70} width={70}  /></div>}</div>
</div>: <ThreeDots color="grey" height={70} width={70}  />}
</>
}
export default Group