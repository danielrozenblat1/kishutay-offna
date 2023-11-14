// import React, { useState } from 'react';
// import styles from './NewNavBar.module.css';
// import kishutayLogo from "../../images/kishutayLogoNew.jpeg"
// import { FaInstagram } from 'react-icons/fa';
// import { NavLink } from 'react-router-dom';

// const NewNavBar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <>
//       <div className={styles.navTitleContainer}></div>
//       <nav className={styles.nav}>
//         <ul className={styles.navList}>
//           <NavLink to="/" className={styles.navLink}>
//             <li className={styles.navItem}>
//               <div className={styles.homeIcon}>
//                 <div className={styles.roof}>
//                   <div className={styles.roofEdge}></div>
//                 </div>
//                 <div className={styles.front}></div>
//               </div>
//             </li>
//           </NavLink>
//           <NavLink to="/about" className={styles.navLink}>
//             <li className={styles.navItem}>
//               <div className={styles.aboutIcon}>
//                 <div className={styles.head}>
//                   <div className={styles.eyes}></div>
//                   <div className={styles.beard}></div>
//                 </div>
//               </div>
//             </li>
//           </NavLink>
//           <li className={styles.navItem}>
//             <div className={styles.workIcon}>
//               <a href="https://instagram.com/kishutay_offna?igshid=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">
//                 <FaInstagram className={styles.instagramIcon} />
//               </a>
//             </div>
//           </li>
//           <li className={styles.navItem}>
//             <div className={styles.mailIcon}>
//               <div className={styles.mailBase}>
//                 <div className={styles.mailTop}></div>
//               </div>
//             </div>
//           </li>
//         </ul>
//       </nav>
//     </>
//   );
// };

// export default NewNavBar;
