import React, {useState} from 'react';
import Movies from '../components/Movies';
import ScrollToTop from '../components/ScrollToTop';
import MoviesNavbar from '../components/Navbar/MoviesNav';
import MoviesSidebar from '../components/Sidebar/MoviesSidebar';

const MoviesPage = ({favorites,toggleItem,list}) => {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <ScrollToTop />
      <MoviesSidebar isOpen={isOpen} toggle ={toggle} />
      <MoviesNavbar toggle = {toggle} />
      <Movies toggleItem ={toggleItem} list ={list} favorites = {favorites}/>
    </>
  )
}

export default MoviesPage
