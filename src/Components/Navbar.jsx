import React from "react";
import "./style/Navbar.css";
import logo from "./images/logo.png";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
library.add(faSearch);
const Navbar = () => {
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
          <li><Link to='/Contact'>Contact</Link></li>
          <li><Link to='/SearchClicked'><FontAwesomeIcon icon="search" className="search"/></Link></li>
        </ul>
      </div>
      <div className="authentification">
        <button className="Btn-login"><Link to='/Login'>log in</Link></button>
        <button className="Btn-register"><Link to='/Register'>register</Link></button>
      </div> 
    </div>
  );
}
 
export default Navbar;