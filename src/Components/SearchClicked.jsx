import React from "react";
import QuestionCard from "./questionCard";
import FiliereCard from "./Filierecard";
import "./style/SearchClicked.css";
import "./style/Side.css";
import "./style/cour.css";
import waiting from "./images/waiting.gif";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import { faSearch,faClose,faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser,faLock, faWeight} from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import { useEffect,useReducer } from "react";
import axios from "axios";
library.add(faSearch);
library.add(faClose);
library.add(faUser,faLock);


const SearchClicked = ({props}) => {
  const [error, setError] = useState('');
  /*********************************get questions by filiere****************************************/
  const [searchFiliere,setsearchFiliere]= useState('');
  const getQuestionsByfiliere= async event => {
    await axios.post('http://localhost:8080/pfe/src/Components/PHP/QuestionsByFiliere.php',{
      searchFiliere,
    }).then((result)=>{
    setquestions(result.data.data);
    setPopcour(false);
  });}
  useEffect(()=>{
    getQuestionsByfiliere();
  },[searchFiliere]);
  /*****************************Questions pop up******************************* **********************/
  const username=localStorage.getItem('username');
  const [popLogin, setpopLogin] = useState(false);
  const [popQuestion, setpopQuestion] = useState(false);
  const checkLogin=()=>{
    if(localStorage.getItem('token')==='verified'){
      setpopLogin(false);
      setpopQuestion(true);
  }
  else{
    setpopLogin(true);
  }
}
  const clickclose=()=>{
  setpopLogin(false);
  }

  const clickcloseQuestion=()=>{
  setpopQuestion(false);
  }
/******************************************** */
const [popCour,setPopcour]=useState(false);
const [filiereNomCour,setfiliereNomCour]=useState();
const handleCour=(id,filiereNom)=>{
setfilereID(id);
setPopcour(true);
setfiliereNomCour(filiereNom);

// getCourses();

}

const pathCour="/Cours/";
const [cours,setCours]=useState();
const [filiereID,setfilereID]=useState();
useEffect(()=>{

 const getCourses= async event => {
    await axios.post('http://localhost:8080/pfe/src/Components/PHP/Courses.php',{
      filiereID,
    }).then((result)=>{
    setCours(result.data.data);
  });}
  getCourses();
}
,[filiereID]);



const closeCour=()=>{
  setPopcour(false);
}

  /***************************** fetching questions functions *********************************** */
  const [filieres,setfilieres]=useState('');
  useEffect(()=>{
    const getFiliere = async event => {
      await axios.post('http://localhost:8080/pfe/src/Components/PHP/Filiere.php').then((result)=>{
      setfilieres(result.data.data);// utiliser pour le selecteur des filieres dynamiquement
    });}
    const getQuestions= async event => {
      await axios.post('http://localhost:8080/pfe/src/Components/PHP/Questions.php',{
        searchTerm,
      }).then((result)=>{
      setquestions(result.data.data);
    });}
    getFiliere();
    getQuestions();
    // const handleScroll = () => {
    //   if (window.scrollY > 100) {
    //     setScrolled(true);
    //   } else {
    //     setScrolled(false);
    //   }
    // }
    // content.addEventListener('scroll', handleScroll);
  }
  ,[]);
  // const [scrolled,setScrolled]=useState(false);
  // const navbarClassName = `Navbar ${scrolled ? 'Navbar-scrolled' : ''}`;
  /******************************************* *************************************************/
    const [Questions,setquestions]=useState('');
    const [searchTerm,setsearchTerm]= useState('');
  const getQuestions= async event => {
    await axios.post('http://localhost:8080/pfe/src/Components/PHP/Questions.php',{
      searchTerm,
    }).then((result)=>{
    setquestions(result.data.data);
  });}
  const searchQuestion=(event)=>{
    setsearchTerm(event.target.value);
    getQuestions();
  }
  const searchQuestionIcon=()=>{
    getQuestions();
  }
 /*****************************************************************************************************/
 
 const [selectedOption, setSelectedOption] = useState('');
 const [QuestionPosed, setQuestionPosed] = useState('');
 const id=localStorage.getItem('id');
 const PosteQuestion= async event => {
  try {
    await axios.post('http://localhost:8080/pfe/src/Components/PHP/PostedQuestion.php', {
      selectedOption,
      QuestionPosed,
      username,
      id,
    }).then((result)=>{
    if (result.data.data.status=='ok') {
      clickcloseQuestion();
    } 
    });
  } catch (error) {
    setError('An error occurred');}}
  /***************************************************************** */

 /******************************************* returned components ***********************************************************/ 
 return (
  <div className="search-clicked">
    {filieres?.length > 0 ? (
      <div className="Side">
        {filieres.map((filiere) => (
           <div  className="filiere-container" key={filiere.id}>
                      <p> {filiere.nom}</p>
                      <div className="filiere-option">
                                  <div className="courses" onClick={()=>{ handleCour(filiere.id,filiere.nom)}}>cours <span>►</span></div>
                                  <div className="Q&A" onClick={()=>{ setsearchFiliere(filiere.nom)}}>questions <span>►</span></div>
                      </div>
           </div> 
        ))}
      </div>
    ) : (
      <div className="Side">
        <h2>No filiere found</h2>
      </div>
    )}  

      
    <div className="content">
    <div className="back-home-searchClicked"><Link to='/Home'><FontAwesomeIcon icon="home"/></Link></div>
        <div className="Searchbar">
          <input type="search" placeholder="search here" onChange={(event)=>searchQuestion(event)}/>
          <div className="icon-search"><FontAwesomeIcon icon="search" onClick={()=>searchQuestionIcon()} /></div>
          <div className="Pose-question" onClick={()=>{checkLogin()}}>Poser une question ?</div>
        </div>
        {Questions?.length > 0 ? (
          <div className="QuestionsBord">
            {Questions.map((question) => (
              <QuestionCard props={question} />
            ))}
          </div>
        ) : (
          <div className="empty">
             <h1 style={{textAlign: 'center',marginTop: '20px'}}>No Questions found </h1>
             <img className="waiting" src={waiting} alt="⌛"/>            
          </div>
      )}  
    </div>
    <>
    {popLogin?(
    <div className="pop-login">
      <div className="container-popLogin">
        <div className="close-pop"onClick={()=>{clickclose()}}>
          <FontAwesomeIcon icon="close"/>
        </div>   
      <div className="pop-text">Oops ,Login first!</div>
    </div>
    </div>
    ):(
    <>    </>
    )}
    {popQuestion?(
          <div className="container-pop-poseQuestion">
            <div className="post-your-question">
            <div className="close-pop" onClick={()=>{clickcloseQuestion()}}>
            <FontAwesomeIcon icon="close"/>
            </div>
              <label htmlFor="">Choisir la filiere :</label>
              <select onChange={(event)=>setSelectedOption(event.target.value)} >
                    <option value="">Select your filiere</option>
                    {filieres?.length > 0 ? (
                      <>
                        {filieres.map((filiere) => (
                          <option value={filiere.nom}>{filiere.nom}</option>
                        ))}
                        </>
                    ) : (
                      <></>
                    )} 
                  
              </select>
              <label htmlFor="">Poser votre Question:</label>
              <textarea  onChange={(e)=>setQuestionPosed(e.target.value)} className="question" name="" id="" cols="30" rows="10"></textarea>
              <button className="submitQuestion" onClick={()=>{PosteQuestion()}}>Pose</button>
              <label htmlFor="">{error}</label>
            </div>
        </div>
    ):(<>  </>)
 
  }
    </>
{popCour?(
   <>
   {cours?.length > 0 ?(
     <div className="cours">
      <div className="courTitle">{filiereNomCour}</div>
      <div className="close-cour" onClick={()=>{closeCour()}}>
                      <FontAwesomeIcon icon="close"/>
              </div>


   <div className="pdf-container"> 
        {cours.map((cour)=>(
             <div className="pdf-card">   
                  <iframe src="/Cours/1.pdf"
                          width="600" 
                          height="300">
                  </iframe>   
                  <div className="cour-info">
                    <div className="cour-info-section">
                      <div className="cour-info-1">Cour :</div>
                      <div className="cour-info-2">{cour.NomCour}</div>
                    </div>
                    <div className="cour-info-section">
                      <div className="cour-info-1">module :</div>
                      <div className="cour-info-2">{cour.module}</div>
                    </div>
                    <div className="cour-info-section">
                      <div className="cour-info-1">Semester :</div>
                      <div className="cour-info-2">{cour.Semester}</div>
                    </div>
                    <div className="cour-info-section">
                      <div className="cour-info-1">Posted :</div>
                      <div>{cour.date}</div>
                    </div>
                    
                  </div>   
            </div>
        ))}
           </div>
        </div>)
      
      
      :(
        
         <div className="cours">
            <div className="close-cour" onClick={()=>{closeCour()}}>
                            <FontAwesomeIcon icon="close"/>
            </div>
           <span class-name='cours-NotAvaible' style={{fontSize: 'xx-large',fontWeight: 600}}> No cours avaible </span>
        </div>
        
      )
     
  }
  </>
):(
  <>
</>
)
} 
  </div>
  );
}
 
export default SearchClicked;