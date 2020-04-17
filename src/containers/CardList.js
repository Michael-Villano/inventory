import React, { Fragment } from 'react';
import Card from '../components/Card';

const CardList = ({ products }) => {
  return (
    <div>
      {
        products.map((product, i) => {
          return (
            <Card
              key={products[i].id} 
              name={products[i].name} 
              price={products[i].price}
              description={products[i].description}
              id={products[i].id}
              pictureAddress={products[i].pictureAddress}
              color={products[i].color}
              productType={products[i].productType}
              available={products[i].available}
              count={products[i].count}
              open={parseInt(products[i].available) > 0}
              reserved={products[i].reserved}
              brand={products[i].brand}
            />
        )})
      }
    </div>
  )
}

export default CardList;
