import React, { useContext } from 'react';
import './Sidebar.css';
import {FaTimes} from 'react-icons/fa';
import {Link as LinkR} from 'react-router-dom';
import {BsSuitHeartFill } from 'react-icons/bs';
import LocaleContext from "../../LocaleContext";
import {MoviesSidebarData} from './Data';

const MoviesSidebar = ({toggle, isOpen}) => {
  const { locale } = useContext(LocaleContext)

  const logout = () => {
    window.localStorage.removeItem('user');
  }
  return (
    <aside className = {isOpen ? 'SidebarContainer open': 'SidebarContainer close'} isOpen = {isOpen} onClick = {toggle}>
      <div className = 'Icon' onClick = {toggle}>
        <FaTimes className = 'CloseIcon' />
      </div>
      <div className = 'SidebarWrapper'>
        <div className = 'SideBtnWrap'>
          <LinkR className = 'SidebarRoute' to ='/' onClick = {logout}>{MoviesSidebarData[locale]['logout']}</LinkR>
          <LinkR className = 'SidebarRoute' to ='/movies'>{MoviesSidebarData[locale]['movies']}</LinkR>
          <LinkR className = 'SidebarRoute' to ='./favorites'><BsSuitHeartFill className='SidebarRouteIcon' /></LinkR>
        </div>
      </div>
    </aside>
  )
}

export default MoviesSidebar
