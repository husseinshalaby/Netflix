import '../../App.css';
import React, { useState, useEffect } from 'react';
import FavoritesItem from '../FavoritesItem';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "./Favorites.css";
import SwiperCore, { EffectCoverflow, Pagination, Navigation } from "swiper/core";
import {Redirect} from 'react-router-dom';

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

const Favorites = ({RemoveFromList,list}) => {
  const [user, setUser] = useState({});

  useEffect(()=>{
    const u = window.localStorage.getItem('user')
    u ? setUser(u) : setUser(null)
  },[])
  if (!user ) {
    return (
      <Redirect to = '/'/>
    )
  }
  return (
    <div>
      
        {!list.length 
        ? <h1>Your List is empty </h1>
        :
        <div>
          <ul className ='event-bubbling cart'> 
            <div className="container">
              <Swiper
                navigation={true}
                effect={"coverflow"}
                centeredSlides={true}
                slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
                loop={true}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true
                }}
                pagination={{
                  clickable: true
                }}
                className="mySwiper"
              >
              { 
              list.map((item) =>  {
                return (
                  <li className = {'child'} key ={item.id}> 
                    <SwiperSlide>                
                    <FavoritesItem 
                      RemoveFromList={RemoveFromList}
                      name = {item.name}
                      rating = {item.rating}
                      image = {item.image}
                      id={item.id}
                    />
                    </SwiperSlide>
                  </li>
                )
              })
            }
              </Swiper>
            </div>      
          </ul>
        </div>
        }
    </div>
   
  )
}

export default Favorites