import "./style/loginn.css";
import wave from "./images/wave.png";
import avatar from "./images/avatar.png";
import videolast from "./images/videolast.mp4";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser,faLock, faWeight} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faUser,faLock);
// library.add(faPassword)

const Loginn = () => {
  const [error, setError] = useState('');
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const navigate=useNavigate();
  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/pfe/src/Components/PHP/login.php', {
        username,
        password,
      }).then((result)=>{
        console.log(result.data.data.status);
      if (result.data.data.status=='valid') {
        console.log('Login successful');
        navigate("/Home");
      } else {
        setError(result.data.data.status);
      }
      });
      
    } catch (error) {
      setError('error password or username incorrect');
    }
   } 
  return ( 
<div className="Login-container">
        <video className='video-logo' autoPlay loop muted width= '500px' height= '500px' >
        <source src={videolast} type="video/mp4"/>
        </video>
      <div className="back-home"><Link to='/Home'><FontAwesomeIcon icon="home"/></Link></div>
      <img className='wave-login' src={wave} alt="" />
      <div className="login-form">
        <div className="login-pic"><img className='avatar' src={avatar} alt="" /></div>
          <label htmlFor="">Welcome Back !</label>
          <div className="username">
            <div className="user"><FontAwesomeIcon icon="user"/></div>
             <div><input type="text" placeholder="Username" onChange={(event)=>{setusername(event.target.value)}} required/></div>
          </div>
          <div className="password">
            <div className="lock"><FontAwesomeIcon icon="lock"/></div>
            <div><input type="password" placeholder="Password" required onChange={(event)=>{setpassword(event.target.value)}}/></div>
          </div>
          <div style={{color: "green",fontWeight: '500'}}><Link to='/Register'>Create an account ?</Link></div>
          
          <button onClick={(event)=>{handleSubmit(event)}} className="LoginButton">Login</button>
          <div className="Register-error"> <label >{error}</label></div>
      </div>
    </div>
   );
}
 
export default Loginn;