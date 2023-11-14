import { useContext, useEffect,useRef } from "react"
import styles from "./LoginPage.module.css"
import { NavLink, useNavigate } from "react-router-dom"
import ScrollReveal from "scrollreveal"
import NewNavigation from "../../UI/product/NewNavigation"
import { FaMousePointer } from "react-icons/fa"
import CartContext from "../../context/cart-context"
const LoginPage=()=>{

const navigate=useNavigate()
    const userNameRef=useRef()
    const passwordRef=useRef()
    const ctx=useContext(CartContext)
    const submitHandler=async(e)=>{
        e.preventDefault()
        if (userNameRef.current.value.length<5) {
            alert(" שם המשתמש כולל לפחות 5 אותיות");
            return;
          }
          if (passwordRef.current.value.trim().length<5) {
            alert("אנא הכנס סיסמא חזקה,הכוללת לפחות 5 אותיות ");
            return ;
          }
          const isCorrect=await fetch("http://localhost:8000/sub/login")
          if(!isCorrect){
            alert("שם משתמש/סיסמא לא נכונים")
            return
          }
        const isLegit= await ctx.login(userNameRef.current.value,passwordRef.current.value)
        console.log(isLegit)
        if(!isLegit){
          userNameRef.current.value=""
          passwordRef.current.value=""
          return;
        }
        userNameRef.current.value=""
        passwordRef.current.value=""
          navigate("/")
    }
    useEffect(()=>{
        ScrollReveal().reveal(`.${styles.input}`, {
            duration: 1200,
            distance: '20px',
            origin: 'bottom',
            easing: 'ease-in-out',
            
            viewFactor: 0.2,
            interval: 100, // Delay between each element
            delay: 200, // Delay before the animation starts
            scale: 1, // Set scale to 1 or null
          });
          ScrollReveal().reveal(`.${styles.label}`, {
            duration: 800,
            distance: '20px',
            origin: 'bottom',
            easing: 'ease-in-out',
     
            viewFactor: 0.2,
            interval: 100, // Delay between each element
            delay: 200, // Delay before the animation starts
            scale: 1, // Set scale to 1 or null
          });

          ScrollReveal().reveal(`.${styles.header}`, {
            duration: 800,
            distance: '20px',
            origin: 'bottom',
            easing: 'ease-in-out',
        
            viewFactor: 0.2,
            interval: 100, // Delay between each element
            delay: 200, // Delay before the animation starts
            scale: 1, // Set scale to 1 or null
          });
 
          ScrollReveal().reveal(`.${styles.button}`, {
            duration: 800,
            distance: '20px',
            origin: 'bottom',
            easing: 'ease-in-out',
        
            viewFactor: 0.2,
            interval: 100, // Delay between each element
            delay: 200, // Delay before the animation starts
            scale: 1, // Set scale to 1 or null
          });
          ScrollReveal().reveal(`.${styles.subHeader}`, {
            duration: 800,
            distance: '20px',
            origin: 'bottom',
            easing: 'ease-in-out',
        
            viewFactor: 0.2,
            interval: 100, // Delay between each element
            delay: 200, // Delay before the animation starts
            scale: 1, // Set scale to 1 or null
          });
      ScrollReveal().reveal(`.${styles.row}`, {
          
        scale: 1.5,
        duration: 1000,
        interval: 200,
        easing: 'ease-in-out',
    reset: true,
    viewFactor: 0.2,
  
    delay: 500, // Delay before the animation starts
   
  });
    },[])

    return <>
    <NewNavigation/>
<div className={styles.header}>התחבר למנוי קיים</div>
<div className={styles.subHeader}>? עדיין לא קיים מנוי   <br/> <NavLink to="/signup"  className={styles.navLink}> הרשם עכשיו בחינם </NavLink></div>
<div className={styles.row}>
<FaMousePointer className={styles.mouseIcon}/>
<FaMousePointer  className={styles.mouseIcon}/>
<FaMousePointer  className={styles.mouseIcon}/>
</div>
<div className={styles.didntLogIn}>  לא התחברת ? לא תוכל להנות מההטבות של המנויים שלנו , התחבר עכשיו </div>
<form className={styles.form} onSubmit={submitHandler}>
<div  className={`${styles.label} animated-label`}>שם משתמש</div>
<input  ref={userNameRef}  type="text"  className={`${styles.input} animated-input`}></input>
<div  className={`${styles.label} animated-label`}>סיסמא</div>
<input  ref={passwordRef}  type="password"  className={`${styles.input} animated-input`}></input>
<button className={styles.button}>התחבר</button>
</form>
    </>
}
export default LoginPage