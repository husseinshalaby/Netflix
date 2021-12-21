import '../../App.css';
import React ,{ useState, useEffect } from 'react';
import List from './list';
import MenuHeader from './menuHeader';
import { Redirect } from 'react-router-dom';

const Movies = ({ favorites, toggleItem, list }) => {

  const [value ,setValue] = useState('');
  const [filter, setFilter] = useState('all');
  const [filteredList, setFilteredList] = useState([]);

  const [user, setUser] = useState({});
  useEffect(()=>{
    const u = window.localStorage.getItem('user')
    u ? setUser(u) : setUser(null)
  },[])

  const change = (event) => {
    setValue(event.target.value)
    setFilter('all');
  }

  const showAll = () => { setFilter('all') }
  const showTrending = () => { setFilter('Trending') }
  const showMostViewed = () => { setFilter('MostViewed') }
  const showHighestRating = () => { setFilter('HighestRating') }
  const showMostPopular = () => { setFilter('MostPopular') }
  useEffect(()=>{
    let newArr = list
    newArr = list.filter((item) => {
      if (value != 'all'){return item['category']['en'].includes(value)}
      else{return item['category']['en']}
    }).filter((i) => {
      if (filter === 'Trending') {return i['trending']}
      else if (filter === 'MostViewed') {return i['mostViewed']}
      else if (filter === 'HighestRating') {return i['highestRating']}
      else if (filter === 'MostPopular') {return i['mostPopular']}
      else if (filter === 'all') {return i}
    })
    setFilteredList(newArr)
  },[filter,value,list])
  if (!user ) {
    return (
      <Redirect to = '/'/>
    )
  }
    return (
      <React.Fragment>
        <MenuHeader 
          change = {change} 
          value = {value}
          showAll = {showAll}
          showTrending = {showTrending}
          showMostViewed = {showMostViewed}
          showHighestRating = {showHighestRating}
          showMostPopular = {showMostPopular}
          filter = {filter}
        />
        <List 
        className="list"
        favorites={favorites} 
        toggleItem ={toggleItem} 
        list = {filteredList} 
        /> 
      </React.Fragment>
    )  
}

export default Movies
