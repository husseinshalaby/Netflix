import '../../App.css';
import './movies.css';
import * as React from 'react';
import {BsSuitHeartFill,BsSuitHeart ,BsSuitSpade,BsCameraVideo} from 'react-icons/bs';
import {AiOutlineStar,AiOutlineFire} from 'react-icons/ai';
import { Card,Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import StarRating from '../StarRating';
import LocaleContext from "../../LocaleContext";

const Item = ({favorites,toggleItem,item}) => {
  const { locale } = React.useContext(LocaleContext)

  const {name, category,image, id, inFavorites, trending, mostViewed, highestRating, mostPopular, rating} = item
  let isFound = inFavorites || false
  isFound = favorites.some(element => {
    if (element.id === id) {
      return true;
    }
  });
  const toggle = (id) => {
    toggleItem(id)
  }
  return (
    <div>
      <Card className = 'card'>
        <Link className = "itemName" to={`/movies/${id}`}><div id='card-img'><Card.Img variant="top" src={image} /></div></Link>
        <Card.Body>
          <Link className = "itemName" to={`/movies/${id}`}><Card.Title>{name}</Card.Title></Link>
          <Card.Text>
            {category[locale]}
          </Card.Text>
          <br/>
          <div className='IconWrapper'>
            {trending ? <span><AiOutlineFire className = 'icon fire'/></span>: null}
            {mostViewed ? <span><BsCameraVideo className = 'icon camera'/></span>: null}
            {highestRating ? <span><AiOutlineStar className = 'icon star'/></span>: null}
            {mostPopular ? <span><BsSuitSpade className = 'icon spade'/></span>: null}
          </div>
          <div className = 'RatingButtonWrapper'>
            <StarRating stars = {rating}/>
            <Button onClick={()=>{toggle(id)}} variant={isFound===true?"outline-danger":"outline-success"}>{isFound===true?<BsSuitHeartFill/>:<BsSuitHeart/>}</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Item

