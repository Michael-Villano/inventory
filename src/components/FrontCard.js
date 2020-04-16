import React, { Fragment } from 'react';
import '../style/FrontCard.css';

const FrontCard = ({ name, price, description, id, pictureAddress, color, productType, available, count, open, reserved }) => {
  const isOpen = (open) => {
    if(open) {
      return 'Available'
    }
    else return 'Unavailable'

  }
  return (
    <Fragment>
      <div className='img-container'>
        <img src={`${ pictureAddress }`} alt={`${ name }`}/>
      </div>
      <div>
        <h2>{name}</h2>
        <p>{isOpen(open)}</p>
        <p>{reserved} reserved</p>
      </div>
    </Fragment>
  );
}

export default FrontCard;
