import React from 'react';
import Card from '../Cards/Card'
import '../../Portfolio/portfolio.css'




const CardList = ({ cards }) => {
    return (
        <div className="card-list">
            {cards.map((card) => (
                <Card
                    key={card.id}
                    title={card.title}
                    description={card.description}
                    image={card.image}
                />
            ))}
        </div>
    );
};

export default CardList;
