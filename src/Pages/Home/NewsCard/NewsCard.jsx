import moment from "moment";
import React from "react";
import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaShareAlt, FaBookmark, FaEye , FaRegStar, FaStar} from 'react-icons/fa';
import Rating from "react-rating";

const NewsCard = ({ news }) => {
  const { _id, total_view, title, author, image_url, details,rating } = news;
  return (
    <Card className="mb-4">
      <Card.Header className="d-flex align-items-center justify-content-center">
      <Image style={{height:'40px', width:'40px'}} src={author?.img} roundedCircle />
  
  <div className="ps-2 flex-grow-1">
        <p className="mb-0 fw-bold">{author?.name}</p>
        <p><small>{moment(author?.published_date).format('YYYY-MM-D')}</small></p>
      </div>
      <div className="p-2">
        <FaBookmark />
        <FaShareAlt/>
      </div>

      </Card.Header>
      <Card.Body>
        <Card.Title className="p-2">{title}</Card.Title>
        <Card.Img className="p-2" variant="top" src={image_url} />
        <Card.Text className="p-3">
      { details.length < 250 ? <>{details}</> : <>{details.slice(0,250)}... <Link to={`/news/${_id}`}>Read More </Link> </>} 
        </Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex align-items-center justify-content-center">
        <div className="flex-grow-1 p-2">
        <Rating
  placeholderRating={rating.number}
  emptySymbol={<FaRegStar/>}
  placeholderSymbol={<FaStar className="text-warning"/>}
  fullSymbol={<FaStar/>}
/>
            <span className="p-2">{rating.number}</span>
        </div>
        <div><FaEye/> {total_view}</div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;
