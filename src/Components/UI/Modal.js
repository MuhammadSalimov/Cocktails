import React from 'react'
import  ReactDOM  from 'react-dom'
import classes from "./Modal.module.css"
const Modal = (props) => {

    const Backdrop = (props)=>{
        return <div onClick={()=> props.onClick()} className={classes.Backdrop}>{props.children}</div>
    }
    const ModalOverlay = (props)=>{
        return <div className={classes.modal}>{props.children}</div>
    }

    
  return (
    <React.Fragment>
        {
            ReactDOM.createPortal(<Backdrop onClick={props.BOOLFUN} /> , document.getElementById('modal'))
        }
        {
            ReactDOM.createPortal(<ModalOverlay children={props.children} /> , document.getElementById('modal'))
        }
    </React.Fragment>
  )
}

export default Modal