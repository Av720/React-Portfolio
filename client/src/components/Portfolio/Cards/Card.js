import React from 'react';
import '../../Portfolio/portfolio.css'




const Card = ({ title, description, image }) => {
    return (
        <div className="card ">
            <img className='card-image'src={image} alt={title} />
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
};

export default Card;
