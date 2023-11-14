import { FaFacebook, FaInstagram,FaPhone, FaWaze,FaUserPlus,FaUser, FaLongArrowAltRight} from "react-icons/fa"
import { IoMdCart} from "react-icons/io"
import { NavLink,useLocation,useNavigate } from "react-router-dom"
import "./NewNavigation.css"
import { useContext } from "react"
import CartContext from "../../context/cart-context"

const NewNavigation=()=>{
    const navigate=useNavigate()
    const location = useLocation();
    const cartId=sessionStorage.getItem("cartId")
 const ctx=useContext(CartContext)
 
 const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


   



return (<ul className="nav ul">


  <li className="li">
    <a className="a" href="tel:0544872223"   target="_blank" rel="noopener noreferrer" >
      <i className=" i">
        <div className = "circle"></div>
      </i>
      <div className = "title"><FaPhone style={{fontSize:"3vw"}}/></div>
    </a>
  </li>

  <li className="li">
    <a className="a"  href="https://waze.com/ul?q=ז'בוטינסקי%2016%20ראשון%20לציון"  target="_blank" rel="noopener noreferrer" >
      <i className=" i">
        <div className = "circle"></div>
      </i>
      <div className = "title"><FaWaze style={{fontSize:"3vw"}}/></div>
    </a>
  </li>
  {!ctx.loggedIn&&<li className="li">
    <NavLink to="/login">
    <a className="a"  >
      <i className=" i">
        <div className = "circle"></div>
      </i>

      <div className = "title">
      <div className="columnIcons">
        <FaUser style={{fontSize:"2vw",margin:"0 auto"}}/>
      <div style={{fontSize:"1.5vw",margin:"0 auto"}}> כניסה למנוי</div></div>
      </div>
    </a>
    </NavLink>
  </li>}

  {!ctx.loggedIn&&<li className="li">
    <NavLink to="/signup">
    <a className="a"  >
      <i className=" i">
        <div className = "circle"></div>
      </i>

      <div className = "title">
      <div className="columnIcons">
        <FaUserPlus style={{fontSize:"2vw",margin:"0 auto"}}/>
      <div style={{fontSize:"1.5vw",margin:"0 auto"}}> הרשם כמנוי </div></div>
      </div>
    </a>
    </NavLink>
  </li>}
  {location.pathname !== '/payment' &&<li className="li">

    <NavLink onClick={ctx.toggleModal}>
    <a className="a">
      <i className="i">
        <div className = "circle"></div></i>
      
      <div className = "title"><div className="row"><IoMdCart style={{fontSize:"3vw"}}/>{ctx.cartLength&&ctx.cartLength}</div> 

  </div>
    </a>
    </NavLink>  
  </li>}

  <li className="li">
    <NavLink to ="/categories">
    <a className="a">
        <i className=" i">
          <div className = "circle"></div></i>
        <div className = "title"> קטגוריות </div>
      </a>
      </NavLink>
  </li>
  {location.pathname !== '/' &&<li className="li">
    <NavLink onClick={() => navigate(-1)} to="#">
    <a className="a">
  
      <i className=" i">

        <div className = "circle"></div>
      
      </i>
      <div className = "title"> <FaLongArrowAltRight color="black" size="2.5vw"/></div>
    </a></NavLink></li>}
  <li className="li">
    <NavLink to="/" onClick={scrollToTop}>
    <a className="a">
        <i className=" i">
          <div className = "circle"></div></i>
        <div className = "title">לדף הבית</div>
      </a>
      </NavLink>
  </li>

  <div className="background"></div>

</ul>)

}
export default NewNavigation