import React from "react";
import Side from "./Side";
import QuestionCard from "./questionCard";
import "./style/SearchClicked.css";
import { library, text } from '@fortawesome/fontawesome-svg-core';
import { faSearch,faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
library.add(faSearch);
library.add(faClose);
const SearchClicked = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [QuestionPosed, setQuestionPosed] = useState('');
  const [popLogin, setpopLogin] = useState(false);
  const [popQuestion, setpopQuestion] = useState(false);
  const [Questions,setquestions]=useState('');
  const [filieres,setfilieres]=useState('');
  const [error, setError] = useState('');
  const [searchTerm,setsearchTerm]= useState('');
  const [searchFiliere,setsearchFiliere]= useState('');
  const username=localStorage.getItem('username');
   /*********************************************************************/
  // const handleSelectChange = (event) => {
  //   setSelectedOption(event.target.value);
  //   console.log(selectedOption);
  // }
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
  useEffect(()=>{
    getFiliere();
    getQuestions();
  }
  ,[Questions]);
  // const handleQuestion=()=>{
  //   const filier=selectedOption;
  //   const Question=QuestionPosed;
  //   const username=localStorage.getItem('username');
  // }
  /***********************************************************/
  const getFiliere = async event => {
  await axios.post('http://localhost:8080/pfe/src/Components/PHP/Filiere.php').then((result)=>{
  // console.log(result.data.data);
  setfilieres(result.data.data);// utiliser pour le selecteur des filieres dynamiquement
});}
  const getQuestions= async event => {
    await axios.post('http://localhost:8080/pfe/src/Components/PHP/Questions.php',{
      searchTerm,
    }).then((result)=>{
    setquestions(result.data.data);
  });}
 /********************************************************* */
  const searchQuestion=(event)=>{
    setsearchTerm(event.target.value);
    getQuestions();
  }
  const searchQuestionIcon=()=>{
    getQuestions();
  }
  localStorage.setItem('filiere',setsearchFiliere);

 /*******************************************/
 const getQuestionsByfiliere= async event => {
  await axios.post('http://localhost:8080/pfe/src/Components/PHP/QuestionsByFiliere.php',{
    searchFiliere,
  }).then((result)=>{
  setquestions(result.data.data);
});}
 /***************************************/
  const PosteQuestion= async event => {
    try {
      await axios.post('http://localhost:8080/pfe/src/Components/PHP/PostedQuestion.php', {
        selectedOption,
        QuestionPosed,
        username,
      }).then((result)=>{
        // console.log(result.data);
      if (result.data.data.status=='ok') {
        clickcloseQuestion();
      } 
      // else if(result.data.data.status=='not ok') {
      //   setError("somthing went wrong");
      // }
      });
    } catch (error) {
      setError('An error occurred');
    }}
 /*************************************************************************/ 
    // const QuestionByFilliere={
    //   v1 :getQuestionsByfiliere(),
    //   v2 :setsearchFiliere,
    // }
 return (
  <div className="search-clicked">
      <div>
      <Side props={setsearchFiliere}/>
      </div>
    <div className="content" data-aos="fade-up">
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
            <h2>No Question found</h2>
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
    </>
    <>
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
  </div>
  );
}
 
export default SearchClicked;