import React, {useState} from 'react';
import './goods.css';
import Content from './goodInfo/Content';
import './makeContent.js';
import objGood from './makeContent.js';

const Good = ({props}) => {
  const [goodsPicture, setPicture] = useState(props.photo.first);
  const [state, setBack] = useState(true);
  const showGoods = () => {
    if (state) {
      setPicture(props.photo.second);
      setBack(false);
    }
    if (!state) {
      setPicture(props.photo.first);
      setBack(true);
    }
  }
  return (
    <div>
      <Content props={objGood}/>
      <img className="goods" src={goodsPicture} alt="goods" 
        onMouseEnter={showGoods} onMouseLeave={showGoods}></img>
    </div>
    
  )
}

export default Good;