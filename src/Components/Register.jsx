import "./style/Register.css";
import wave from "./images/wave.png";
import avatar from "./images/avatar.png";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faHome);
// library.add(faPassword)

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
      handleSubmit(event);
    }
    else{
      setError("confirm password inccorect");
    }
  }
  const navigate=useNavigate();
  const handleSubmit = async event => {
  
    try {
      const response = await axios.post('http://localhost:8080/pfe/src/Components/PHP/register.php', {
        username,
        password,
        nom,
        prenom,
        email,
      }).then((result)=>{
        console.log(result.data.data.status);
      if (result.data.data.status=='valid') {
        console.log('register successful');
       navigate("/Login");
      } else {
       alert(error);
        setError(result.data.data.status);
        console.log(error);
      }
      });
      
    } catch (error) {
      setError('An error occurred');
    }
   } 
  return ( 
<div className="Register-container">
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
                    <div className="input"><input type="text" required onChange={(event)=>{setusername(event.target.value)}}/></div>
            </div>
            <div className="email">
                    <div className="inputIcon">Email:</div>
                    <div className="input"><input type="text" required onChange={(event)=>{setemail(event.target.value)}}/></div>
            </div>
            <div className="passwordd">
                    <div className="inputIcon">Password:</div>
                    <div className="input"><input type="password" required onChange={(event)=>{setpassword(event.target.value)}}/></div>
            </div>
            <div className="passwordd">
                    <div className="inputIcon">Confirm Password:</div>
                    <div className="input"><input type="password" required onChange={(event)=>{setConfirmPassword(event.target.value)}}/></div>
            </div>
            <button onClick={()=>{checkRequired()}}>Register</button>
           <div className="Register-error"> <label >{error}</label></div>
      </div>
    </div>
   );
}
 
export default Loginn;