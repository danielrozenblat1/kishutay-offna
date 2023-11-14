import React from "react";

import image7 from "../images/kishutayMainLogo.jpeg"
import firstImage from  "../images/ArigimGroupImage.jpeg"
import thirdImage from  "../images/NewFabrikGroup.jpeg"
import mainImages1 from "../images/NewFabrikImage.jpeg"
import mainImages2 from "../images/SaleGroupImage.jpeg"
import mainImages3 from "../images/SidkitGroupImage.jpeg"
import mainImages5 from "../images/PurimGroupImage.jpeg"
import srigimImage from "../images/SrigimGroupImage.jpeg"
import kishutayCrossed from "../images/logoFinal.png"
import waysToStore from "../images/WaysToStoreImage.jpeg"
import kodkKupon from "../images/images/KodKuponImage.jpg"
import behindTheScenes from "../images/behindTheScenes.jpeg"
import FirstPagePics from "./FirstPagePics";
import io from "socket.io-client";
import { useEffect, useState } from "react";
import axios from "axios";

import NewNavigation from "./product/NewNavigation";

import ButtomOfPage from "./Buttom/ButtomOfPage";

const Container = () => {
  const [allCategories, setAllCategories] = useState([]);
  const isSocketOpened =sessionStorage.getItem("socketOpened");
  const fetchCategories = async () => {
   
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
        Accept: "*/*",
      },
    };
    await axios.get("http://localhost:8000/categories", config).then((response) => {
      setAllCategories(response.data.categories);
    });
  };

  useEffect(() => {
    // fetchCategories();

        if (!sessionStorage.getItem("socketOpened")) {
            const socket = io.connect("http://localhost:8000");
            sessionStorage.setItem("socketOpened", "true");
            socket.emit("connection");
            // fetchCategories();
             socket.on("newUser",(user) => {

              const userId = user.data._id;
              const cartId = user.data.cart._id;
          
              sessionStorage.setItem('userId', userId);
              sessionStorage.setItem('cartId', cartId);
              });

              socket.on('disconnect', () => {
                console.log('Socket disconnected');
              });
              
          }
          return () => {

          }
          // if(isSocketOpened &&sessionStorage.getItem("userId") &&sessionStorage.getItem("cartId")){
          //   const socket = io.connect("http://localhost:8000");
          //   socket.emit("connection");
          //   // fetchCategories();
          //    socket.on("newUser", (user) => {
          //       sessionStorage.setItem("userId",user.data._id)
          //       sessionStorage.setItem("cartId",user.data.cart._id)
          //     });
          //     return () => {
          //       socket.disconnect();
          //     };
          // }


    
     
  }, [isSocketOpened]);

 
  return (
    <>
 <NewNavigation/>
      <div style={{textAlign:"center"}}><img src={kishutayCrossed} style={{height:"20vw"}}/></div>
      <div style={{width:"100%"}}>
      <FirstPagePics to="/categories" src={mainImages1} text="למבחר הבדים"/>
      <FirstPagePics src={thirdImage} text="בדים חדשים באתר"/>
      <FirstPagePics to="/categories" src={mainImages2} text="מבצעים"/>
      <FirstPagePics to={`/group/אריגים`} src={firstImage} text="אריגים"/>
      <FirstPagePics to={`/group/סריגים`} src={srigimImage} text="סריגים"/>
    <FirstPagePics   to="/categories"  src={mainImages3} text="סדקית וסרטים"/>
    <FirstPagePics   to={`/group/פורים`}  src={mainImages5} text="פורים"/>
    <FirstPagePics to="about" src={kodkKupon} text="גיפט קארד"/>
      <FirstPagePics to="about" src={image7} text="קצת עלינו"/>
      <FirstPagePics   to={"/moreAboutUs"}  src={behindTheScenes} text="קצת מאחורי הקלעים"/>
      <FirstPagePics   to={"/directions"}  src={waysToStore} text="דרכי הגעה לחנות"/>
      </div>
      {/* <div style={{fontFamily:"serif",fontWeight:"bold" ,fontSize:"5vh",textAlign:"right",marginTop:"3%",marginRight:"3%" }}>קצת על הצוות</div> */}
 
      {/* <ManagersImages src={image7} header="שרונה ויואב" section={`! ברוך הבא לחנות האינטרנטית של קישוטי אופנה \n, בחנות הפיזית תוכלו למצוא את שרונה ואת יואב\nשרונה - חיה ,נושמת ואופנה \nומתעסקת בתחום מעל ל20 שנים\nיואב - ממייסדי החנות, מתמחה בבדים ונמצא בחנות מעל ל35 שנים, מוזמנים לבקר אותנו בחנות\n ! מחכים לכם  `}  background= "linear-gradient(90deg, #3E9EA0, #3E9EA0 10%, #3E9EA0 45%, #3E9EA0 90%, #3E9EA0)"/>
        <CustomButton text="לחנות האינטרנטית"/>
      <ManagersImages src={image8} header="על החנות + הוראות הגעה" section={`? רוצה להגיע אלינו \n ז'בוטינסקי 16 ,ראשון לציון\n קומה ראשונה \n!נשמח לראותכם `} background="linear-gradient(45deg,#D2B48C, #D2B48C, #D2B48C)"/>
      <CustomButton text="מעדיף לקנות מהבית"/>
    <LittleBrief  text=" !בדים חדשים באתר"/> */}


      {/* <div style={{marginTop:"7vh"}}><RunningImages/></div> */}
<ButtomOfPage/>
    </>
  );
};

export default Container;