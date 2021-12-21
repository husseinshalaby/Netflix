import React, { useState, useEffect, useContext } from 'react';
import {Link, Redirect } from 'react-router-dom';
import './Form.css';
import LocaleContext from "../../LocaleContext";
import { RegisterData } from './Data';

const Register = () => {

  const { locale } = useContext(LocaleContext)
  const [user, setUser] = useState({})
  const [usersArray, setUsersArray] = useState([]);
  useEffect(()=>{
    const users = localStorage.getItem('users');
    if(users){
      setUsersArray(JSON.parse(users))
    }
  },[])

  const [authenticated,setAuthenticated] = useState(false)
  const handleRegisterSubmit = (event) => {
    event.preventDefault();
      window.localStorage.setItem('user',JSON.stringify(user))
      window.localStorage.setItem('users',JSON.stringify([...usersArray,user]))
      window.localStorage.setItem('auth',JSON.stringify('true'))
      setAuthenticated(true)
  }
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [phone,setPhone] = useState('')
  const [password,setPassword] = useState('')

  const setNameValue = (event) => {
    setName(event.target.value)
    setUser({...user,'name': event.target.value})
  }
  const setPhoneValue = (event) => {
    setPhone(event.target.value)
    setUser({...user,'phone': event.target.value})
  }
  const setEmailValue = (event) => {
    setEmail(event.target.value)
    setUser({...user,'email': event.target.value})
  }
  const setPasswordValue = (event) => {
    setPassword(event.target.value)
    setUser({...user,'password': event.target.value})
  }

  if(authenticated === true){
    return (<Redirect to='/movies'/>)
  }
  return (
    <>
      <div className = 'Container'>
        <div className = 'FormWrap'>
          <Link className = 'Icon' to='/'>Netflix</Link>
          <div className = 'FormContent'>
            <form className = 'Form' action ='#' onSubmit={handleRegisterSubmit}>
              <h1 className = 'FormH1'>{RegisterData[locale]['header']}</h1>
              <label className = 'FormLabel' htmlFor='for'>{RegisterData[locale]['name']}</label>
              <input 
              value ={name}
              onChange ={setNameValue} 
              type="text" 
              placeholder={RegisterData[locale]['name']} 
              className = 'FormInput' />
              <label className = 'FormLabel' htmlFor='for'>{RegisterData[locale]['email']}</label>
              <input 
               className = 'FormInput'
               type='email' 
               value ={email}
               id="input"
               placeholder={RegisterData[locale]['email']}
               onChange ={setEmailValue}
               required/>
              <label className = 'FormLabel' htmlFor='for'>{RegisterData[locale]['phone']}</label>
              <input 
              value ={phone} 
              onChange ={setPhoneValue} 
              type="text" 
              placeholder={RegisterData[locale]['phone']}
              className='FormInput' />
              <label className = 'FormLabel' htmlFor='for'>{RegisterData[locale]['password']}</label>
              <input 
              className = 'FormInput' 
              type='password'
              value = {password} 
              onChange = {setPasswordValue} 
              placeholder={RegisterData[locale]['password']}
              required/>
              <button
              id="submit"  
              className = 'FormButton'
               type ='submit'
               >{RegisterData[locale]['button']}</button>
              <span className = 'Text'>{RegisterData[locale]['forgotPassword']}</span>
              <Link className = 'NavBtnLink' to ='/signin'>{RegisterData[locale]['signin']}</Link>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
