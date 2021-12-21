import React, { useContext } from 'react';
import './Services.css';
import { Data } from './Data';
import LocaleContext from "../../LocaleContext";
import Icon1 from '../../images/svg-6.svg';
import Icon2 from '../../images/svg-1.svg';
import Icon3 from '../../images/svg-4.svg';

const Services = () => {
  const {locale} = useContext(LocaleContext);
  return (
    <div className = 'ServicesContainer' id ='services' >
      <h1 className = 'ServicesH1'>
        {Data[locale]['name']}
      </h1>
      <div className = 'ServicesWrapper'>
      <div className = 'ServicesCard'>
        <img className = 'ServicesIcon' src ={Icon1}/>
        <h2 className = 'ServicesH2'>{Data[locale]['obj1']['ServicesH2']}</h2>
        <p className = 'ServicesP'>
        {Data[locale]['obj1']['ServicesP']}
        </p>
      </div>
      <div className = 'ServicesCard'>
        <img className = 'ServicesIcon' src ={Icon2}/>
        <h2 className = 'ServicesH2'>{Data[locale]['obj2']['ServicesH2']}</h2>
        <p className = 'ServicesP'>
       { Data[locale]['obj2']['ServicesP']}
        </p>
      </div>
      <div className = 'ServicesCard'>
        <img className = 'ServicesIcon' src ={Icon3}/>
        <h2 className = 'ServicesH2'>{Data[locale]['obj3']['ServicesH2']}</h2>
        <p className = 'ServicesP'>
        {Data[locale]['obj3']['ServicesP']}
        </p>
      </div>
      </div>
    </div >
  )
}

export default Services
