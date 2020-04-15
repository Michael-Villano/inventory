import React, { Fragment } from 'react';
import './Card.css'

const Card = ({ name, price, description, id, pictureAddress, color, productType }) => {
	return (
		<Fragment>
				<div className='tc bg-washed-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
					<div className='img-container'>
						<img src={`${ pictureAddress }`} alt={`${ name }`}/>
					</div>
					<div>
						<h2>{name}</h2>
						<p>{price}</p>
						<p>{description}</p>
					</div>
				</div>
		</Fragment>
	);
}

export default Card;
