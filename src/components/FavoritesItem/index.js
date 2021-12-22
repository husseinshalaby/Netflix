import '../../App.css';
import * as React from 'react';
import { Card,Button } from 'react-bootstrap';
import {BsSuitHeartFill } from 'react-icons/bs';
import {Link} from 'react-router-dom';
import StarRating from '../StarRating';

const FavoritesItem = ({RemoveFromList,name,image, id, rating}) => {

  return (
    <div>
      <Card className = 'card'>
        <Link className = "itemName" to={`/movies/${id}`}><div id='card-img'><Card.Img variant="top" src={image} /></div></Link>
        <Card.Body>
          <Link className = "itemName" to={`/movies/${id}`}><Card.Title>{name}</Card.Title></Link>
          <br/>
          <div className = 'RatingButtonWrapper'>
            <StarRating stars = {rating} />
            <Button onClick={()=>{RemoveFromList(id)}} variant='outline-danger'><BsSuitHeartFill/></Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default FavoritesItem
