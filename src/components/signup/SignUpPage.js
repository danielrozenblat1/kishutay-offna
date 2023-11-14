import {useRef, useEffect } from "react"
import NewNavigation from "../../UI/product/NewNavigation"
import styles from "./SignUpPage.module.css"
import { FaArrowDown, FaCheck } from "react-icons/fa"

import ScrollReveal from "scrollreveal"
import { useNavigate } from "react-router-dom"

const SignUpPage=()=>{
const navigate=useNavigate()
const clientNameRef=useRef()
const clientLastNameRef=useRef()
const clientMailRef=useRef()
const clientBirthDayRef=useRef()
const clientPhoneRef=useRef()
const clientUserNameRef=useRef()
const clientPasswordRef=useRef()
const takanonRef=useRef()
const messagesRef=useRef()
const userId=sessionStorage.getItem("userId")
useEffect(()=>{
 
            ScrollReveal().reveal(`.${styles.advantage}`, {
                duration: 1200,
                distance: '20px',
                origin: 'bottom',
                easing: 'ease-in-out',
        
                viewFactor: 0.2,
                interval: 100, // Delay between each element
                delay: 200, // Delay before the animation starts
                scale: 1, // Set scale to 1 or null
              });
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
              ScrollReveal().reveal(`.${styles.checkBox}`, {
                duration: 800,
                distance: '20px',
                origin: 'bottom',
                easing: 'ease-in-out',
            
                viewFactor: 0.2,
                interval: 100, // Delay between each element
                delay: 200, // Delay before the animation starts
                scale: 1.2, // Set scale to 1 or null
              });
              ScrollReveal().reveal(`.${styles.check}`, {
          
                scale: 1.5,
                duration: 1000,
                interval: 200,
                easing: 'ease-in-out',
            reset: true,
            viewFactor: 0.2,
          
            delay: 500, // Delay before the animation starts
           
          });
          ScrollReveal().reveal(`.${styles.subHeader}`, {
          
            scale: 1.5,
            duration: 1000,
            interval: 200,
            easing: 'ease-in-out',
      
        viewFactor: 0.2,
      
        delay: 200, // Delay before the animation starts
       
      });
      ScrollReveal().reveal(`.${styles.now}`, {
          
        scale: 1.5,
        duration: 1000,
        interval: 200,
        easing: 'ease-in-out',
  
    viewFactor: 0.2,
  
    delay: 200, // Delay before the animation starts
   
  });
  ScrollReveal().reveal(`.${styles.kishutay}`, {
          
    scale: 1.8,
    duration: 1000,
    interval: 200,
    easing: 'ease-in-out',

viewFactor: 0.2,

delay: 200, // Delay before the animation starts

});
  
},[])

const submitHandler=(e)=>{
    e.preventDefault()
    if (!clientNameRef.current.value||clientNameRef.current.value.trim().length<2) {
        alert(" אנא הכנס שם מעל 2 אותיות");
        return;
      }
      if (!clientLastNameRef.current.value||clientLastNameRef.current.value.length<2) {
        alert("אנא הכנס שם משפחה מעל 2 אותיות");
        return;
      }
      if (clientMailRef.current.value.includes("@")&&clientMailRef.current.value.trim().length<5) {
        alert("אנא הכנס כתובת מייל נכונה");
        return ;
      }
      if (!clientPhoneRef.current.value||clientPhoneRef.current.value.trim().length<10) {
        alert("אנא הכנס מספר טלפון נייד הכולל 10 ספרות");
        return ;
      }
      if (!clientBirthDayRef.current.value) {
        alert("אנא הכנס תאריך יום הולדת ");
        return; 
      }
      if (clientUserNameRef.current.value.length<5) {
        alert("אנא הכנס שם משתמש הכולל לפחות 5 אותיות");
        return;
      }
      if (clientPasswordRef.current.value.trim().length<5) {
        alert("אנא הכנס סיסמא חזקה,הכוללת לפחות 5 ספרות ");
        return ;
      }
      if (!takanonRef.current.checked) {
        alert("אנא אשר את התקנון");
        return ;
      }
      if (!messagesRef.current.checked) {
        alert("אנא אשר את קבלת עדכונים מאיתנו");
        return ;
      }
const formData={
    name:clientNameRef.current.value,
    lastName:clientLastNameRef.current.value,
    mail:clientMailRef.current.value,
    phone:clientPhoneRef.current.value,
    birthDay:clientBirthDayRef.current.value,
    userName:clientUserNameRef.current.value,
    password:clientPasswordRef.current.value,
    takanon:takanonRef.current.checked,
    getMessages:messagesRef.current.checked,
    userId:userId
}
    fetch("http://localhost:8000/sub/newSub",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(formData)
    })
    navigate("/login")
clientNameRef.current.value=""
clientLastNameRef.current.value=""
clientMailRef.current.value=""
clientPhoneRef.current.value=""
clientBirthDayRef.current.value=""
clientUserNameRef.current.value=""
clientPasswordRef.current.value=""
takanonRef.current.checked=false
messagesRef.current.checked=false
}

return <>
<NewNavigation/>
<div className={styles.header}>הרשמות כמנוי</div>

<div className={styles.label}> החלטת לשפר את חווית הקנייה שלך בקישוטי אופנה  ולהנות מהטבות מיוחדות  למנויים שלנו  </div>
<div className={styles.advantageContainer}>
<div className={styles.label}> : חלק מהיתרונות שמקבלים הלקוחות הרשומים שלנו </div>
<div className={styles.row}>
<div className={styles.advantage}><div className={styles.check}> <FaCheck color="green"/></div><div className={styles.benefits}>  תהליך ההרשמות הוא בחינם לחלוטין  </div></div>

<div className={styles.advantage}><div className={styles.check}><FaCheck color="green"/></div ><div className={styles.benefits}>התראות לפני כולם על קולקציות חדשות , מבצעים חדשים</div></div>
<div className={styles.advantage}><div className={styles.check}> <FaCheck color="green"/></div><div className={styles.benefits}>לאחר כל 5 משלוחים מקבלים מתנה שווה מאיתנו</div></div>
</div><div className={styles.row}><div className={styles.advantage}><div className={styles.check}><FaCheck color="green"/></div><div className={styles.benefits}> הטבה מיוחדת בחודש יום ההולדת שלכם </div></div>
<div className={styles.advantage}><div className={styles.check}> <FaCheck color="green"/></div><div className={styles.benefits}>הצטרפות לקהילה של קישוטי אופנה עם בעלי העסק  שרונה ויואב</div></div>

<div className={styles.advantage}><div className={styles.check}> <FaCheck color="green"/></div><div className={styles.benefits}>  תקבל/י 20 אחוז הנחה על הקנייה הבאה בכל פעם שצברת קניות בסך 5000 שקלים </div></div>
</div>

<div className={`${styles.label} animated-label`}> ...ועוד המון יתרונות מובהקים</div>

</div>
<div className={styles.now}>ועכשיו כשהבנתם למה שווה להרשם כמנוי <div className={styles.kishutay}>בקישוטי אופנה</div><br/> ! הגיע הזמן למלא פרטים </div>
<div style={{textAlign:"center",marginTop:"2vw"}}><FaArrowDown style={{fontSize:"6vw" ,color:"rgb(179, 105, 1)"}}/></div>
<form  onSubmit={submitHandler}className={styles.form}>
<div className={styles.subHeader}>פרטים אישיים</div>
<div className={`${styles.label} animated-label`}>שם פרטי</div>
<input ref={clientNameRef}  className={`${styles.input} animated-input`} type="text"></input>
<div  className={`${styles.label} animated-label`}>שם משפחה</div>
<input  ref={clientLastNameRef}   className={`${styles.input} animated-input`} type="text"></input>
<div  className={`${styles.label} animated-label`}>אימייל</div>
<input  ref={clientMailRef}  type="text"  className={`${styles.input} animated-input`} placeholder="example@example.com"></input>
<div  className={`${styles.label} animated-label`}>טלפון נייד</div>
<input  ref={clientPhoneRef}  type="text"  className={`${styles.input} animated-input`} placeholder="0512345678"></input>
<div  className={`${styles.label} animated-label`}>תאריך יום ההולדת שלך</div>
<input  ref={clientBirthDayRef}  type="date"  className={`${styles.input} animated-input`}></input>
<div className={styles.subHeader}> פרטי המשתמש </div>
<div  className={`${styles.label} animated-label`}>שם משתמש</div>
<input  ref={clientUserNameRef}  type="text"  className={`${styles.input} animated-input`}></input>
<div  className={`${styles.label} animated-label`}>סיסמא</div>
<input  ref={clientPasswordRef}  type="password"  className={`${styles.input} animated-input`}></input>
<div className={styles.row}>
<div  className={`${styles.takanon} animated-check`}> אני מסכימ/ה ל<a >תקנון</a></div>
<div className={styles.center}><input ref={takanonRef} type="checkbox" className={styles.checkBox}></input></div>
</div>
<div className={styles.row}>
<div  className={`${styles.takanon} animated-check`} > אני מסכימ/ה לקבל הודעות על מקולקציות ומבצעים חדשים</div>
<div className={styles.center}><input ref={messagesRef}  type="checkbox" className={styles.checkBox}></input></div>
</div>
<button className={styles.button} type="submit"> ! סיימתי </button>
</form>
</>

}
export default SignUpPage