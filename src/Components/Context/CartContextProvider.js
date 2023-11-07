import React, { useReducer } from 'react'
import CartContext from './CartContext'
import Reduce from './Reduce'

const DefaultState = {
    items:[],
    TotalAmount:0
}

const CartContextProvider = (props) => {
    const [state , dispachFN] = useReducer(Reduce ,DefaultState )

    const AddItemsProvider =(item)=>{
      dispachFN({
        type:"ADD",
        Malumot:item
      })
    }   

    const RemoveItemsProvider=(id)=>{
      dispachFN({
        type:"Remove",
        id:id
      })
    }

  return (
    <CartContext.Provider value={{
        items:state.items,
        TotalAmount:state.TotalAmount,
        AddItems:AddItemsProvider,
        RemoveItems:RemoveItemsProvider
    }}>
        {props.children}
    </CartContext.Provider>
  )
}

export default CartContextProvider