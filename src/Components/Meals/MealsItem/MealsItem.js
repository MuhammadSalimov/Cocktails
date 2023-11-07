import React, { useContext } from 'react'
import classes from "./Mealsitem.module.css"
import MealsForm from './MealsForm'
import CartContext from '../../Context/CartContext'
const MealsItem = (props) => {
const { name ,description ,price} = props

  const SendFunction = useContext(CartContext) 
  const SendCart = (amount)=>{
    SendFunction.AddItems({
      ...props,
      amount
    })
  }
  return (
    <div className={classes.meal}>
        <div>
        <h3>{name}</h3>
        <div className={classes.description}>
            {description}
        </div>
        <div className={classes.price}>
            {price}
        </div>
        </div>
        <div>
        <MealsForm FFF={SendCart} />
        </div>
    </div>
  )
}

export default MealsItem