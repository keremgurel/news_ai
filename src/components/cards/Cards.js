import React from 'react'
import NewsCard from '../newsCard/NewsCard';

const Cards = ({ articles }) => {
    return (
        <div>
            { articles.map((article, i) => (
                <NewsCard />
            ))}
        </div>
    )
}

export default Cards;

