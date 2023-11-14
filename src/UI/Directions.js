import NavigationBar from "./NavigationBar"

import "./Directions.css"
import direction1 from "../images/direction1.jpeg"
import direction2 from "../images/direction2.jpeg"
import direction3 from "../images/direction3.jpeg"
import direction4 from "../images/direction4.jpeg"
import direction5 from "../images/direction5.jpeg"

import direction7 from "../images/images/direction7.jpeg"
import direction8 from "../images/images/direction8.jpeg"
import direction9 from "../images/images/direction9.jpeg"
import direction10 from "../images/images/direction10.jpeg"
import direction11 from "../images/images/direction11.jpeg"
import direction12 from "../images/images/direction12.jpeg"
import directionLast from "../images/images/directionLast.jpeg"
import FloatingDirections from "./gsap/MapAnimations"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useEffect } from "react"
import { gsap } from "gsap"

import FadingText from "./gsap/FadingText"

import NewNavigation from "./product/NewNavigation"

const Directions=()=>{

    const styleheader={
        
        fontSize: "4vh",
       fontWeight: "lighter",
       fontFamily:" Times New Roman', Times, serif",
       textAlign: "center"
}


useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  
    // Apply animations to non-image elements
    gsap.utils.toArray(".arrived, .center, .explain").forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0.2, scale: 0.8 }, // Initial state
        {
          opacity: 1,
          scale: 1,
          scrollTrigger: {
            trigger: element,
            start: "top center", // Adjust the starting point as needed
          },
          duration: 1,
        }
      );
    });
  
    // Apply animation to images
    gsap.utils.toArray(".image").forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0.2 }, // Initial state
        {
          opacity: 1,
          scrollTrigger: {
            trigger: element,
            start: "top center", // Adjust the starting point as needed
          },
          duration: 1,
        }
      );
    });

      

    
  

  }, []);
    
return <>
<NewNavigation/>

<div className="container">
<div className="header"><FadingText text="?  איך אני מגיע/ה לחנות שלכם בקלי קלות "/></div>

<div className="click" style={styleheader}><FadingText text="*קודם כל עליכם להגיע לז'בוטינסקי 16 ראשון לציון*"/>  <FadingText text="*לחצו על המיקום לפתיחת הוראות הגעה*"/></div>
<FloatingDirections/>
{/* <div className="dots" style={styleObj}>.<br/>.<br/>.<br/></div> */}
<div className="arrived" >הגעתי לז'בוטינסקי 16</div>
<div className="center"  > שלב מספר 1</div>

<div className="explain" >חפשו שלט המפנה אתכם לכניסה הצפונית/דרומית של המתחם</div>
<div className="centered"><img className="image"  src={direction1}/></div>
 <div className="center"  > שלב מספר 2</div>
 <div className="explain" >כנסו בדלת המוזהבת ופנו ימינה לכניסה הצפונית/דרומית לפי השלטים למעלה</div>
 <div className="centered"><img className="image" src={direction2}  /></div>
 <div className="center" > שלב מספר 3 </div>
 <div className="explain" >ממש כאן ! פנו ימינה</div>
 <div className="centered"><img className="image" src={direction3}  /></div>
 <div className="center" > שלב מספר 4 </div>
 <div className="explain" >לפניכם 2 אפשרויות : מעלית ומדרגות - עלו לקומה הראשונה</div>
 <div className="centered"><img className="image" src={direction4}  /></div>
 <div className="centered"><img className="image" src={direction5}  /></div>
 <div className="center" > שלב מספר 5 </div>
 <div className="explain" >"הגעתם לקומה הראשונה ! , המשיכו ישר ושימו לב לשלט "בדים</div>
 <div className="centered"><img className="image" src={direction7}  /></div>
 <div className="centered"><img className="image" src={direction8}  /></div>
 <div className="center" > שלב מספר 6 </div>
 <div className="explain" >פנו שמאלה עם השלט והמשיכו ישר , אתם תראו עגלה מלאה בבדים - כמעט הגעתם</div>
 <div className="centered"><img className="image" src={direction9}  /></div>
 <div className="center" > שלב מספר 7 </div>
 <div className="explain" >פנו שוב שמאלה ותראו שני עציצים - -אתם שנייה מהחנות</div>
 <div className="centered"><img className="image" src={direction10}  /></div>
 <div className="center" > שלב מספר 8 </div>
 <div className="explain" > !! המשיכו ישר עד העציצים ותראו לוגו ענק משמאלכם - קישוטי אופנה - הגעתם</div>
 <div className="centered"><img className="image" src={direction11}  /></div>
 <div className="centered"><img className="image" src={direction12}  /></div>
 <div className="center" > !! מחכים לכם  </div>
 <div className="centered"><img className="image" src={directionLast}  /></div>
 </div>

</>
}
export default Directions