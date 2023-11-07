import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../Context/CartContext";
import CartItems from "./CartItems";
const Cart = (props) => {
  const { items ,TotalAmount, AddItems , RemoveItems} = useContext(CartContext);

  const AddCartItems = (item)=>{
AddItems({
  ...item,
  amount:1
})
  }
  const RemoveCartItems =(id)=>{
    RemoveItems(id)
  }

  return (
    <React.Fragment>
      {props.BooL && (
        <Modal BOOLFUN={props.SetBooL}>
          <div>
            <ul className={classes["cart-items"]}>
              {items.map((item) => {
                return (
                  <CartItems
                  ADDFun={AddCartItems.bind(null , item)}
                  REMFun={RemoveCartItems.bind(null,item.id)}
                  key={item.id}
                    name={item.name}
                    price={item.price}
                    amount={item.amount}
                  />
                );
              })}
            </ul>
            <div className={classes.total}>
              <span>Total Amount</span>
              <span>${TotalAmount.toFixed(2)}</span>
            </div>
            <div className={classes.actions}>
              <button
                onClick={() => props.SetBooL()}
                className={classes["button--alt"]}
              >
                Close
              </button>
              <button className={classes.button}>Order</button>
            </div>
          </div>
        </Modal>
      )}
    </React.Fragment>
  );
};

export default Cart;
