import "./style/Navbar.css";
import React, { useEffect, useState } from "react";
import logo from "./images/logo.png";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch,faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import CryptoJS from "crypto-js";
import axios from "axios";
library.add(faSearch,faUser);
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
  /************************* */
  const [filieresDUT,setfilieresDUT]=useState('');
  const [filieresLP,setfilieresLP]=useState('');
  useEffect(()=>{
  const getFiliereDUT = async event => {
    await axios.post('http://localhost:8080/pfe/src/Components/PHP/FiliereDUT.php').then((result)=>{
    setfilieresDUT(result.data.data);// utiliser pour le selecteur des filieres dynamiquement
  });}
  const getFiliereLP = async event => {
    await axios.post('http://localhost:8080/pfe/src/Components/PHP/FiliereLP.php').then((result)=>{
    setfilieresLP(result.data.data);// utiliser pour le selecteur des filieres dynamiquement
  });}
  getFiliereDUT();
  getFiliereLP();
  checkRole();
  checkLogin();//checks the login state on every render
  setUsername(localStorage.getItem('username'));
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }
  window.addEventListener('scroll', handleScroll);
},[]);

/********************************** */

const navigteToFiliere=(diplome,id)=>{
   navigate('/Filiere',{state:{id:id,diplome:diplome}});
}
  /********************************** */
  const clearLocalStorage = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('Crypted');
    localStorage.removeItem('username');//maybe comeback here if not working
    setislogin(false);//user is not connected , show login and register
    navigate('/Home'); 
    
  };


  const [scrolled,setScrolled]=useState(false);
  const navbarClassName = `Navbar ${scrolled ? 'Navbar-scrolled' : ''}`;

/********************************************/
const [adminLogedIn,setAdminLogedIn]=useState(false);
const [profLogedIn,setProfLogedIn]=useState(false);
const [username,setUsername]=useState('')
const checkRole=()=>{
  const CryptingKey = "xxx";
  const encryptedData = localStorage.getItem('Crypted');
  if(encryptedData){
  const decryptedData = CryptoJS.AES.decrypt(encryptedData,CryptingKey).toString(CryptoJS.enc.Utf8);
  if(decryptedData==='admin'){
    setAdminLogedIn(true);
    setProfLogedIn(false);
 }
 else if(decryptedData==='professeur'){
  setProfLogedIn(true);
  setAdminLogedIn(false);
 }
 else{
  setAdminLogedIn(false);
  setProfLogedIn(false);
 }
}}

  return ( 
    <div className={navbarClassName} data-aos="fade-up">
      <div className="logo"><img src={logo} alt="logo" /></div>
      <div className="links">
        <ul>
          <li><Link to='/Home'>Home</Link></li>
          <li className='filiere-link'>filieres<span style={{marginLeft: "5px",fontSize: "small"}}>▼</span>
          <div className="filieres">
           <div className="DUT">
               <div >DIPLÔME UNIVERSITAIRE DE TECHNOLOGIE (DUT)</div>
              <div className="DUT-filieres">
              {filieresDUT?.length > 0 ? (
              filieresDUT.map((filiere) => (
                <div onClick={()=>{navigteToFiliere(filiere.Diplome,filiere.id)}}>{filiere.nom}</div>
              ))):(<>
              </>)}
              
               </div>
            </div> 
            <div className="LP">
               <div >LICENCE PROFESSIONNELLE (LP)</div>
              <div className="LP-filieres">
              {filieresLP?.length > 0 ? (
              filieresLP.map((filiere) => (
                <div onClick={()=>{navigteToFiliere(filiere.Diplome,filiere.id)}}>{filiere.nom}</div>
              ))):(<>
              </>)}
               </div>
            </div>
          </div>
          </li>
          <li className="Para">Vie Universitaire
               <div className="Para-options">
              <div><li> <Link to='/Clubs'>Clubs</Link></li></div>
              <div><li> <Link to='/Evenement'> Tournoi</Link></li></div>
               </div>
           </li>
           <li><Link to='/Reviews'>Témoignages</Link></li>
          <li><Link to='/SearchClicked'><FontAwesomeIcon icon="search" className="search"/></Link></li>
        </ul>
      </div>
      <div className="authentification">
        {islogin?(<>

              <div className="icon-user-navbar">
              <FontAwesomeIcon icon="user" className="user"/>
              <p>{username}</p> <span style={{fontSize: 'small'}}>▼</span>

                <div className="user-option">
                  <div className="user-option-ByRole">
                     {adminLogedIn?(
                          <Link to='' className="Btn-logOut Btn-gerer"> <button>Gérer site</button>
                          <div className="gerer-options">
                          <Link to='/Users' className="Btn-logOut"><button>Gestion utilisateurs</button></Link>
                          <Link to='/AjoutFiliere' className="Btn-logOut"><button>Ajouter filière</button></Link>
                          <Link to='/AjoutClub' className="Btn-logOut"><button>Ajouter Club</button></Link>
                          <Link to='/AjouterTournoi' className="Btn-logOut"><button>Ajouter tournoi</button></Link>
                          <Link to='/DeleteFiliere' className="Btn-logOut"><button>Supprimer filiere </button></Link>
                          <Link to='/Reviews' className="Btn-logOut"><button>Supprimer Reviews </button></Link>
                          <Link to='/SearchClicked' className="Btn-logOut"><button>Supprimer Question</button></Link>
                          <Link to='/SupprimerClub' className="Btn-logOut"><button>Supprimer Club</button></Link>
                          <Link to='/Evenement' className="Btn-logOut"><button>Supprimer Tournoi</button></Link>
                          </div>
                          
                          </Link>
                     ):(
                        <div>

                        </div>
                     )

                     }
                     {profLogedIn?(<>
                          <Link to='/Uploadcourse' className="Btn-logOut"><button>Upload Courses</button></Link>
                          <Link to='/SupprimerCourse' className="Btn-logOut"><button>Supprimer Courses</button></Link></>
                     ):(
                        <div>

                        </div>
                     )

                     }
                  <Link to='mailto:este@uca.ma?subject=Demande de document' className="Btn-logOut"> <button>Demande de document</button></Link>
                  </div>
                  <div className="logOut">
                  <Link to='/login' className="Btn-logOut"> <button  onClick={()=>clearLocalStorage()}>Déconnexion</button></Link>
                  </div>
                </div>
              </div>


      </>
        ):(<>
            <Link to='/Login'  className="Btn-login"><button>log in</button></Link>
            <Link to='/Register' className="Btn-register"><button >Register</button></Link>
        </>)
        
        }
      
      </div> 
    </div>
  );
}

export default Navbar;
