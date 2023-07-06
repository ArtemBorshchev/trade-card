import React, {useState} from 'react';
import {ReactComponent as HeartIcon} from './iconFavorit.svg'
import './iconFavorit.css';

const Heart = ({props}) => {
  const [color, setColor] = useState(props.likeIconColor);
  const [state, setBack] = useState(true);
  const [size, setSize] = useState("25px");
  const changeSize = () => {
    if (size === "25px") {
      setSize("28px");
    }
    if (size === "28px") {
      setSize("25px");
    }
  }
  const changeColor = () => {
    if (state) {
      setColor("orange");
      setBack(false);
      props.like = true;
    }
    if (!state) {
      setColor(props.likeIconColor);
      setBack(true);
      props.like = false;
    }
  }
  return (
    <HeartIcon className="heart" fill={color} width={size} height={size} 
      onClick={changeColor} onMouseEnter={changeSize} onMouseLeave={changeSize}/>
  )
}

export default Heart;