import "./style/Reponse.css";
import QuestionCard from "./questionCard";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser,faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link,useLocation } from 'react-router-dom';
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
library.add(faUser,faHome);
const Reponse = () => {
  const username=localStorage.getItem('username');
  const [error,setError]=useState('');
  const location = useLocation();
  const dataQuestion = location.state.myData;
  
  /********************************************* */
  const [Reponses,setReponses]=useState('');

  /******************************************** */
  const [color, setColor] = useState(false);
/******************************** */
  const [popLogin, setpopLogin] = useState(false);
  const [popQuestion, setpopQuestion] = useState(false);
  const checkLogin=()=>{
  if(localStorage.getItem('token')==='verified'){
      setpopLogin(false);
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

  /******************************* */
  useEffect(()=>{
    checkLogin();
    const idQuestion=dataQuestion.id;
    const getReponses= async event => {
      await axios.post('http://localhost:8080/pfe/src/Components/PHP/getReponses.php',{
        idQuestion,
      }).then((result)=>{
      setReponses(result.data.data);
    });}
    getReponses();
  }
  ,[]);

  /**************************************** */
  const [reponse,setReponse]=useState('')
  const PostAnswer= async event => {
    const idQuestion=dataQuestion.id;
    if (username.length!=0 && idQuestion.length!=0 && reponse.length!=0) {
      try {
        await axios.post('http://localhost:8080/pfe/src/Components/PHP/PostReponse.php', {
          username,
          reponse,
          idQuestion,
        }).then((result)=>{
          console.log(result);
        if (result.data.data.status=='ok') {
  
        } 
        });
      } catch (error) {
        setError('An error occurred');
      }}
    }
    



  /******************************************** */
 return ( 
  <div className="reponse-container">
     <div className="back-toQuestion"><Link to='/SearchClicked'><FontAwesomeIcon icon="home"/></Link></div>
                          <div className="QuestionCard" key={dataQuestion.id} >
                <div className='left-side-question'>
                    <div className="logo-user"><FontAwesomeIcon icon="user" className="user-icon"/></div>
                    <div className="likes-number">11</div>
                </div>
                <div className='right-side-question'>
                    <div className="info-postage">
                          <div className="Nomuser">{dataQuestion.nom}</div>
                          <div className="QuestionDate">Fillière :{dataQuestion.filiere}</div>
                          <div className="QuestionDate">Posted on :{dataQuestion.posted}</div>
                    </div>
                    <div className="Question">{dataQuestion.question}</div>
                    <div className="QuestionCard-details">
                      <div className="nbr-responses">15 reponse</div>
                  </div>
                </div>
                </div>
    {popLogin? 
    <div className="pop-login">
      <div className="container-popLogin">
        <div className="close-pop"onClick={()=>{clickclose()}}>
          <FontAwesomeIcon icon="close"/>
        </div>   
      <div className="pop-text">Oops ,Login first!</div>
      </div>
    </div>
    :(
      <div className="inputResponse">
      <div className="input">
         <textarea  onChange={(event)=>setReponse(event.target.value)} name="" id="" cols="110" rows="10" placeholder="post your answer here!"></textarea>
      </div>
      <div className="posteResponse">
        <button className="Btn-postResponse" onClick={()=>PostAnswer()}>Post</button>
      </div>
      </div>
    )
    }
    <div className="reponses">
          {Reponses?.length > 0 ? (
            <>
            {Reponses.map((Reponse) => (
            <div className="ResponseCard" key={Reponse.id} >
                                  <div className='left-side-Response'>
                                    <div className="logo-user"><FontAwesomeIcon icon="user" className="user-icon"/></div>
                                    <div className="likes"></div>
                                  </div>
                                  <div className='right-side-Response'>
                                    <div className="infoResponse-postage">
                                          <div className="Nomuser">{Reponse.nom}</div>
                                          <div className="ReponseDate">Posted on :{Reponse.posted}</div>
                                    </div>
                                    <div className="Response">{Reponse.reponse}</div>
                                    <div className="ResponseCard-details">
                                    </div>
                                  </div>
                                </div>
            ))}
            </>
        ):(
                                  <div>
                                  
                                  </div>
                                )}
            </div>
  </div>
  );
}
 
export default Reponse;