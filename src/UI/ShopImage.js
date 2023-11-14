import styles from "./ShopImage.module.css"
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
const ShopImage=()=>{

        useEffect(() => {
            // Initialize ScrollReveal for the ShopImage component
            ScrollReveal().reveal(`.${styles.image}`, {
              duration: 2000,
              scale:1.5, // Adjust the zoom level as needed
              distance: "0px",
              origin: "center",
              easing: "ease-in-out",
            });
          }, []);
return (
    <div className={styles.container}><img className={styles.image} src="https://cdn.istores.co.il/image/upload/if_w_lte_1900,c_pad,h_460,w_1900/if_w_gte_3000,c_fill,h_460,w_1900/c_crop,h_460,w_1900/v1673372241/clients/104014/62b3d57fcce9d87057815d5ab80021fecdbf9107.jpg" alt="our details"></img></div>
)
}
export default ShopImage