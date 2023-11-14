
import React, { createContext } from "react"
import { useState } from "react";

const CounterContext=React.createContext({


    gettingCart : async function gettingCart(cartId) {
        const response = await fetch(`http://localhost:8000/cart/getCart?cartId=${cartId}`);
        const cart = await response.json();

        return cart.cartItems.length;
      },

})

export default CounterContext