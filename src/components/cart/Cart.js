import React, {useState} from 'react';
import {ReactComponent as CartIcon} from './cart.svg';
import './cart.css';

const Cart = ({props}) => {
  const [size, setSize] = useState("30px");
  const changeSize = () => {
    if (size === "30px") {
      setSize("33px");
    }
    if (size === "33px") {
      setSize("30px");
    }
  }
  const [color, setColor] = useState(props.cartColor);
  const [state, setBack] = useState(true);
  const changeColor = () => {
    if (state) {
      setColor("green");
      setBack(false);
      props.cartAdd = true;
    }
    if (!state) {
      setColor(props.cartColor);
      setBack(true);
      props.cartAdd = false;
    }
  }
  return (
    <CartIcon fill={color} width={size} height={size} className="cart" 
      onClick={changeColor} onMouseEnter={changeSize} onMouseLeave={changeSize}/>
  )
}

export default Cart;