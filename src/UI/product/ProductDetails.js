import { useContext, useEffect ,useState} from "react"
import { useParams ,NavLink} from "react-router-dom"
import styles from "./ProductDetails.module.css"

import AddProductButton from "./AddProductButton"
import RunningImages from "../RunningImages"
import ProductDesign from "./ProductDesign"
import CartContext from "../../context/cart-context"
import NewNavigation from "./NewNavigation"
import { FaWhatsapp } from "react-icons/fa"
import io from "socket.io-client"
import { ThreeDots } from "react-loader-spinner"


import { Pagination,Navigation } from 'swiper/modules';
import 'swiper/css';
import "./pagination.css"
import "./styles.css"
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/react'

const ProductDetails=(props)=>{
    const isSocketOpened =sessionStorage.getItem("socketOpened");
    const {title}=useParams()

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      };
   
     
    const ctx=useContext(CartContext)
    let productDescription
  const [productDetails,setProductDetails]=useState()
  const [relatedProducts,setRelatedProducts]=useState([])
const cartId=sessionStorage.getItem("cartId")
    const getProductDetails=async()=>{
        const response =await fetch(`http://localhost:8000/products/${title}`)
        const productDetails=await response.json()
        return productDetails
    }
    const updatingTheCart=(productCounter)=>{
        ctx.updatingTheCart(productCounter,productDetails.title,cartId,productDetails.price,productDetails.imageUrl)
    }
    const handleWhatsAppShare = () => {
        const currentURL = window.location.href;
        const encodedURL = encodeURIComponent(currentURL);
        const whatsappLink = `https://api.whatsapp.com/send?text=${encodedURL}`;
    
        window.open(whatsappLink, '_blank');
      };
    useEffect(()=>{
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
        const gettingDetails=async()=>{
            const realProductDetails=await getProductDetails()
            setProductDetails(realProductDetails.productDetails)
            setRelatedProducts(realProductDetails.relatedProducts)
        }
        setTimeout(()=>{
            gettingDetails()
        },1000)
       
      

    

    },[])

console.log(productDetails)
if(productDetails){
productDescription=productDetails.description.split("\n")
}

return <>
<NewNavigation />

{!productDetails && <div className={styles.center}><ThreeDots height={70} width={70} color="grey"/></div>}
{productDetails && <div className={styles.container}>
<div className={styles.row}>  
<div className={styles.column}>
<div className={styles.productHeader}>{productDetails.title} </div>
{productDetails.isAvailable && <div className={styles.row}> <a className={styles.whatsapp} onClick={handleWhatsAppShare}><FaWhatsapp cursor="pointer" fontSize="4vw" color="green"/><br/>  שלח/י לחבר/ה </a><div className={styles.productAvailable}>זמינות : קיים במלאי</div> </div> }
{!productDetails.isAvailable && <div className={styles.productNotAvailable}>זמינות : אזל מהמלאי</div>}
<div className={styles.priceWrapper}><div className={styles.descriptionHeader}>מחיר</div>
{productDetails.onDiscount && <div className={styles.deletedPrice}>{productDetails.price}₪ </div>}
{productDetails.onDiscount && <div className={styles.price}> {productDetails.newPriceAfterDiscount}₪</div>}
 {!productDetails.onDiscount &&<div  className={styles.price}> {productDetails.price}₪ </div>}
<div className={styles.perMeter}> המחיר הינו לפי מטר</div>
<div className={styles.addToCartButton}><AddProductButton productImage={productDetails.imageUrl} productPrice={productDetails.price} productTitle={title} cartUpdate={updatingTheCart} available={productDetails.isAvailable}/></div>
</div>
<div className={styles.descriptionWrapper}>
<div className={styles.descriptionHeader}>תיאור המוצר</div>
    <div className={styles.productDescription}>{productDescription.map(p=>{
        return <div  key={p} className={styles.row}>{p}</div>
    })}</div></div>
    <div className={styles.degemWrapper}>
    <div className={styles.descriptionHeader}> דגם</div>
<div className={styles.degem}> {productDetails.title}</div>
</div>
</div>
{/* תמונה בצד ימין מוגדלת עם אפשרות להגדלה */}
<div className={styles.rightSideColumn}>
   <div className={styles.productImage}> <RunningImages  image={productDetails.imageUrl} images={[productDetails.imageUrl, ...productDetails.infoImagesAndVideos[0].images]}/></div>
<div>

</div>
</div> 
</div>
<div className={styles.relatedProductsHeader}>מוצרים קשורים</div>
<div className={styles.relatedProductsWrapper}>
    {!relatedProducts.length>0 && <div className={styles.noRelatedProds}>אין מוצרים קשורים למוצר כרגע</div>}
    {relatedProducts.length>0 &&     
    <Swiper  modules={[Pagination, Navigation]}  breakpoints={{
        220: {
          slidesPerView: 2,
 
          pagination:{ clickable: true },
          navigation:{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }
        },
        768: {
          slidesPerView: 2,
          pagination:{ clickable: true },
          navigation:{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }
 
        },
        1024: {
          slidesPerView: 4,
          pagination:{ clickable: true },
          navigation:{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }
        },
      }}  
     className="mySwiper" slidesPerView={4} observer={true}
     pagination={{ clickable: true }}
     navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
    
      preloadImages={true} 
      >{relatedProducts.map(relatedProduct=>{
        return <SwiperSlide ><ProductDesign key={relatedProduct.imageUrl} title={relatedProduct.title} price={relatedProduct.onDiscount? relatedProduct.newPriceAfterDiscount:relatedProduct.price} src={`http://localhost:8000/images/${relatedProduct.imageUrl}`} description={relatedProduct.description} available={relatedProduct.isAvailable}/></SwiperSlide>
    })}</Swiper>}
     </div>



</div>}
</>
}
export default ProductDetails

//     {/* <img   src={`http://localhost:8000/images/${productDetails.imageUrl}`}  alt={productDetails.title}></img> */}
//     {/* {productDetails.infoImagesAndVideos[0].images.map(images=>{
//     return <img className={styles.sideImages} src={`http://localhost:8000/images/${images}`}></img>
// })} */}
// {/* <RunningImages image={productDetails.imageUrl} images={[productDetails.imageUrl, ...productDetails.infoImagesAndVideos[0].images]}/> */}
// {/* <div className={styles.sideImagesHeader}>תמונות וסרטונים נוספים </div> */}
