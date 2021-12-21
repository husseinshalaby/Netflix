import React, {useState} from 'react';
import Favorites from '../components/Favorites';
import ScrollToTop from '../components/ScrollToTop';
import MoviesNavbar from '../components/Navbar/MoviesNav';
import MoviesSidebar from '../components/Sidebar/MoviesSidebar';

const FavoritesPage = ({RemoveFromList, list}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <ScrollToTop />
      <MoviesSidebar isOpen={isOpen} toggle ={toggle} />
      <MoviesNavbar toggle = {toggle} />
      <Favorites RemoveFromList ={RemoveFromList} list ={list}/>
    </>
  )
}

export default FavoritesPage
