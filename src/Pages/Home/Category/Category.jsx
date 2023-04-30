import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {
    const {id} = useParams();
    const caterogyNews = useLoaderData();
    return (
        <div>
            <h4 className='text-center p-2'>Dragon News Home</h4>
            <h5 className='text-center'>Available News: {caterogyNews.length} </h5>
            {
                caterogyNews.map(news => <NewsCard key={news._id}
                        news={news}
                        ></NewsCard>)
            }
        </div>
    );
};

export default Category;