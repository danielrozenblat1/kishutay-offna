import styles from "./AboutUs.module.css"
import CustomButton from "./CustomButton";
import {FaPhone} from "react-icons/fa";
import { useEffect } from "react";
import kishutay from "../images/logoFinal.png"
import NewNavigation from "./product/NewNavigation";
import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const AboutUs=()=>{
    gsap.registerPlugin(ScrollTrigger);
    const animateSlide = () => {
        gsap.to('.sentence', {
          opacity: 1,
          // Adjust the distance you want to slide
          y:20,
          duration: 1, // Duration of the animation
          stagger: 0.4, // Stagger animations for each .sentence element
          scrollTrigger: {
            trigger: '.sentence',
            start: 'top 80%', // Adjust the start point based on when you want the animation to trigger
          },


        })}
        
    useEffect(() => {
        animateSlide();

      }, []);
    return (
        <div className={styles.pageContain}  >
<NewNavigation/>
<div className={styles.container} >
 <div className={styles.center}><img src={kishutay}className={styles.image}/></div>
<div className={styles.header}>קצת עלינו</div>
</div>

<section className={styles.aboutUs} >
  
        <div className="sentence">
        קישוטי אופנה הינה חנות בדים בייבוא אישי מאיטליה ליחידים ובסיטונאות , כולל מוצרי סידקית
            </div>
<br/>
            <div className="sentence">
            החנות פועלת משנת 1983 וידועה בשירות מהיר, נעים ואדיב
            </div>
<br/>
            <div className="sentence">בחנות תמצאו מלאי רחב של בדים מסוגים שונים, במגוון דגמים וצבעים
                
                </div>
<br/>                            
                <div className="sentence">
                כתובתנו :ז'בוטינסקי 16 ראשל"צ
                </div>
<br/> 
                <div className="sentence">
                שעות פעילות : ימים א -ו    9 עד 13 וחצי 
                              א,ג,ד,ה,  16 -19 
                </div>
<br/>                                               
                <div className="sentence">
                    מספר הטלפון בחנות הוא :  03-9671910
                </div>
           
            </section>
         
            <div className={styles.contact}> מוזמנים לפנות אלינו גם בניידים האישיים </div>
            <div className={styles.moreDetails}>
            
            <div className={styles.centered}><a className={styles.logo} href="tel:0544872223"  
          target="_blank" rel="noopener noreferrer">0544872223 - שרונה <FaPhone style={{fontSize:"3vh",color:"#29a587" , marginLeft:"1vw"}}/></a>
          </div>
          <div  className={styles.centered}><a className={styles.logo} href="tel:0543197776"  
          target="_blank" rel="noopener noreferrer">0543197776 - יואב<FaPhone style={{fontSize:"3vh",color:"#29a587", marginLeft:"1vw"}}/></a>

          </div>
    
          </div>
          <CustomButton text="לחנות האינטרנטית"/>
          
          </div>
)
}
export default AboutUs