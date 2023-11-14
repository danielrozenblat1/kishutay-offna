import { useContext, useEffect, useState } from "react"
import CartContext from "../../context/cart-context"
import styles from "./Benefits.module.css"
import { NavLink, useNavigate } from "react-router-dom"
import { FaCheck } from "react-icons/fa"
import ScrollReveal from "scrollreveal"
import NewNavigation from "../product/NewNavigation"
const Benefits=()=>{
    const [subData,setSubData]=useState({})
    const ctx=useContext(CartContext)
    const firstName=sessionStorage.getItem("firstName")
    const lastName=sessionStorage.getItem("lastName")
    const navigate=useNavigate()
    const gettingSubData=async()=>{
        const data= await ctx.checkIfReachedDiscount(firstName,lastName)
        setSubData(data)
    }
    const checkIfOrderValid=()=>{
        const now=new Date()
        const expirationDateSum=sessionStorage.getItem("expiration date for orders sum")
        const expirationDateCount=sessionStorage.getItem("expiration date for orders count")
        if( expirationDateSum){
            const timestamp = now.getTime();
        if(timestamp>= expirationDateSum){
            sessionStorage.removeItem("expiration date for orders sum")
             ctx.cancelSumDiscount()
        }
        }
        if( expirationDateCount){
            const timestamp = now.getTime();
            if(timestamp>= expirationDateCount){
                sessionStorage.removeItem("expiration date for orders count")
                 ctx.cancelCountDiscount()
            }
        }
        
    }
    const reachedTotalSum=async()=>{
        console.log("heyy")
        const firstName=sessionStorage.getItem("firstName")
        const lastName=sessionStorage.getItem("lastName") 
        console.log(firstName,lastName)
        const response =await fetch(`http://localhost:8000/sub/sumDiscount?firstName=${firstName}&lastName=${lastName}`)
        const data=await response.json()
        console.log(data)
        navigate("/cart")
        }
        const reachedTotalCount=async()=>{
            console.log(firstName,lastName)
        const response=await fetch(`http://localhost:8000/sub/countDiscount?firstName=${firstName}&lastName=${lastName}`)
        const data=await response.json()
        console.log(data)
        
        navigate("/cart")
        }

    useEffect(()=>{
        gettingSubData()

        ScrollReveal().reveal(`.${styles.check}`, {
          
            scale: 1.5,
            duration: 1000,
            interval: 200,
            easing: 'ease-in-out',
        reset: true,
        viewFactor: 0.2,
      
        delay: 500, // Delay before the animation starts
       
      });
       
      ScrollReveal().reveal(`.${styles.row}`, {
        duration: 1200,
        distance: '20px',
        origin: 'bottom',
        easing: 'ease-in-out',

        viewFactor: 0.2,
        interval: 100, // Delay between each element
        delay: 200, // Delay before the animation starts
        scale: 1, // Set scale to 1 or null
      });
      checkIfOrderValid()
    },[])
   
    console.log(subData)
return <>
<NewNavigation/>
{!ctx.loggedIn&&
<div> 
<div className={styles.notLogged}>הטבות למנויים זמינות רק לקהל המנויים של קישוטי אופנה</div>    
<div className={styles.row}>
<NavLink to="/"><button className={styles.button}>הבנתי, תחזיר אותי לדף הבית</button></NavLink>
<NavLink to="/signup"><button className={styles.button}>אני רוצה להרשם כמנוי</button></NavLink>
<NavLink to="/login"><button className={styles.button}>יש לי מנוי ואני רוצה להתחבר</button></NavLink>
</div></div>}
{ctx.loggedIn &&<>
<div className={styles.header}> נתונים מקיפים עלי כמנוי</div>
<div className={styles.benefits}>
    <div className={styles.data}> עד כה הזמנת מאיתנו {subData?.ordersNum} פעמים</div>
    <div  className={styles.data}> סכום ההזמנות הכולל הוא {subData?.totalSum}₪</div>
    {subData?.totalSum===0 &&subData?.ordersNum===0 && <NavLink to="/categories"><button className={styles.button}> הגיע הזמן להזמנה ראשונה </button></NavLink>}
    {ctx.reachedCountDiscount && <button onClick={reachedTotalCount} className={styles.button}>מימוש ההטבה של כמות ההזמנות</button>}
    <br/>
    {ctx.reachedSumDiscount && <button onClick={reachedTotalSum} className={styles.button}>מימוש ההטבה של סכום ההזמנות</button>}
</div>
<div className={styles.header}>כלל ההטבות המגיעות לקהל המנויים</div>




    <div className={styles.row}>
<div className={styles.advantage}><div className={styles.check}><FaCheck color="green"/></div><div className={styles.benefit}> הטבה מיוחדת בחודש יום ההולדת שלכם </div></div>
<div className={styles.advantage}><div className={styles.check}><FaCheck color="green"/></div ><div className={styles.benefit}>התראות לפני כולם על קולקציות חדשות , מבצעים חדשים</div></div>
<div className={styles.advantage}><div className={styles.check}> <FaCheck color="green"/></div><div className={styles.benefit}>לאחר כל 5 משלוחים מקבלים מתנה שווה מאיתנו</div></div></div>
<div className={styles.row}><div className={styles.advantage}><div className={styles.check}> <FaCheck color="green"/></div><div className={styles.benefit}>  תהליך ההרשמות הוא בחינם לחלוטין  </div></div>
<div className={styles.advantage}><div className={styles.check}> <FaCheck color="green"/></div><div className={styles.benefit}>הצטרפות לקהילה של קישוטי אופנה עם בעלי העסק  שרונה ויואב</div></div>

<div className={styles.advantage}><div className={styles.check}> <FaCheck color="green"/></div><div className={styles.benefit}>  תקבל/י 20 אחוז הנחה על הקנייה הבאה בכל פעם שצברת קניות בסך 5000 שקלים </div></div>
</div></>  }


</>
}
export default Benefits