import "./style/QuestionCard.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import CryptoJS from "crypto-js";
library.add(faUser);


const QuestionCard = ({props}) => {
   
const [nbrReponse,setnbrReponse]=useState('0');
const myData=props;
const id=props.id;
const navigate=useNavigate();
const navigteToreponse=()=>{
   navigate('/Reponse',{state:{myData}});
}
 useEffect(()=>{
   const getnbrReponses= async event => {
      await axios.post('http://localhost:8080/pfe/src/Components/PHP/nbrReponse.php',{
        id,
      }).then((result)=>{
         setnbrReponse(result.data.data[0][0]);
     
    });}
   getnbrReponses();
   checkAdmin();
 })
  /******************************** */
  const [adminDeleteQuestion,setadminDeleteQuestion]=useState(false);
   const checkAdmin=()=>{
      const CryptingKey = "xxx";
      const encryptedData = localStorage.getItem('Crypted');
   if(encryptedData){
      const decryptedData = CryptoJS.AES.decrypt(encryptedData,CryptingKey).toString(CryptoJS.enc.Utf8);
    if(decryptedData === "admin"){
      setadminDeleteQuestion(true);
    }
    else{
      setadminDeleteQuestion(false);
    }

  }}
  const DeleteQuestion=async (id)=>{
  await axios.post("http://localhost:8080/pfe/src/Components/PHP/PhpAdmin/DeleteQuestion.php",{
   id,
   }).then(()=>{
    navigate('/SearchClicked');
   });
  }
 return (
  <div className="QuestionCard" key={props.id} >
   {adminDeleteQuestion ? ( 
   <div className="Delete-question"><button onClick={()=>DeleteQuestion(props.id)}>Supprimer</button></div>
   )
   :(<></>)}
   <div className='left-side-question'>
      <div className="logo-user"><FontAwesomeIcon icon="user" className="user-icon"/></div>
   
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