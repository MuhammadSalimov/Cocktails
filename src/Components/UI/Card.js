import React from 'react'
import classes from "./Card.module.css"
const Card = (props) => {
  const ClASS = props.className + " " + classes.card
  return (
    <div className={ClASS}>
        {props.children}
    </div>
  )
}

export default Card