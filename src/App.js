import React, {useState, useEffect, useMemo } from 'react';
import './App.css';
import Home from './pages';
import SigninPage from './pages/signin';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RegisterPage from './pages/register';
import MoviesPage from './pages/movies';
import GetAll from "./api/movies";
import Movie from './components/Movie';
import FavoritesPage from './pages/favorites';
import LocaleContext from "./LocaleContext";

const App = () => {

  const [movies, setMovies] = useState([])
  
  useEffect(()=>{
    GetAll().then( 
      data =>{setMovies(data)
      })
  },[])
  
  const [favorites , setFavorites] = useState([])
  useEffect(()=>{
    const data = window.localStorage.getItem("favorites");
    if(data){
      setFavorites(JSON.parse(data))
    }
  },[])

  const addToList = (id) => {
    const selectedItem = movies.find(item => item.id == id)
    selectedItem.quantity = 1
    window.localStorage.setItem("favorites",[...favorites, selectedItem])
    setFavorites([...favorites, selectedItem])
  }

  React.useEffect(()=>{
    window.localStorage.setItem("favorites",JSON.stringify(favorites))
  })
  const RemoveFromList = (id) => {
    const filteredFavorites = favorites.filter(item => item.id !== id)
    setFavorites(filteredFavorites)
  }
  const toggleItem = (id) => {
    const itemInfavorites = favorites.find(item => item.id === id)
    if(!itemInfavorites){
      addToList(id)
    }else{
      RemoveFromList(id)
    }
  }
  const [locale, setLocale] = useState('en')

  const toggleLocale = () => {
    setLocale((locale) => {
      return locale === 'en' ? 'ar' : 'en'
    })
  }
  const value = useMemo(() => ({
    locale,
    toggleLocale
  }), [locale])

  return (
    <LocaleContext.Provider value={value}>
      <Router>
        <Switch>
          <Route path = '/' component = {Home} exact />
          <Route path = '/signin' component = {SigninPage} exact />
          <Route path = '/register' component = {RegisterPage} exact />
          <Route exact path = "/movies">
            <MoviesPage toggleItem ={toggleItem} list ={movies} favorites = {favorites}/>
          </Route>
          <Route exact path = "/favorites">
            <FavoritesPage list = {favorites} RemoveFromList ={RemoveFromList}/>
          </Route>
          <Route exact path = "/movies/:id" >
            <Movie toggleItem ={toggleItem} list ={movies}favorites = {favorites}/>
          </Route>
        </Switch>
      </Router>
    </LocaleContext.Provider>
  )
}

export default App
