import React, { useState, useEffect, useContext } from 'react';
import './Navbar.css';
import { Link as LinkR } from 'react-router-dom';
import {FaBars} from 'react-icons/fa';
import {BsSuitHeartFill } from 'react-icons/bs';
import LocaleContext from "../../LocaleContext";
import {MoviesNavData} from './Data';
import {animateScroll as Scroll} from 'react-scroll';

const MoviesNavbar = ({ toggle }) => {
  const { locale } = useContext(LocaleContext)
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if(window.scrollY >= 80){
      setScrollNav(true)
    }else{
      setScrollNav(false)
    }
  }
  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState('');
  useEffect(()=>{
    const u = window.localStorage.getItem('user')
    const allUsers = window.localStorage.getItem('users')
    u ? setUser(JSON.parse(u)) : setUser(null)
    allUsers ? setUsers(JSON.parse(allUsers)) : setUsers([]);  
  },[])

  const filteredUser = users.filter((i)=>{
    if(i['email'] == user['email']){
      return i
    }
  })
  let name;
  if (filteredUser.length)  {
    name = filteredUser[0]['name'] 
  } else{
    name = 'username'
  } 
  useEffect(()=>{
    setUsername(name)
  },[name])
  useEffect(() => {
    window.addEventListener('scroll',changeNav)
  }, [])

  const toggleHome = () => {
    Scroll.scrollToTop();
  }

  const logout = () => {
    window.localStorage.removeItem('user');
  }
  return (
    <>
        <nav id= 'MoviesNav' className = {scrollNav ? 'MoviesNav Nav ScrollNav' : 'MoviesNav Nav NavBg'} scrollNav ={scrollNav}>
          <div className = 'NavbarContainer'>
            <LinkR className = 'NavLogo' to ='/' 
            onClick ={toggleHome}
            >
              Netflix
            </LinkR>
            <div className = 'MobileIcon' onClick ={toggle}>
              <FaBars />
            </div >
            <nav className = 'NavBtn'>
             <p className = 'username NavLogo'>{username}</p>
              <LinkR className = 'NavLogo'
               to ='/favorites'>
               <a >
                <BsSuitHeartFill className ='favoritesIcon' />
               </a>
               </LinkR>
               <LinkR className = 'NavLogo'
               className = 'NavBtnLink' 
               to ='/movies'
               >
                  {MoviesNavData[locale]['movies']}
               </LinkR>
               <LinkR id = 'NavButton' className = 'NavLogo '
               className = 'NavBtnLink' 
               to ='/'
               onClick = {logout}
               >
                  {MoviesNavData[locale]['logout']}
               </LinkR>
            </nav>
          </div>
        </nav>
    </>
  )
}

export default MoviesNavbar
