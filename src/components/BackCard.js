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

const BackCard = ({ inRepair, name, price, description, id, pictureAddress, color, productType, count, available, reserved }) => {
  return (
    <div className='card-content-container'>
      <div className='img-container'>
        <h2>{name}</h2>
        <hr/>
        <p>{reserved} reserved</p>
        <p>{inRepair} waiting for repair</p>
        <hr/>
      </div>
      <div>
        <p>None due back today</p>
        <p>{parseInt(count) - parseInt(available) - parseInt(reserved) - parseInt(inRepair)} currently out</p>
        <p>{available} / {count} available</p>
        <p>for rent</p>
      </div>
    </div>
  );
}

export default BackCard;
