import React, { useState, useEffect, useContext } from 'react';
import './Navbar.css';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import {FaBars} from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import LocaleContext from "../../LocaleContext";
import { animateScroll as Scroll } from 'react-scroll';
import { HomeNavData } from './Data';

const Navbar = ({ toggle }) => {
  const { locale, toggleLocale } = useContext(LocaleContext)
  const [scrollNav, setScrollNav] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(()=>{
    const u = window.localStorage.getItem('user')
    u ? setUser(u) : setUser(null)
  },[])

  const changeNav = () => {
    if(window.scrollY >= 80){
      setScrollNav(true)
    }else{
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll',changeNav)
  }, [])

  const toggleHome = () => {
    Scroll.scrollToTop();
  }
  return (
    <>
      <IconContext.Provider value ={{color: '#fff'}}>
        <nav className = {scrollNav ? 'Nav ScrollNav' : 'Nav NavBg'} scrollNav ={scrollNav}>
          <div className = 'NavbarContainer'>
            <LinkR className = 'NavLogo' to ='/' 
            onClick ={toggleHome}
            >
              Netflix
            </LinkR>
            <div className = 'MobileIcon' onClick ={toggle}>
              <FaBars />
            </div >
            <ul className = 'NavMenu'>
              <li className = 'NavItem'>
                <LinkS className = 'NavLinks' to='about'
                  Smooth= {true}
                  duration= {500} 
                  spy={true} 
                  exact='true' 
                  offset={-80}
                >{HomeNavData[locale]['about']}</LinkS>
              </li> 
              <li className = 'NavItem'>
                <LinkS className = 'NavLinks' to='discover'
                  Smooth= {true}
                  duration= {500} 
                  spy={true} 
                  exact='true' 
                  offset={-80}
                >{HomeNavData[locale]['discover']}</LinkS>
              </li> 
              <li className = 'NavItem'>
                <LinkS className = 'NavLinks' to='services'
                  Smooth= {true}
                  duration= {500} 
                  spy={true} 
                  exact='true' 
                  offset={-80}
                >{HomeNavData[locale]['services']}</LinkS>
              </li> 
              <li className = 'NavItem'>
                <LinkS className = 'NavLinks' to='accordion'
                  Smooth= {true}
                  duration= {500} 
                  spy={true} 
                  exact='true' 
                  offset={-80}
                >{HomeNavData[locale]['FAQ']}</LinkS>
              </li> 
              <li className = 'NavItem'>
                <LinkS className = 'NavLinks' to='signup'
                  Smooth= {true}
                  duration= {500} 
                  spy={true} 
                  exact='true' 
                  offset={-80}
                >{HomeNavData[locale]['signup']}</LinkS>
              </li> 
            </ul>
            <nav className = 'NavBtn'>
              {
                user === null ?
                <LinkR className = 'NavBtnLink' to ='/signin'>{HomeNavData[locale]['signin']}</LinkR>
                : <LinkR className = 'NavBtnLink' to ='/movies'>{HomeNavData[locale]['movies']}</LinkR>
              }
              <button onClick={toggleLocale} className = 'NavBtnLink' >{HomeNavData[locale]['language']}</button>
            </nav>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
