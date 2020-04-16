import React, { Fragment } from 'react';
import '../style/BackCard.css';

// const BackCard = ({ name, price, description, id, pictureAddress, color, productType }) => {
//   return (
//     <Fragment>
//       <div className='container'>
//         <h2>{color} {productType}</h2>
//       </div>
//     </Fragment>
//   );
// }

const BackCard = ({ name, price, description, id, pictureAddress, color, productType, count, available }) => {
  return (
    <Fragment>
      <div className='img-container'>
        <h2>{name}</h2>
        <p>{color} {productType}</p>
      </div>
      <div>
        <p>2 waiting for repair</p>
        <hr/>
        <p>{available} / {count} available</p>
        <p>for rent</p>
      </div>
    </Fragment>
  );
}

export default BackCard;
