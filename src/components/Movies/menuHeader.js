import '../../App.css';
import './movies.css';
import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import {SelectData, ButtonData} from './Data';
import LocaleContext from "../../LocaleContext";

const MenuHeader = ({ change, value, showAll, showTrending, showMostViewed,showHighestRating,showMostPopular, filter }) => {
  
  const { locale } = useContext(LocaleContext)

  return (
    <div className ='menuHeader'>
      <select  
        onChange = {change} 
        value= {value}
        name="categories" 
        className="form-select form-select-lg mb-3 select" 
        aria-label=".form-select-lg example" 
        id="category-filter" >
        <option value="">{SelectData[locale]['optionOne']}</option>
        <option value="Action">{SelectData[locale]['optionTwo']}</option>
        <option value="Drama">{SelectData[locale]['optionThree']}</option>
        <option value="Adventure">{SelectData[locale]['optionFour']}</option>
        <option value="Horror">{SelectData[locale]['optionFive']}</option>
        <option value="Comedy">{SelectData[locale]['optionSix']}</option>
        <option value="Crime">{SelectData[locale]['optionSeven']}</option>
        <option value="Kids">{SelectData[locale]['optionEight']}</option>
      </select>
      <ul className="sorting">
        <li>
          <Button 
          onClick= {() => showAll()}
          className="filter-button showAll " 
          variant={filter === 'all' ?"success": "outline-success"}
          >
            {ButtonData[locale]['buttonOne']}
          </Button>
        </li>
        <li>
          <Button 
          onClick= {() => showTrending()} 
          variant={filter === 'Trending' ?"success": "outline-success"} 
          className="filter-button toBeDone ">
            {ButtonData[locale]['buttonTwo']}
          </Button>
        </li>
        <li>
          <Button 
          onClick= {() => showMostViewed()} 
          variant={filter === 'MostViewed' ?"success": "outline-success"} 
          className="filter-button done ">
           {ButtonData[locale]['buttonThree']}
          </Button>
        </li>
        <li>
          <Button 
          onClick= {() => showHighestRating()} 
          variant={filter === 'HighestRating' ?"success": "outline-success"} 
          className="filter-button toBeDone ">
            {ButtonData[locale]['buttonFour']}
          </Button>
        </li>
        <li>
          <Button 
          onClick= {() => showMostPopular()} 
          variant={filter === 'MostPopular' ?"success": "outline-success"} 
          className="filter-button done ">
           {ButtonData[locale]['buttonFive']}
          </Button>
        </li>
      </ul>
    </div>
  )
}

export default MenuHeader
