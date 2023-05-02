import React, {useState} from 'react';
import {ReactComponent as IconCompare} from './compareIcon.svg'
import './compareIcon.css';

const Compare = () => {
  const [size, setSize] = useState("25px");
  const changeSize = () => {
    if (size === "25px") {
      setSize("28px");
    }
    if (size === "28px") {
      setSize("25px");
    }
  }
  return (
    <IconCompare className="compare" fill="grey" width={size} height={size} 
      onMouseEnter={changeSize} onMouseLeave={changeSize}/>
  )
}

export default Compare;