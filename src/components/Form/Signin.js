import React, { useState, useEffect, useContext } from 'react';
import {Link, Redirect } from 'react-router-dom';
import './Form.css';
import { SignInData} from './Data';
import LocaleContext from "../../LocaleContext";

const SignIn = () => {
  const { locale } = useContext(LocaleContext);
  const [user, setUser] = useState({});
  const [usersArray, setUsersArray] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authenticated,setAuthenticated] = useState(false);
  let isUser = false;
  const checkUser = (user, users) =>{
    users.filter(i =>{
      if(i.email === user.email && i.password ===i.password){
        isUser = true
        setUser(i)
      }
    })
  }
  useEffect(()=>{
    const users = localStorage.getItem('users');
    if(users){
      setUsersArray(JSON.parse(users))
    }
  },[])

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    checkUser(user,usersArray)
    if(isUser === false){
      window.alert('This email and password combination is incorrect try again!')
    }else{
      window.localStorage.setItem('user',JSON.stringify(user))
      window.localStorage.setItem('auth',JSON.stringify('true'))
      setAuthenticated(true)
    }
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
       <Link className = 'Icon' to='/'>Netflix</Link>
        <div className = 'FormWrap'>
          
          <div className = 'FormContent'>
            <form className = 'Form' action ='#' onSubmit={handleLoginSubmit}>
              <h1 className = 'FormH1'>{SignInData[locale]['header']}</h1>
              <label className = 'FormLabel' htmlFor='for'>{SignInData[locale]['email']}</label>
              <input 
              className = 'FormInput'
               type='email' 
               value ={email}
               id="input"
               placeholder={SignInData[locale]['email']}
               onChange ={setEmailValue}
               required/>
              <label className = 'FormLabel' htmlFor='for'>{SignInData[locale]['password']}</label>
              <input 
              className = 'FormInput' 
              type='password'
              value = {password} 
              onChange = {setPasswordValue} 
              placeholder={SignInData[locale]['password']}
              required/>
              <button
              id="submit"  
              className = 'FormButton'
               type ='submit'
               >{SignInData[locale]['button']}</button>
              <span className = 'Text'>{SignInData[locale]['forgotPassword']}</span>
              <Link className = 'NavBtnLink' to ='/register'>{SignInData[locale]['register']}</Link>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignIn
