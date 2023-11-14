import styles from "./FirstPagePics.module.css"
import { NavLink } from "react-router-dom"
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const FirstPagePics=(props)=>{

     useEffect(() => {
    const sr = ScrollReveal();
    sr.reveal(`.${styles.image}`, {
      duration: 2000,
      opacity: 0.1,
      distance: "0px",
      origin: "bottom",
      easing: "ease-in-out",
    });

  }, []);
return     <>
<div className={styles.imageContainer}>
  <NavLink to={props.to}><img  className={styles.image} src={props.src} alt={props.text} />
  <button className={styles.button}>{props.text}</button></NavLink>
</div>
</>
}
export default FirstPagePics