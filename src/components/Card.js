import React, { Component, useState, Fragment } from 'react';
import ReactCardFlip from 'react-card-flip';
import FrontCard from './FrontCard.js';
import BackCard from './BackCard.js';

// const Card = ({ name, price, description, id, pictureAddress, color, productType }) => {
// 	return (
// 		<Fragment>
// 				<div className='tc bg-washed-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
// 					<FrontCard 
// 					name= { name }
// 					price= { price }
// 					description= { description }
// 					id= { id }
// 					pictureAddress= { pictureAddress }
// 					color= { color }
// 					productType= { productType }
// 					/>
// 				</div>
// 		</Fragment>
// 	);
// }

// export default Card;

const Card = ({ name, price, description, id, pictureAddress, color, productType, count, available, open, reserved }) => {
	const [isFlipped, setIsFlipped] = useState(!true);

	const handleClick = () => {
		setIsFlipped(!isFlipped);
	};

	return (
		<div className='dib'>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      	<div onClick={handleClick}
      	className='tc bg-washed-blue br3 pa3 ma2 grow bw2 shadow-5'>
	        <FrontCard
	        	name= { name }
						price= { price }
						description= { description }
						id= { id }
						pictureAddress= { pictureAddress }
						color= { color }
						productType= { productType }
						count= { count }
						available= { available }
						open= {open}
						reserved= {reserved}
	        />
        </div>
 
        <div 
        onClick={handleClick}
        className='tc bg-washed-blue br3 pa3 ma2 grow bw2 shadow-5'
        >
          <BackCard
	        	name= { name }
						price= { price }
						description= { description }
						id= { id }
						pictureAddress= { pictureAddress }
						color= { color }
						productType= { productType }
						count= { count }
						available={ available }
	        />
        </div>
      </ReactCardFlip>
    </div>
    )
}

export default Card;
