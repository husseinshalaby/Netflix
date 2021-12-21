import React, { useContext } from 'react';
import './Sidebar.css';
import {FaTimes} from 'react-icons/fa';
import {Link as LinkS} from 'react-scroll';
import {Link as LinkR} from 'react-router-dom';
import LocaleContext from "../../LocaleContext";
import {HomeSidebarData} from './Data';

const Sidebar = ({ toggle, isOpen }) => {
  const { locale } = useContext(LocaleContext)
  return (
    <aside className = {isOpen ? 'SidebarContainer open': 'SidebarContainer close'} isOpen = {isOpen} onClick = {toggle}>
      <div className = 'Icon' onClick = {toggle}>
        <FaTimes className = 'CloseIcon' />
      </div>
      <div className = 'SidebarWrapper'>
        <ul className = 'SidebarMenu'>
          <LinkS className = 'SidebarLink' to='about' onClick = {toggle}>{HomeSidebarData[locale]['about']}</LinkS>
          <LinkS className = 'SidebarLink' to='discover' onClick = {toggle}>{HomeSidebarData[locale]['discover']}</LinkS>
          <LinkS className = 'SidebarLink' to='services' onClick = {toggle}>{HomeSidebarData[locale]['services']}</LinkS>
          <LinkS className = 'SidebarLink' to='signup' onClick = {toggle}>{HomeSidebarData[locale]['FAQ']}</LinkS>
          <LinkS className = 'SidebarLink' to='signup' onClick = {toggle}>{HomeSidebarData[locale]['signup']}</LinkS>
        </ul>
        <div className = 'SideBtnWrap'>
          <LinkR className = 'SidebarRoute' to ='./signin'>{HomeSidebarData[locale]['signin']}</LinkR>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
