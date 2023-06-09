import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';
import useTitle from '../../../Hooks/useTitle';

const Category = () => {
    useTitle('Home')
    const {id} = useParams();
    const caterogyNews = useLoaderData();
    return (
        <div>
            { !id && <h4 className='text-center p-2'>Dragon News Home</h4>}
           {id && <h5 className='text-center'>Available News: {caterogyNews.length} </h5>}
            {
                caterogyNews.map(news => <NewsCard key={news._id}
                        news={news}
                        ></NewsCard>)
            }
        </div>
    );
};

export default Category;