import React, { useState } from 'react';
import { NavLink,useLocation,useNavigate } from 'react-router-dom';
import { TweenMax } from 'gsap';
import styles from "./SideNav.module.css"
import ShoppingCartIcon from '../cart/ShoppingCartIcon';
import { IoMdInformationCircleOutline } from 'react-icons/io';
import kishutayLogo from "../../images/kishutayMainLogo.jpeg"
import { FaInstagram,FaFacebook,FaPhone, FaHome, FaWaze,FaLongArrowAltRight, FaShoppingCart,FaBars,FaTimes } from "react-icons/fa";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';


const SideNav = () => {

  const cartId=sessionStorage.getItem("cartId");
  const navigate=useNavigate()
const location=useLocation()

const [sidebarOpen, setSidebarOpen] = useState(false);

const handleSidebarToggle = () => {
  setSidebarOpen(!sidebarOpen);
};



  return ( 
  <div> 
   <div className={`${styles.sidebarToggle} ${sidebarOpen ? styles.open : styles.closed}`}
        onClick={handleSidebarToggle} style={{ position: 'fixed', right: 0, top: 0, bottom: 0, display: "flex", justifyContent: "right" ,zIndex:999, marginRight:"0.5%",marginTop:"1%", transition: "width 0.3s ease"}}>{!sidebarOpen && <NavLink><FaBars onClick={handleSidebarToggle} style={{fontSize:"4vh",color:"black"}} /></NavLink>}</div>
   {sidebarOpen? <div style={{ position: 'fixed' ,right: 0, top: 0, bottom: 0,display:"flex",justifyContent:"right", zIndex: 999  , ...sidebarOpen ? {} : { width: "0",zIndex:0 ,  transition: "all 0.3s ease-out"}}}> 
 
    <Sidebar collapsed={!sidebarOpen}      style={{
            transition: 'width 0.3s ease',
          }} width={window.innerWidth/10}>
    <Menu  className={styles.menu}>
    {sidebarOpen &&  <NavLink  onClick={handleSidebarToggle}>  <MenuItem className={styles.menuItem}><FaTimes style={{fontSize:"4vh",color:"black"}}/></MenuItem></NavLink>}
   
    {sidebarOpen &&   <NavLink  to="/"> <MenuItem className={styles.menuItem}> <FaHome style={{fontSize:"4vh",color:"black"}} /></MenuItem></NavLink>}
    {location.pathname !== '/' && sidebarOpen&&  <NavLink to="#" onClick={() => navigate(-1)}><MenuItem className={styles.menuItem}> < div className={styles.logo}><FaLongArrowAltRight color="black" size={34}/></div></MenuItem></NavLink>}
     {sidebarOpen && <NavLink className={styles.fabrik}  to ="/categories"><MenuItem className={styles.menuItem}><div className={styles.logo}>קטגוריות</div></MenuItem></NavLink>}
     {sidebarOpen &&  <NavLink to="/cart" style={{textDecoration:"none"}}> <MenuItem className={styles.menuItem}><FaShoppingCart style={{fontSize:"4vh",color:"black"}}/> </MenuItem></NavLink>}
     {sidebarOpen &&<a  href="https://www.facebook.com/search/top?q=%D7%A7%D7%99%D7%A9%D7%95%D7%98%D7%99%20%D7%90%D7%95%D7%A4%D7%A0%D7%94%20-%20%D7%97%D7%A0%D7%95%D7%AA%20%D7%91%D7%93%D7%99%D7%9D%20%D7%A8%D7%90%D7%A9%D7%9C%22%D7%A6"  target="_blank" rel="noopener noreferrer"> <MenuItem className={styles.menuItem}> <FaFacebook style={{fontSize:"4vh",color:"black"}}/><div className={styles.logo}></div></MenuItem></a>}
     {sidebarOpen &&  <a href="https://waze.com/ul?q=ז'בוטינסקי%2016%20ראשון%20לציון"  target="_blank" rel="noopener noreferrer"><MenuItem className={styles.menuItem}> <div className={styles.logo}> <FaWaze style={{fontSize:"4vh",color:"black"}}/></div></MenuItem></a>}
     {sidebarOpen && <a href="tel:0544872223"   target="_blank" rel="noopener noreferrer">  <MenuItem className={styles.menuItem}> <div className={styles.logo}><FaPhone style={{fontSize:"4vh",color:"black"}}/></div></MenuItem></a>}
     {sidebarOpen && <a href="https://instagram.com/kishutay_offna?igshid=MzRlODBiNWFlZA=="  target="_blank" rel="noopener noreferrer">   <MenuItem className={styles.menuItem}> <div className={styles.logo}><FaInstagram style={{fontSize:"4vh",color:"black"}}/></div></MenuItem></a>}
     {sidebarOpen &&  <NavLink  className={styles.fabrik}  to ="/about"> <MenuItem className={styles.menuItem}>   <div className={styles.logo}><IoMdInformationCircleOutline style={{fontSize:"4vh",color:"black"}}/></div></MenuItem></NavLink>}
     {sidebarOpen &&   <MenuItem className={styles.menuItem}><img  className={styles.kishutayLogo} src={kishutayLogo}></img> </MenuItem>}
    </Menu>
  </Sidebar>
      </div>: 
        sidebarOpen && (
          <NavLink
      
          onClick={handleSidebarToggle}
          className={styles.sidebarToggleBtn}
            style={{
              border: 'none',
              background: 'none',
              width: '4vh', // Set width for the icon
              height: '4vh', // Set height for the icon
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '4vh',
              color: 'black',
              transition: 'all 0.3s ease-out', // Add transition
            }}
          >
            <FaBars />
          </NavLink>
        )}</div>
  );
};
export default SideNav;

{/* <div className="nav-wrapper">
        <img  className={styles.kishutayLogo} src={kishutayLogo}></img> 
          <div className={styles.logo}><NavLink  className={styles.fabrik}  to ="/about"><IoMdInformationCircleOutline style={{fontSize:"4vh",color:"black"}}/></NavLink></div>
          {/* <div className={styles.logo}><NavLink  className={styles.fabrik}  to ="/categories/upload">העלאת קטגוריות זמנית</NavLink></div>
          <div className={styles.logo}><NavLink  className={styles.fabrik}  to ="/products/upload">העלאת מוצרים זמנית</NavLink></div>
          <div className={styles.logo}><NavLink  className={styles.fabrik}  to ="/group/upload">יצירת קבוצה</NavLink></div> */}
//           <div className={styles.logo}>
//           <a href="https://instagram.com/kishutay_offna?igshid=MzRlODBiNWFlZA=="  target="_blank" rel="noopener noreferrer"> <FaInstagram style={{fontSize:"4vh",color:"black"}}/></a>
//           </div>

//           <div className={styles.logo}><a href="tel:0544872223"  
//           target="_blank" rel="noopener noreferrer"><FaPhone style={{fontSize:"4vh",color:"black"}}/></a>
//           </div>
//           <div className={styles.logo}>
//           <a href="https://waze.com/ul?q=ז'בוטינסקי%2016%20ראשון%20לציון

// "  target="_blank" rel="noopener noreferrer"> <FaWaze style={{fontSize:"4vh",color:"black"}}/></a>
//           </div>

//           <div className={styles.logo}><a href="https://www.facebook.com/search/top?q=%D7%A7%D7%99%D7%A9%D7%95%D7%98%D7%99%20%D7%90%D7%95%D7%A4%D7%A0%D7%94%20-%20%D7%97%D7%A0%D7%95%D7%AA%20%D7%91%D7%93%D7%99%D7%9D%20%D7%A8%D7%90%D7%A9%D7%9C%22%D7%A6"  
//           target="_blank" rel="noopener noreferrer"><FaFacebook style={{fontSize:"4vh",color:"black"}}/></a>
//           </div>

//           <div className={styles.logo}>
//           <NavLink to="/cart" style={{textDecoration:"none"}}> {cartId&& <ShoppingCartIcon/>} <FaShoppingCart style={{fontSize:"4vh",color:"black"}}/></NavLink>
//           </div>
         
       
      

//           <div className={styles.logo}>
//           {/* <div className={styles.logo}><NavLink  className={styles.fabrik}  to ="/discount">הנחה</NavLink></div> */}
//           </div>
      

    //   {/* should be here a logo */}
    //   <div className={styles.logo}><NavLink className={styles.fabrik}  to ="/categories">קטגוריות</NavLink></div>
    //   {location.pathname !== '/' &&< div className={styles.logo}> <NavLink to="#" onClick={() => navigate(-1)}><FaLongArrowAltRight color="black" size={34}/></NavLink></div>}
    //   <div className={`${styles.logo} ${styles.right}`}><NavLink  to="/"><FaHome style={{fontSize:"4vh",color:"black"}} /></NavLink>
    //       </div>
    //     </div>

    // </div> */}