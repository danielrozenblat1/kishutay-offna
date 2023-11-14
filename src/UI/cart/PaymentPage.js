import { useContext, useEffect,useState } from "react"
import NavigationBar from "../NavigationBar"
import styles from "./PaymentPage.module.css"
import { useLocation,NavLink, useNavigate } from "react-router-dom"
import CustomButton from "../CustomButton"

import NewNavigation from "../product/NewNavigation"
import CartContext from "../../context/cart-context"
const PaymentPage=(props)=>{
const location=useLocation()
const [deliveryWay,setDeliveryWay]=useState("איסוף עצמי")
const ctx=useContext(CartContext)
const [firstName,setFirstName]=useState(ctx.loggedIn?ctx.firstName:"")
const [lastName,setLastName]=useState(ctx.loggedIn?ctx.lastName:"")
const [phoneNumber,setPhoneNumber]=useState("")
const [email,setEmail]=useState("")
const [address,setAddress]=useState("")
const [city,setCity]=useState("")
const [apartment,setApartment]=useState("")
const [floor,setFloor]=useState("")
const [notes,setNotes]=useState("")
const [paid,setPaid]=useState(false)
const [deserveDiscount,setDeserveDiscount]=useState(false)

const navigate=useNavigate()
const cartId=sessionStorage.getItem("cartId")
const subFirstName=sessionStorage.getItem("firstName")
const subLastName=sessionStorage.getItem("lastName")
const [price,setPrice]=useState(location.state?.totals?.price) 
const discount=async()=>{
  const deserveDiscount=await ctx.isSubClickedToDiscount(subFirstName,subLastName)
  if(!deserveDiscount){
    return;
  }
  if(deserveDiscount.countDiscount>-1){
    const discount=price*0.9
    setPrice( discount)
    setDeserveDiscount(true)
  }
  if(deserveDiscount.sumDiscount>-1){
    const discount2=price*0.8
    setPrice(discount2)
    setDeserveDiscount(true)
  }
}
useEffect(()=>{
  discount()

},[])
    const firstNameChange=(e)=>{
        e.preventDefault()
        setFirstName(e.target.value)
    }
    const lastNameChange=(e)=>{
        e.preventDefault()
        setLastName(e.target.value)
    }
    const emailChange=(e)=>{
        e.preventDefault()
        setEmail(e.target.value)
    }
    const phoneNumberChange=(e)=>{
        e.preventDefault()
         setPhoneNumber(e.target.value)
    }
    const addressChange=(e)=>{
        e.preventDefault()
         setAddress(e.target.value)
    }
    const apartmentChange=(e)=>{
        e.preventDefault()
         setApartment(e.target.value)
   
    }
    const floorChange=(e)=>{
        e.preventDefault()
         setFloor(e.target.value)
    }
    const cityChange=(e)=>{
        e.preventDefault()
         setCity(e.target.value)
    }
    const notesChange=(e)=>{
        e.preventDefault()
         setNotes(e.target.value)
    }
    const submitHandler=async(e)=>{
        e.preventDefault()
        if (!firstName||firstName.trim().length<2) {
            alert("אנא מלא/מלאי שם פרטי - מינימום 2 אותיות");
            return;
          }
          if (!lastName||lastName.trim().length<2) {
            alert("אנא מלא/מלאי שם משפחה - מינימום 2 אותיות");
            return;
          }
          if (!email|| !email.includes("@") ) {
            alert("אנא הכנס/הכניסי מייל");
            return;
          }
          if (typeof(phoneNumber)==="Number" && !phoneNumber||phoneNumber.trim().length<10) {
            alert("אנא הכנס/הכניסי מספר טלפון נייד");
            return;
          }
          if (!address||address.trim().length<5) {
            alert("אנא הכנס/הכניסי כתובת מגורים - רחוב ומספר ");
            return;
          }
          if (!city||city.trim().length<2) {
            alert("אנא הכנס/הכניסי עיר מגורים ");
            return;
          }
          if (typeof(apartment)==="number" && Number(apartment)<0) {
            alert("אנא הכנס/הכניסי מספר דירה ");
            console.log(apartment)
            return;
          } 
          if (typeof(floor)==="number" && Number(floor)<0) {
            alert("אנא הכנס/הכניסי מספר קומה ");
            return;
          } 
            const formData={
           הגעה:deliveryWay,
            שם:firstName,
            משפחה:lastName,
            מייל:email,
           טלפון:phoneNumber,
            כתובת:address,
            עיר:city,
            דירה:apartment,
            קומה:floor,
            הערה:notes,
            מחיר:price +(deliveryWay==="שליח עד הבית" && (price<=100 ? 45 :price>100&&price<=299 ? 32 :0)),
            מוצרים:location.state?.cartProducts,
              cartId:cartId
        }
            console.log(formData)
            setFirstName("")
            setLastName("")
            setEmail("")
            setAddress("")
            setCity("")
            setFloor("")
            setApartment("")
            setPhoneNumber("")
            setNotes("")
// await fetch("קבלת תשובה מהמערכת סליקה,פונקצייה או פשוט אישור")
    await fetch("http://localhost:8000/email/sendEmail",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(formData)
    })
    //להחזיר לא נכון אם ההזמנה לא התבצעה ולהחזיר ללקוח הודעה שהייתה בעייה
    // setPaid(true)
    navigate("/paid")
    }
    const selectDeliveryHandler=(e)=>{
e.preventDefault()
setDeliveryWay(e.target.value)
    } 


return  <>
<NewNavigation/>
<div className={styles.header}>פרטי הלקוח</div>

{location.state?.totals?.price<50 &&<div><div className={styles.minForOrder}> לא הגעת למינימום הקנייה הדרוש <br/> * סכום המינימום להזמנה הוא 50 שקלים *</div>
<CustomButton text=" תחזירו אותי לקטגוריות שלכם" to="/categories"/></div>
}
{location.state?.totals?.price>=50 && <div className={styles.formContainer}>
<form onSubmit={submitHandler}>

<div className={styles.min}> * ! משלוח עד הבית * <br/>  -  משלוח ב45 שקלים בהמנה מתחת ל100 שקלים - <br/> -  משלוח ב32 שקלים בהזמנה בין 100 ל299 שקלים  - <br/>-  משלוח חינם בהזמנה מעל 300 שקלים  - </div>
<div className={styles.how}> ?  אוסף את המשלוח עצמאית או רוצה לקבל משלוח עד הבית </div> 
<div className={styles.ways}>

<select  onChange={selectDeliveryHandler}  defaultValue="איסוף עצמי" className={styles.select}>
   <option  className={styles.option} value="איסוף עצמי">איסוף עצמי</option>
   {location.state?.totals?.price>=300 &&<option  className={styles.option} value="שליח עד הבית">שליח עד הבית (משלוח חינם בקנייה מעל 300 ש''ח)</option>}
   {location.state?.totals?.price>=50 && location.state?.totals?.price<100 && <option  className={styles.option} value="שליח עד הבית">שליח עד הבית (משלוח ב45 ש''ח בקנייה עד 100 ש''ח)</option>}
   {location.state?.totals?.price>=100 && location.state?.totals?.price<300 && <option  className={styles.option} value="שליח עד הבית">שליח עד הבית (משלוח ב32 ש''ח בקנייה עד 300 ש''ח)</option>}
</select>
</div>
    <div className={styles.clientDetails}>
<div className={styles.yourOrder}>
    <div className={styles.summary}>סיכום ההזמנה שלך</div>
    <div className={styles.totals}> {location.state?.cartProducts?.length} :  מוצרים שונים  </div>
    <div className={styles.totals}> {location.state?.totals?.meters} :  סה''כ מטרים </div>
    <div className={styles.totals}> {location.state?.totals?.price}₪ :  מחיר ההזמנה </div>
 {deserveDiscount&& <div className={styles.totals}> {price}₪ :  מחיר לאחר ההנחה </div>}
{deliveryWay!=="איסוף עצמי" &&<div className={styles.totals}>{price<=100 ? 45 :price>100&&price<=299 ? 32 :0}₪  :  (משתנה עם סכום ההזמנה)  דמי משלוח</div>}
{deliveryWay==="איסוף עצמי" &&<div className={styles.price}>{price}₪  :  סה''כ לתשלום </div>}
{deliveryWay!=="איסוף עצמי" &&<div className={styles.price}>{price + (price<=100 ? 45 : price>100&&price<=299 ? 32 :0) }₪  :  סה''כ לתשלום </div>}

  
</div>

<div className={styles.inputs}>
<div className={styles.details}>פרטי המשלם</div>
<div className={styles.row}>
<input className={styles.textInput} onChange={firstNameChange}  value={firstName} type="text" placeholder="שם פרטי"/>
<input className={styles.textInput} onChange={lastNameChange} value={lastName}  type="text" placeholder="  שם משפחה"/>
    <input  className={styles.textInput} onChange={emailChange} value={email} type="text" placeholder="דואר אלקטרוני"/>

   
    </div>
    <div className={styles.details}>לאן תרצה שנגיע ולמי נתקשר</div>
    <div className={styles.row}>
    <input className={styles.textInput} type="text" onChange={phoneNumberChange}  value={phoneNumber} placeholder="מספר טלפון"/>
    <input className={styles.textInput}  onChange={addressChange}  value={address} type="text" placeholder="כתובת"/> 
    <input className={styles.textInput} onChange={cityChange}  value={city} type="text" placeholder="עיר"/> 
  
    </div>
    <div className={styles.row}>
    <input type="text" onChange={apartmentChange}  value={apartment} placeholder="דירה" className={styles.numbersInput}/>
    <input type="text"  onChange={floorChange}  value={floor}  placeholder="קומה"  className={styles.numbersInput}/> 
    <input type="text" onChange={notesChange}  value={notes} placeholder="הערות לשליח" className={styles.textInput}/>
    
    </div>
    <div className={styles.centered}><button type="submit" className={styles.button}>המשך לתשלום מאובטח </button></div>
    </div>

</div>

</form>


</div>
}

 </>
   
};
      



export default PaymentPage