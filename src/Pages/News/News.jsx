import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { FaArrowLeft} from 'react-icons/fa';
import Editors from '../Home/Editors/Editors';
import useTitle from '../../Hooks/useTitle';
const News = () => {
    const detailsNews = useLoaderData();
useTitle("News")
    const {category_id, title, image_url, details } = detailsNews;
    return (
    <div>
            <Card>
        <Card.Img className='p-2' variant="top" src={image_url} />
        <Card.Body>
          <Card.Title className='p-2'>{title}</Card.Title>
          <Card.Text className='p-3'>
            {details}
          </Card.Text>
          <Link to={`/category/${category_id}`}><Button variant="danger"><FaArrowLeft className='m-2'/> All news in this Category</Button></Link>
        </Card.Body>
      </Card>
      <Editors></Editors>
    </div>
   
    );
};

export default News;