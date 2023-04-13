import React, { useState, useEffect } from 'react';
import CardList from './Cards/CardList';
import '../Portfolio/portfolio.css'

const Portfolio = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        
        const data = [
            {
                id: 1,
                title: 'Project 1',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                image: '',
            },
            {
                id: 2,
                title: 'Project 2',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                image: '',
            },
            {
                id: 3,
                title: 'Project 3',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                image: '',
            },
        ];

        setCards(data);
    }, []);

    return (
        
        <div id="portfolio" className="portfolio">
            <h1 className='portfolio-header'>My Portfolio</h1>
            <CardList cards={cards} />
        </div>
    );
};

export default Portfolio;
