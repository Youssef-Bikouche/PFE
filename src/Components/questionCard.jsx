import "./style/QuestionCard.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Reponse from "./Reponse";
import { useNavigate} from "react-router-dom";
import { useState } from "react";
library.add(faUser);

const QuestionCard = ({props}) => {
   const [liked,setliked]=useState('none');
   const navigate=useNavigate();
const navigteToreponse=()=>{
   navigate('/Reponse',{state:{props:props}});
}
 return (
  <div className="QuestionCard" key={props.id} >
   <div className='left-side-question'>
      <div className="logo-user"><FontAwesomeIcon icon="user" className="user-icon"/></div>
      <div className="likes" onClick={()=>setliked('red')}>♡</div>
      <div className="likes-number">11</div>
   </div>
   <div className='right-side-question'>
      <div className="info-postage">
            <div className="Nomuser">{props.nom}</div>
            <div className="QuestionDate">Fillière :{props.filiere}</div>
            <div className="QuestionDate">Posted on :{props.posted}</div>
      </div>
      <div className="Question">{props.question}</div>
      <div className="QuestionCard-details">
         <div className="nbr-responses">15 reponse</div>
         <button className="Btn-repondre" onClick={()=>{  navigteToreponse()}}>Repondre</button>
      </div>
   </div>
  </div>

   );
}
 
export default QuestionCard;