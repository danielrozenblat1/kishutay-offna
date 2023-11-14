import { useState } from "react";
import styles from "./AddGroupForm.module.css"
import SelectRelatedCat from "./SelectRelatedCat"
const AddGroupForm=()=>{

const[chosenRelatedCategories,setChosenRelatedCategories]=useState([])
const [groupName,setGroupName]=useState()
const [relatedCategories,setRelatedCategories]=useState([])





const inputChangeHandler=(e)=>{
setGroupName(e.target.value)
}
const relatedCategoriesHandler=(e)=>{
    let relatedCategories=[]
    const relatedCategoriesNumber= Number(e.target.value)
if( relatedCategoriesNumber===0){
    //user choses no related Categories
        relatedCategories=[]
        setRelatedCategories(relatedCategories)
    }
if( relatedCategoriesNumber>0){
    //user choses a number between 1-10...
    for(let i=0; i< relatedCategoriesNumber; i++){
        relatedCategories.push(i+1)
    }
    setRelatedCategories(relatedCategories)
}
}



const submitHandler=(e)=>{
e.preventDefault()
const formData={
    groupName:groupName,
    categories:chosenRelatedCategories
}
console.log(formData)
fetch("http://localhost:8000/group/addGroup",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(formData)
})
}
const gettingRelatedCategories=(data,id)=>{
    setChosenRelatedCategories(prevData=>{
        return [data, ...prevData]
    })
    
    setRelatedCategories(prevSubForms=>{
        return prevSubForms.filter(formId=>{
            return formId!==id
        })
    })
     }

return <>
<div className={styles.header}>הוספת קבוצה</div>
<div className={styles.container}> 
<form  className={styles.form} onSubmit={submitHandler}>
<div className={styles.labels}> שם הקבוצה</div>
<input onBlur={inputChangeHandler} className={styles.inputs} type="text" placeholder="שם הקבוצה"/>
<div className={styles.labels}> כמה קטגוריות תרצה בקבוצה</div>
<select onChange={relatedCategoriesHandler} defaultValue="0" className={styles.inputs} name="relatedCategoriesQuantity">
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
        <option value="11">11</option> 
        <option value="12">12</option> 
        <option value="13">13</option> 
        <option value="14">14</option> 
        <option value="15">15</option> 
        <option value="16">16</option> 
        <option value="17">17</option> 
        <option value="18">18</option> 
        <option value="19">19</option> 
        <option value="20">20</option> 

    </select>

</form>
<div className={styles.relatedCategories}>{relatedCategories.length>0 && relatedCategories.map(relatedCat=>{
   return <SelectRelatedCat id={relatedCat} getDataAndRemove={gettingRelatedCategories} key={relatedCat}/>
}) }</div>

{chosenRelatedCategories.length>0&& groupName && <button onClick={submitHandler} className={styles.button}>יצירת קבוצה</button>}
</div>
</>
}
export default AddGroupForm