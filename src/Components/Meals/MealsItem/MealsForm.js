import React, { useRef } from 'react'
import classes from "./MealsForm.module.css"
import Input from '../../UI/Input'
const MealsForm = (props) => {
  const amount = useRef()
  const SubmitForm =(e)=>{
    e.preventDefault()
    props.FFF(amount.current.value)
  }
  return (
    <form onSubmit={SubmitForm}  className={classes.form}>
        <Input ref={amount} input={{type:"number" , min:1 , defaultValue:1, max:5 , label:"Amount" , id:"amount"}} />
        <button>
           + Add
        </button>
    </form>
  )
}

export default MealsForm