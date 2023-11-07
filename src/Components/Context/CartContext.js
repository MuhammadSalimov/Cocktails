import React from 'react'

const CartContext = React.createContext({
    items:[],
    TotalAmount:0,
    AddItems:()=>{},
    RemoveItems:()=>{}
})

export default CartContext