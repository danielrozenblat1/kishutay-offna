
import React, { createContext } from "react"
import { useState,useContext ,useEffect} from "react";

const CartContext=React.createContext({
   
cartLength:0,
loggedIn:false,
cartModalOpen:false,
subName:"",
subLastName:"",
gettingCart:async(cartId)=>{},
updatingTheCart:(productCounter,productTitle,cartId,price,productImage)=>{},
productTotalPrice:(productTitle,productCounter,productPrice)=>{},
calculateTotals:(cartProducts)=>{},
deleteProduct:async(productTitle,cartId)=>{},
updateCartLength:()=>{},
closeCartModal:()=>{},
toggleModal:()=>{} ,     
  login:async(userName,password)=>{},
  logout:()=>{} ,
  reachedDiscount:false,
  checkIfReachedDiscount:async(firstName,lastName)=>{},
  cancelSumDiscount:()=>{},
  cancelCountDiscount:()=>{},
  isSubClickedToDiscount:async(firstName,lastName)=>{}
})
export const CartContextProvider=(props)=>{

    const [cartLength,setCartLength]=useState(0)
    const [loggedIn,setLoggedIn]=useState(false)
    const [cartModalOpen,setCartModalOpen]=useState(false)
    const [subFirstName,setSubFirstName]=useState("")
    const [subLastName,setSubLastName]=useState("")
    const [reachedCountDiscount,setReachedCountDiscount]=useState(false)
    const [reachedSumDiscount,setReachedSumDiscount]=useState(false)
    
    const now=new Date()
    useEffect(()=>{
        if(sessionStorage.getItem("loggedIn")){
            setLoggedIn(true)
        }
       const firstName=sessionStorage.getItem("firstName")
       const lastName=sessionStorage.getItem("lastName")
       setSubFirstName(firstName)
       setSubLastName(lastName)
    },[])
    const gettingCart= async function gettingCart(cartId) {
        const response = await fetch(`http://localhost:8000/cart/getCart?cartId=${cartId}`);
        const cart = await response.json();
        setCartLength(cart.cartItems.length)
        return cart.cartItems;
      };
      const cancelSumDiscount=()=>{
        setReachedSumDiscount(false)
      }
      const cancelCountDiscount=()=>{
        setReachedCountDiscount(false)
      }
      const updatingTheCart=(productCounter,productTitle,cartId,price,productImage)=>{
    
        const cartData={
            productTitle:productTitle,
            quantity:productCounter,
            cartId:cartId,
            price:price,
            imageUrl:productImage,
            totalPrice:productCounter*price
        }
        console.log(cartData)
    fetch("http://localhost:8000/cart/update",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(cartData)
    })
    };
    const productTotalPrice=(productTitle,productCounter,productPrice)=>{
const totalPrice=productCounter*productPrice
return totalPrice
    };
    const login=async(userName,password)=>{

        const response = await fetch(`http://localhost:8000/sub/getSub?userName=${userName}&password=${password}`)
        const data=await response.json()
        console.log(data)
        if(data.message){
          alert("שם משתמש או סיסמא אינם נכונים")
          return null
        }
         setLoggedIn(true)
         setSubFirstName(data.firstName)
         setSubLastName(data.lastName)
         sessionStorage.setItem("loggedIn",true)
         sessionStorage.setItem("firstName",data.firstName)
         sessionStorage.setItem("lastName",data.lastName)
         sessionStorage.setItem("cartId",data.cartId)
         sessionStorage.setItem("userId",data.userId)
        return true
    };
    const logout=()=>{
        setLoggedIn(false)
        setSubFirstName("")
        setSubLastName("")
        sessionStorage.removeItem("loggedIn")
        sessionStorage.removeItem("firstName")
        sessionStorage.removeItem("lastName")
    }
    const calculateTotals=(cartProducts)=>{
        let totalPrice=0;
        let totalMeters=0;
        for (const prod in cartProducts){
         
      totalPrice=totalPrice+Number(cartProducts[prod].totalPrice)
      totalMeters=totalMeters+Number(cartProducts[prod].quantity)
        }
        return {price:totalPrice,meters:totalMeters}
      };
      const updateCartLength=(how)=>{
        if(how==="plus"){
            setCartLength(prevCart=>{
                return prevCart+1
            })
            setCartModalOpen(true)
        }
        if(how==="minus"){
            setCartLength(prevCart=>{
                return prevCart-1
            })
            setCartModalOpen(true)
        }
        if(how==="same"){
            setCartLength(prevCart=>{
return prevCart
            })
        
        }
       
      };
      const closeCartModal=()=>{
        setCartModalOpen(false)
      }
      const toggleModal=()=>{
        setCartModalOpen(prevModal=>{
            return !prevModal
        })
      };
      const checkIfReachedDiscount=async(firstName,lastName)=>{
        if(!firstName||!lastName){
          return;
        }
const response =await fetch(`http://localhost:8000/sub/getSubByName?firstName=${firstName}&lastName=${lastName}`)
const data=await response.json()
console.log(data)
if(data.realCountForDiscount>=5){
  setReachedCountDiscount(true)
  if(!sessionStorage.getItem("expiration date for orders count")){
    const countNewDate=now.setDate(now.getDate() + 90);
    sessionStorage.setItem("expiration date for orders count",countNewDate)
  }
}
if(data.realSumForDiscount>=5000){
  setReachedSumDiscount(true)
  if(!sessionStorage.getItem("expiration date for orders sum")){
    const sumNewDate= now.setDate(now.getDate() + 90);
 sessionStorage.setItem("expiration date for orders sum",sumNewDate)
  }
}
return {ordersNum:data.orderCount,totalSum:data.totalSum ,reachedCountDiscount:reachedCountDiscount,reachedSumDiscount:reachedSumDiscount}
      }
      
      const isSubClickedToDiscount=async(firstName,lastName)=>{
        if(!firstName||!lastName){
          return;
        }
        const response =await fetch(`http://localhost:8000/sub/getSubByName?firstName=${firstName}&lastName=${lastName}`)
        const data=await response.json()
        return {sumDiscount:data.deserveSumDiscount,countDiscount:data.deserveCountDiscout}
      }
      const deleteProduct=async (productTitle,cartId)=>{
        const response = await fetch("http://localhost:8000/cart/delete",{
            method:"DELETE",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({cartId:cartId,productTitle:productTitle})
        })
       const updatedCart= await response.json()
      setCartLength(prevCart=>{
        return prevCart-1
      })
 
      return updatedCart.cart
      };

      return <CartContext.Provider value={{isSubClickedToDiscount:isSubClickedToDiscount,cancelSumDiscount:cancelSumDiscount,cancelCountDiscount:cancelCountDiscount,checkIfReachedDiscount:checkIfReachedDiscount,reachedSumDiscount:reachedSumDiscount,reachedCountDiscount:reachedCountDiscount,logout:logout,firstName:subFirstName,lastName:subLastName,login:login,loggedIn:loggedIn,toggleModal:toggleModal,closeCartModal:closeCartModal,cartModalOpen:cartModalOpen,updateCartLength:updateCartLength,cartLength:cartLength,gettingCart:gettingCart,updatingTheCart:updatingTheCart,productTotalPrice:productTotalPrice,calculateTotals:calculateTotals,deleteProduct:deleteProduct}}>{props.children}</CartContext.Provider>
}



export default CartContext