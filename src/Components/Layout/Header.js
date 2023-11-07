import React from 'react'
import classes from "./Header.module.css"
import Img from "../Assets/meals.jpg"
import HeaderButton from './HeaderButton'
const Header = (props) => {
  return (
    <header>
        <div className={classes.header}>
            <h1>RectMeals</h1>
            <HeaderButton onClick={props.SetBooL} />
        </div>
        <div className={classes["main-image"]}>
            <img src={Img}  alt="logotip"/>
        </div>
    </header>
  )
}

export default Header