
import Categorie from "./Categorie";
import styles from "./Shop.module.css";
import io from "socket.io-client";
import { useEffect, useState } from "react";
import axios from "axios";
import {ThreeDots} from "react-loader-spinner";

import NewNavigation from "../UI/product/NewNavigation";

const Shop = (props) => {
  const [allCategories, setAllCategories] = useState([]);
 
  const isSocketOpened = sessionStorage.getItem("socketOpened");
  const fetchCategories = async () => {
    
    console.log("fetching")
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


    fetchCategories();
    if (!sessionStorage.getItem("socketOpened")) {
      const socket = io.connect("http://localhost:8000");
      sessionStorage.setItem("socketOpened", "true");
      socket.emit("connection");
    
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
    
  
    
    

    // Clean up the socket connection on unmount

  }, [isSocketOpened]);


  return (
    <div className={styles.backGround}>
   
  <NewNavigation/>  


      <div className={styles.container}>
        <div className={styles.categories}>
          {allCategories.length>0 ?allCategories.map((category) => {
            return (
              <Categorie
                key={category._id}
                id={category._id}
                header={category.title}
                src={`${category.imageUrl.replace(/\\/g, "/")}`}
                className={styles.category}
              />
            );
          }):<div className={styles.center}> <ThreeDots color="grey" height={70} width={70}  /></div>}

        </div>
      </div>
    </div>
  );
};

export default Shop;
