import styles from "./ButtomOfPage.module.css"
import logoFinal from "../../images/logoFinal.png"

import { FaInstagram,FaFacebook,FaPhone,FaWaze,FaTiktok, FaWhatsapp} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../../context/cart-context";

const ButtomOfPage=(props)=>{
    const ctx=useContext(CartContext)
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
    const message="מה נשמע ? אשמח לברר כמה דברים :)"
    const phoneNumber="+972544872223"
    const encodedMessage = encodeURIComponent(message); 
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
return <div className={styles.down}>

<div className={styles.container}>
<div className={styles.text}>חפשו אותנו גם ב </div>
<div className={styles.row}>

<img  className={styles.image} src={logoFinal} />

<a  className={styles.a} href="https://www.tiktok.com/@kishutayoffna" target="_blank"  ><div className={styles.logo}>
<FaTiktok className={styles.littleLogo} />
</div></a>
<a className={styles.a} href="https://www.facebook.com/search/top?q=%D7%A7%D7%99%D7%A9%D7%95%D7%98%D7%99%20%D7%90%D7%95%D7%A4%D7%A0%D7%94%20-%20%D7%97%D7%A0%D7%95%D7%AA%20%D7%91%D7%93%D7%99%D7%9D%20%D7%A8%D7%90%D7%A9%D7%9C%22%D7%A6"  target="_blank" rel="noopener noreferrer"><div className={styles.logo}>
<FaFacebook className={styles.littleLogo} />
</div></a>
<a  className={styles.a} href="https://instagram.com/kishutay_offna?igshid=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer"><div className={styles.logo}>
<FaInstagram className={styles.littleLogo}/>
</div></a>
<a className={styles.a} href={whatsappUrl} target="_blank" rel="noopener noreferrer"><div className={styles.logo}>
<FaWhatsapp className={styles.littleLogo}/>
</div></a>
<a className={styles.a} href="tel:0544872223"   target="_blank" rel="noopener noreferrer"><div className={styles.logo}>
<FaPhone className={styles.littleLogo}/>
</div></a>
<a className={styles.a} href="https://waze.com/ul?q=ז'בוטינסקי%2016%20ראשון%20לציון" target="_blank" rel="noopener noreferrer"><div className={styles.logo}>
<FaWaze className={styles.littleLogo}/>
</div></a>
</div>
<div className={styles.text}>אני רוצה לעבור ל</div>
<div className={styles.row}>
<NavLink to="/categories"  className={styles.logoText} ><div className={styles.bigLogo}>
קטגוריות
</div></NavLink>
<NavLink to="/" onClick={scrollToTop}  className={styles.logoText} ><div className={styles.bigLogo}>
לראש העמוד
</div></NavLink>
<NavLink className={styles.logoText}  to="/directions" ><div className={styles.bigLogo}>
 הגעה אליכם
</div></NavLink>
{!ctx.loggedIn&&<NavLink className={styles. logoText}  to="/signup"><div className={styles.bigLogo}>
הירשם כמנוי
</div></NavLink>}
{!ctx.loggedIn&&<NavLink className={styles.logoText}  to="/login"><div className={styles.bigLogo}>
התחברות
</div></NavLink>}
<div className={styles.left}>
    <a >אודות</a>
    <a style={{paddingTop:"1vw"}}> תקנון</a>
    </div>
</div>

<div className={styles.text}> כל הזכויות שמורות לקישוטי אופנה</div>
<div className={styles.text}>האתר נבנה על ידי <a className={styles.a}  href={"https://portfoilio-97932.web.app/"} target="_blank" rel="noopener noreferrer">דניאל רוזנבלט</a></div>
</div>




</div>

}
export default ButtomOfPage