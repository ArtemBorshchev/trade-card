import React from 'react';

const Content = ({props}) => {
  return (
    <div>
      <div className="goodInfoTitle">
        <h3>{props.model} <br />
          {props.display} {props.dateFabrick}
        </h3>
      </div>
      <div className="goodInfo">{props.cpu}<br />
        {props.ddrRam} <br />
        {props.videoCard}
      </div>
      <div className="pricePlace">
      <h3>{props.price}</h3></div>
    </div>
  )
}

export default Content;