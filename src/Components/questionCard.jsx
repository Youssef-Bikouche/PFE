import "./style/QuestionCard.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
// import Reponse from "./Reponse";
import { useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
library.add(faUser);
library.add(faHeart);

const QuestionCard = ({props}) => {

const [nbrReponse,setnbrReponse]=useState('0');
const [color, setColor] = useState(false);
function handleLikeColor() {
   setColor(!color);
 }
const myData=props;
const navigate=useNavigate();
const navigteToreponse=()=>{
   navigate('/Reponse',{state:{myData}});
}
const id=props.id;
 useEffect(()=>{
   const getnbrReponses= async event => {
      await axios.post('http://localhost:8080/pfe/src/Components/PHP/nbrReponse.php',{
        id,
      }).then((result)=>{
         setnbrReponse(result.data.data[0][0]);
     
    });}
   getnbrReponses();
 })

 return (
  <div className="QuestionCard" key={props.id} >
   <div className='left-side-question'>
      <div className="logo-user"><FontAwesomeIcon icon="user" className="user-icon"/></div>
      <div className="likes" ><FontAwesomeIcon className={'likes ' + (color ? 'liked-heart' :'')} onClick={()=>handleLikeColor()} icon="heart"/></div>
      {/* <div className="likes-number">11</div> */}
   </div>
   <div className='right-side-question'>
      <div className="info-postage">
            <div className="Nomuser">{props.nom}</div>
            <div className="QuestionDate">Fillière :{props.filiere}</div>
            <div className="QuestionDate">Posted on :{props.posted}</div>
      </div>
      <div className="Question">{props.question}</div>
      <div className="QuestionCard-details">
         <div className="nbr-responses">Reponses : {nbrReponse}</div>
         <button className="Btn-repondre" onClick={()=>{navigteToreponse()}}>Repondre</button>
      </div>
   </div>
  </div>

   );
}
 
export default QuestionCard;