import React, { useState, useContext } from 'react';
import { Data } from './Data';
import LocaleContext from "../../LocaleContext";
import './HeroSection.css';
import {MdArrowForward ,MdKeyboardArrowRight} from 'react-icons/md';
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElement';

const HeroSection = () => {
  const { locale } = useContext(LocaleContext)
  const [hover, setHover] = useState(false)
  const onHover = () => {
    setHover(!hover)
  }
  return (
    <div className = 'HeroContainer' id ='home'>
      <div className = 'HeroBg'>
        <video className = 'VideoBg' 
          autoPlay 
          loop 
          muted 
          src= {Video} 
          type = 'vide/mp4'
        />
      </div>
      <div className = 'HeroContent'>
        <h1 className = 'HeroH1'>
          {Data[locale]['HeroH1']}
        </h1>
        <p className = 'HeroP'>
          {Data[locale]['HeroP']}
        </p>
        <div className = 'HeroBtnWrapper'>
          <Button 
          to='signup' 
          onMouseEnter = {onHover} 
          onMouseLeave ={onHover}
          primary = 'true'
          dark = 'true'
          Smooth= {true}
          duration= {500} 
          spy={true} 
          exact='true' 
          offset={-80}
          >
          {Data[locale]['HeroBtnWrapper']}{hover? <MdArrowForward className = 'ArrowForward' /> : < MdKeyboardArrowRight className = 'ArrowRight'/>}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
