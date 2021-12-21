import React, { useContext } from 'react';
import './InfoSection.css';
import { Button } from '../ButtonElement';
import LocaleContext from "../../LocaleContext";

const InfoSection = ({ lightBg, id, imgStart, lightText, darkText, en, ar, img, alt, primary, dark, dark2,}) => {

  const { locale } = useContext(LocaleContext)
  return (
    <>
      <div className = {lightBg ? 'InfoContainer lightBack': 'InfoContainer darkBack'} lightBg = {lightBg} id = {id}>
        <div className = 'InfoWrapper'>
          <div className = {imgStart ? 'InfoRow imgStart': 'InfoRow imgEnd'} imgStart={imgStart}>
            <div className = 'Column1'>
              <div className = 'TextWrapper'>
                <p className = 'TopLine'>{locale === 'en' ? en['topLine'] : ar['topLine']}</p>
                <h1 className = {lightText ? 'Heading lightText': 'Heading darkText'} lightText = {lightText}>{locale === 'en' ? en['headline'] : ar['headline']}</h1>
                <p className = {darkText ? 'Subtitle darkText': 'Subtitle lightText'} darkText ={darkText}>{locale === 'en' ? en['description'] : ar['description']}</p>
                <div className = 'BtnWrap'>
                  <Button 
                    to='home'
                    smooth = {true}
                    duration = {500}
                    spy ={true}
                    exact = 'true'
                    offset = {-80}
                    primary = {primary ? 1:0}
                    dark ={dark? 1: 0}
                    dark2 = {dark2? 1:0}
                    > {locale === 'en' ? en['buttonLabel']: ar['buttonLabel']}</Button>
                </div>
              </div> 
            </div>
            <div className = 'Column2'>
              <div className = 'ImgWrap'>
                <img className = 'Img' src ={img} alt ={alt}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default InfoSection
