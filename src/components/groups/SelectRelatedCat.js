import Select from "react-select";
import styles from "./SelectRelatedCat.module.css"
import { useState,useEffect } from "react";
import axios from "axios";
const SelectRelatedCat=(props)=>{
 
    const [selectedOption,setSelectedOption]=useState()
    const [allCategories,setAllCategories]=useState([])
const fetchCategories = async () => {
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
        Accept: "*/*",
      },
    };
    await axios.get("http://localhost:8000/categories", config).then((response) => {
      setAllCategories(response.data.categories);
    });
  };
useEffect(()=>{
fetchCategories()
},[])
    const selectedCatHandler=(e)=>{
e.preventDefault()
props.getDataAndRemove(selectedOption,props.id)
    }
    const handleChange=(selected)=>{
        if(!selected){
            setSelectedOption()
            return
        }
        console.log(selected)
        setSelectedOption(selected)
        }
     
    return <form onSubmit={selectedCatHandler}><Select
          options={allCategories}
          onChange={handleChange}
          isClearable
          placeholder="חפש קטגוריה..."
          getOptionLabel={(option) => option.title}
        />
        <button  type="submit" className={styles.button}> בחר קטגוריה</button></form>
}
export default SelectRelatedCat