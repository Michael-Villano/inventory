import React, { Fragment } from 'react';
import '../style/FrontCard.css';

const FrontCard = ({ brand, name, price, description, id, pictureAddress, color, productType, available, count, open, reserved }) => {
  const isOpen = (open) => {
    if(open) {
      return 'Available'
    }
    else return 'Unavailable'
  }

  const isAvailable = (open) => {
    if(!open) {
      return 'b red';
    }
    return 'b green';
  }

  return (
    <div className='card-content-container'>
      <div className='img-container'>
        <img src={`${ pictureAddress }`} alt={`${ name }`}/>
      </div>
      <div>
        <h2>{name}</h2>
        <p>{color} {brand}</p>
        <hr/>
        <p className={isAvailable(open)}>{isOpen(open)}</p>
      </div>
    </div>
  );
}

export default FrontCard;
