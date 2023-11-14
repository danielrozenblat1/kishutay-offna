import styles from "./BehindTheScenes.module.css"
import video from "../videos/behindTheScenes.mp4"
import video2 from "../videos/behindTheScenes2.mp4"
import video3 from "../videos/behindTheScenes3.mp4"
import { useEffect } from "react"
import ScrollReveal from "scrollreveal"

import MachineGunText from "./gsap/MachineGun"
import { NavLink } from "react-router-dom"

const BehindTheScenes=(props)=>{
        useEffect(() => {
            // Initialize ScrollReveal for the sliding effect

            ScrollReveal().reveal(`.${styles.topSection}`, {
                duration: 1500, // Adjust the duration as needed
                rotate: { x: 0, y: 0, z: 50 }, // Rotate around the z-axis by -25 degrees
                origin: "center", // Rotation origin
                easing: "ease-in-out", // Adjust the easing as needed
                interval: 200, // Delay between each element animation
         
              });
              ScrollReveal().reveal(`.${styles.topSection2}`, {
                duration: 1500, // Adjust the duration as needed
                rotate: { x: 0, y: 0, z:-50 }, // Rotate around the z-axis by -25 degrees
                origin: "center", // Rotation origin
                easing: "ease-in-out", // Adjust the easing as needed
                interval: 200, // Delay between each element animation
      
              });
              ScrollReveal().reveal(`.${styles.video}`, {
                duration: 1000, // Adjust the duration as needed
                distance: "100px", // Slide distance
                origin: "left", // Slide direction
                easing: "ease-in-out",
                interval: 200, // Delay between each element animation
              });
              ScrollReveal().reveal(`.${styles.video2}`, {
                duration: 1000, // Adjust the duration as needed
                distance: "100px", // Slide distance
                origin: "right", // Slide direction
                easing: "ease-in-out",
                interval: 200, // Delay between each element animation
              });
          }, []);
return <>

<div className={styles.container}>
<div className={styles.stripsTop}></div>
<div className={styles.header}><MachineGunText text='קצת מאחורי הקלעים'/></div>

<div className={styles.strips}></div>
<div className={styles.wrapper}>

<div className={styles.topSection}></div>
<div className={styles.row}>

<video className={styles.video} controls >
<source   src={video2} type="video/mp4"/>
    </video>
    <div className={styles.sectionContainer}>
<div  className={styles.aboutFabrik}>ייבוא הבדים</div>
<section className={styles.section}>
    <ul>הבדים מגיעים בייבוא אישי מכמה ארצות נבחרות באירופה</ul>
 <ul>הבדים מגיעים בקונטיינרים מיוחדים מדי עונה </ul>
  <ul>יש בידינו מעל ל30 סוגי בדים , סרטים , מספריים , פאצ'ים ומוצרי סדקית ותפירה באיכות הגבוהה ביותר  </ul>
</section>
</div>
    </div>
</div>
<div className={styles.strips}></div>
<div className={styles.wrapper}>
<div className={styles.topSection2}></div>
<div className={styles.row}>
<div className={styles.sectionContainer2}>
<div  className={styles.aboutFabrik2}>יואב</div>
<section className={styles.section2}>

 <ul > יואב נותן שירות בחנות מעל ל35 שנה, תמיד בחיוך ,באהבה ובמקצועיות  </ul>
 <ul >  תמיד ידאג שתצאו מרוצים ויחפש לעזור  מאז שזוכר את עצמו חי ונושם את העסק </ul>
  <ul > עובדת בונוס - התחיל לעבוד בחנות מגיל 14 </ul>
</section>
</div>
<video className={styles.video2} controls width="540" height="360" >
<source   src={video} type="video/mp4"/>
    </video>
    </div>
</div>
<div className={styles.strips}></div>
<div className={styles.wrapper}>
<div className={styles.topSection}></div>
<div className={styles.row}>
<video className={styles.video} controls width="540" height="360" >
<source   src={video3} type="video/mp4"/>
    </video>
<div className={styles.sectionContainer}>
<div  className={styles.aboutFabrik}> שרונה</div>
<section className={styles.section}>
    <ul>שרונה מתעסקת בעיצוב אופנה מעל ל30 </ul>
 <ul>שרונה נותנת שירות בחנות מעל ל25 שנה , ותמיד תדאג שהלקוח ייצא מרוצה ומסופק מחוויית הקנייה בחנות  </ul>
 <ul>אחראית על הייבוא ועל תחום המדיה של החברה</ul>

</section>

</div>
  </div>

  </div>
  <NavLink  style={{display:"flex",justifyContent:"center",textDecoration:"none",marginTop:"7%"}}to="/categories"><button className={styles.button}> אני רוצה להתחיל לקנות</button></NavLink>
  </div>

  </>

}
export default BehindTheScenes

