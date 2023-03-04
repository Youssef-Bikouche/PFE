import "./style/Navbar.css";
import React, { useEffect, useState } from "react";
import logo from "./images/logo.png";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

library.add(faSearch);
const Navbar = () => {
  const [islogin,setislogin]=useState(false);//if the user is connected , it  will be true
  const navigate=useNavigate();
  const checkLogin=()=>{
    if(localStorage.getItem('token')==='verified'){
      setislogin(true);
      navigate('/Home');
   }
   else{
    setislogin(false);
   }
  }
  
  const clearLocalStorage = () => {
    localStorage.removeItem('token');
    setislogin(false);//user is not connected , show login and register
    navigate('/Home'); 
    
  };
  useEffect(()=>{
      checkLogin();//chechks the login state on every render
  },[]);

 
  return ( 
    <div className="Navbar">
      <div className="logo"><img src={logo} alt="logo" /></div>
      <div className="links">
        <ul>
          <li><Link to='/Home'>Home</Link></li>
          <li className='department-link'>Départements <span style={{marginLeft: "5px",fontSize: "small"}}>▼</span>
          <div className="departments">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </div>
          </li>
          <li><Link to='/Filiere'>Filieres</Link></li>
          <li><Link to='/Clubs'>Clubs</Link></li>
          <li><Link to='/SearchClicked'><FontAwesomeIcon icon="search" className="search"/></Link></li>
        </ul>
      </div>
      <div className="authentification">
        {islogin?(
       <Link to='/login' className="Btn-register"> <button  onClick={()=>clearLocalStorage()}>log out</button></Link>
        ):(<>
            <Link to='/Login'  className="Btn-login"><button>log in</button></Link>
            <Link to='/Register' className="Btn-register"><button >Register</button></Link>
        </>)}
      
      </div> 
    </div>
  );
}

export default Navbar;
