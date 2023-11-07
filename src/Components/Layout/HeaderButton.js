import React, { useContext } from 'react'
import classes from "./HeaderButton.module.css"
import {BsFillCartFill} from "react-icons/bs"
import CartContext from '../Context/CartContext'
const HeaderButton = (props) => {
  const {items} = useContext(CartContext)
  const Miqdori = items.reduce((prev , current)=>{
    return prev + (+current.amount)
  }, 0)

  return (
    <button onClick={()=> props.onClick()} className={classes.button}>
        <span className={classes.icon}> <BsFillCartFill /> </span>
        <span >Your Cart</span>
        <span className={classes.badge} >{Miqdori}</span>
    </button>
  )
}

export default HeaderButton