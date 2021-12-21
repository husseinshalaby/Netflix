import '../../App.css';
import React, { useEffect } from 'react';
import Item from './item';
import Aos from 'aos';
import 'aos/dist/aos.css';

const List = ({favorites,toggleItem,list}) => {
  useEffect(()=>{
    Aos.init({ duration: 1000});
  },[])
  return (
    <div>
      <ul className ='event-bubbling'>       
        { 
          list.map((item) =>  {
            return (
              <div data-aos ='fade-up'>
                <li className = {'child'} key ={item.id}> 
                  <Item 
                    favorites={favorites}
                    toggleItem ={toggleItem}
                    item = {item}
                  />
                </li>
              </div>
            )
          })
        }
      </ul>
    </div>
  )
}

export default List

