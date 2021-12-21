import '../../App.css';
import  React,{ useState, useEffect, useContext } from 'react';
import LocaleContext from "../../LocaleContext";
import { commentData } from './Data';
import './comment.css';

const Comment = ({ prevComments }) => {

  const {locale} = useContext(LocaleContext);
  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);
  const [comment, setComment] = useState({'commenter': '', 'comment':''});
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
    setComment({...comment,'commenter': name})
  },[name])
  const [comments, setComments] = useState([...prevComments]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setComments([...comments, comment])
    setComment({...comment,'comment':''})
  }
  const setCommentValue = (event) => {
    setComment({...comment,'comment': event.target.value})
  }

  return (
    <div>
      <form className= 'commentForm' onSubmit={handleSubmit}>
        <textarea 
          name = "comment"
          value ={comment['comment']}
          onChange ={setCommentValue}
          id = 'comment-input'
          className="form-control textarea FormInput " 
          rows="1" placeholder={commentData[locale]['placeholder']}
          required
          >
          </textarea>
          <div className='commentButtonWrapper'>
            <button 
              id="submit" 
              className="btn btn-primary btn-circle btn-lg button-submit"
              type="submit"
              >{commentData[locale]['button']}
            </button>
          </div>  
      </form>   
      <div className= 'commentsWrapper' >
        {comments.map((comment)=>{
          return(
            <div className= 'comments'>
              <h3 className = 'commenter'>{comment['commenter']}</h3>
              <p className = 'commentBody'>{comment['comment']}</p>
            </div>
          )
        })}
      </div>
      
  </div>
  )
}

export default Comment