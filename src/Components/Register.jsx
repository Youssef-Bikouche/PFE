import "./style/Register.css";
import wave from "./images/wave.png";
import avatar from "./images/avatar.png";
import videolast from "./images/videolast.mp4";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faHome);

const Loginn = () => {
  const [error, setError] = useState('');
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [nom, setnom] = useState('');
  const [prenom, setprenom] = useState('');
  const [email, setemail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const checkRequired=(event)=>{
  if(username.length>=1 && email.length>=11 && nom.length>=1 && prenom.length>=1){
   if(confirmPassword.length<=4 && password.length<=4){
    setError('Short password ! try again');
   }
    else{
      checkpassword(event);
    }
  }
  else{
    setError('Veuillez remplir tous les champs !');
  }
  }
  const checkpassword=(event)=>{
    if(password===confirmPassword){
      handleRegister(event);
    }
    else{
      setError("confirm password inccorect");
    }
  }
  const navigate=useNavigate();
  const handleRegister = async event => {
    try {
      const response = await axios.post('http://localhost:8080/pfe/src/Components/PHP/register.php', {
        username,
        password,
        nom,
        prenom,
        email,
      }).then((result)=>{
      if (result.data.data.status=='valid') {
       navigate("/Login");
      } else if(result.data.data.status=='already exist') {
        setError(result.data.data.status);
      }
      else {
         setError(result.data.data.status);
       }
      });
      
    } catch (error) {
      setError('An error occurred');
    }
   } 
  return ( 
<div className="Register-container">
        <video className='video-logo' autoPlay loop muted width= '500px' height= '500px' >
        <source src={videolast} type="video/mp4"/>
        </video>
      <div className="back-home"><Link to='/Home'><FontAwesomeIcon icon="home"/></Link></div>
      <img className='wave-login' src={wave} alt="" />
      <div className="Register-form">
        <div className="login-pic"><img className='avatar' src={avatar} alt="" /></div>
          <label htmlFor="">Welcome !</label>
                <div className="nom" >
                    <div className="inputIcon">Nom:</div>
                    <div className="input"><input type="text" required onChange={(event)=>{setnom(event.target.value)}}/></div>
                </div>
                <div className="prenom">
                    <div className="inputIcon">Prenom:</div>
                    <div className="input"><input type="text" required onChange={(event)=>{setprenom(event.target.value)}}/></div>
                </div>
            <div className="usernamee">
                    <div className="inputIcon">Username:</div>
                    <div className="input"><input type="text" required onChange={(event)=>{setusername(event.target.value)}} placeholder='Must be unique'/></div>
            </div>
            <div className="email">
                    <div className="inputIcon">Email:</div>
                    <div className="input"><input type="text" required onChange={(event)=>{setemail(event.target.value)}} placeholder='Exemple@gmail.com' /></div>
            </div>
            <div className="passwordd">
                    <div className="inputIcon">Password:</div>
                    <div className="input"><input type="password" required onChange={(event)=>{setpassword(event.target.value)}} placeholder='Must have at least 5 characters'/></div>
            </div>
            <div className="passwordd">
                    <div className="inputIcon">Confirm Password:</div>
                    <div className="input"><input type="password" required onChange={(event)=>{setConfirmPassword(event.target.value)}}/></div>
            </div>
            <button onClick={()=>{checkRequired()}} className="RegisterButton">Register</button>
           <div className="Register-error"> <label >{error}</label></div>
      </div>
    </div>
   );
}
export default Loginn;