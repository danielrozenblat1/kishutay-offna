
import Container from './UI/Container';
import AboutUs from './UI/AboutUs';
import Shop from './components/Shop';
import { BrowserRouter,NavLink,Route, Routes } from 'react-router-dom';
import ScrollReveal from 'scrollreveal';
import UploadContainer from './components/UploadContainer';
import CategorieDetails from './components/CategorieDetails';
import UploadProductForm from './components/UploadProductForm';
import SubCategoryProducts from './UI/SubcategoryProducts';
import ProductDetails from './UI/product/ProductDetails';
import CartContainer from './UI/cart/CartContainer';
import CartContext from './context/cart-context';
import { useContext } from 'react';
import DiscountPage from './components/discountForms/DiscountPage';
import PaymentPage from './UI/cart/PaymentPage';
import AddGroupForm from './components/groups/AddGroupForm';
import Group from './components/groups/Group';
import BehindTheScenes from './UI/BehindTheScenes';
import Directions from './UI/Directions';
import { useEffect } from 'react';
import ErrorPage from './components/errors/ErrorPage';
import CartOpeningModal from './UI/cart/CartOpeningModal';
import AboutUsContainer from './UI/aboutus/AboutUsContainer';
import SignUpPage from './components/signup/SignUpPage';
import LoginPage from './components/login/LoginPage';
import LoggedInDiv from './components/login/LoggedInDiv';
import AfterPayment from './UI/cart/AfterPayment';
import OrdersHistory from './UI/cart/OrdersHistory';
import Benefits from './UI/cart/Benefits';

const App = ()=>{
    useEffect(()=>{
        const sr = ScrollReveal();
        sr.reveal('.scroll-reveal', {
          duration: 1000,
          distance: '30px',
          origin: 'bottom',
          easing: 'ease-out',
        });
    },[])

const ctx=useContext(CartContext)
console.log(ctx)
return <BrowserRouter>
{ctx.cartModalOpen &&<CartOpeningModal/>}
{ctx.loggedIn&&<LoggedInDiv/>} 
<Routes>
<Route path="/" exact Component={Container}> </Route>
<Route path="/about" exact Component={AboutUsContainer}> </Route>
<Route path="/categories" exact Component={Shop}> </Route>
<Route path="/categories/upload" exact Component={UploadContainer}> </Route>
<Route path="/categories/:id" exact Component={CategorieDetails}></Route>
<Route path="/categories/:id/:subCat" exact Component={SubCategoryProducts}></Route>
<Route path="/products/upload" exact Component={UploadProductForm}></Route>
<Route path="/products/:title" exact Component={ProductDetails}></Route>
<Route path="/cart" exact Component={CartContainer}> </Route>
<Route path="/discount" exact Component={DiscountPage}> </Route>
<Route path="/payment" exact Component={PaymentPage}> </Route>
<Route path="/group/upload" exact Component={AddGroupForm}></Route>
<Route path="/group/:title" exact Component={Group}></Route>
<Route path="moreAboutUs" exact Component={BehindTheScenes}></Route>
<Route path="directions" exact Component={Directions}></Route>
<Route path="/signup" exact Component={SignUpPage}></Route>
<Route path="error" exact element={<ErrorPage statusCode={404} error="page not found"/>}></Route>
<Route path="/login" exact Component={LoginPage}></Route>
<Route path="/paid" exact Component={AfterPayment}></Route>
<Route path="/ordersHistory" exact Component={OrdersHistory}></Route>
<Route path="myBenefits" exact Component={Benefits}></Route>
</Routes>


 </BrowserRouter>

}

export default App;
