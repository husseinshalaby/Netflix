import React, { useState, useContext } from 'react';
import { Data } from './Data';
import LocaleContext from "../../LocaleContext";
import { FiPlus, FiMinus } from 'react-icons/fi';
import './accordion.css';

const Accordion = () => {

  const {locale} = useContext(LocaleContext)
  const [clicked, setClicked] = useState(false)
  const toggle = (id) => {
    if (clicked === id) {
      return setClicked(null)
    }
    setClicked(id)
  }

  return (
    <div id = 'accordion'className ='accordion-container'>
      { Data[locale].map((item)=>{
        return(
          <div className = 'accordion-element'>
            <div className ='accordion-question'onClick = {() => toggle(item.id)} key={item.id}>
              <h1>{item.question}</h1>
              <span >{clicked === item.id ? <FiMinus className = 'accordion-icon' /> : <FiPlus className = 'accordion-icon' /> }</span>
            </div>
            {
              clicked === item.id ? (
                <p className = 'accordion-answer'>{item.answer}</p>
              ):
              null
            } 
          </div>
        )
      })}
    </div>
  )
}

export default Accordion
