import '../../App.css';
import React, {useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import { Card,Button } from 'react-bootstrap';
import StarRating from '../StarRating';
import {BsSuitHeartFill,BsSuitHeart ,BsSuitSpade,BsCameraVideo} from 'react-icons/bs';
import {AiOutlineStar,AiOutlineFire} from 'react-icons/ai';
import {Redirect} from 'react-router-dom';
import Comment from '../Comment';
import MoviesNavbar from '../Navbar/MoviesNav';
import MoviesSidebar from '../Sidebar/MoviesSidebar';
import LocaleContext from "../../LocaleContext";

const Movie = ({ favorites, toggleItem, list }) => {
  const { locale } = React.useContext(LocaleContext)

  const [isOpen, setIsOpen] = useState(false);
  const toggleNav = () => {
    setIsOpen(!isOpen);
  };
  let {id} = useParams();
  id = parseInt(id)
  const isFound = favorites.some(element => {
    if (element.id === id) {
      return true;
    }
  });
  const [user, setUser] = useState({});

  useEffect(()=>{
    const u = window.localStorage.getItem('user')
    u ? setUser(u) : setUser(null)
  },[])
  
  const toggle = (id) => {
    toggleItem(id)
  }
  const getProductById =(id) => {
    const product = list.find(item => item.id === id)
    return product
  }
  const product = getProductById(+id)
  if(!product){
    return (
      <Redirect to = '/movies'/>
    )
  }
  if (!user ) {
    return (
      <Redirect to = '/'/>
    )
  }
  const {name, category, link,trending, mostViewed, highestRating, mostPopular, rating, comments} = product

  return (
    <div>
      <MoviesSidebar isOpen={isOpen} toggle ={toggleNav} />
      <MoviesNavbar toggle = {toggleNav} />
      <Card className ='movie-details' >
        <iframe  height="615" src={link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <div className='IconWrapper'>
            {trending ? <span><AiOutlineFire className = 'icon fire'/></span>: null}
            {mostViewed ? <span><BsCameraVideo className = 'icon camera'/></span>: null}
            {highestRating ? <span><AiOutlineStar className = 'icon star'/></span>: null}
            {mostPopular ? <span><BsSuitSpade className = 'icon spade'/></span>: null}
          </div>
          <Card.Text>
            {category[locale]}
          </Card.Text>
           <StarRating stars = {rating}/>
          <br/>
          <Button onClick={()=>{toggle(id)}} variant={isFound===true?"outline-danger":"outline-success"}>{isFound===true?<BsSuitHeartFill/>:<BsSuitHeart/>}</Button>
        </Card.Body>
      </Card>
      < Comment prevComments = {comments}/>
    </div>
  )
}

export default Movie