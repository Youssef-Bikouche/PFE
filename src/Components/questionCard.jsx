import "./style/QuestionCard.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faUser);
const QuestionCard = ({props}) => {
 return (
  <div className="QuestionCard">
   <div className='left-side-question'>
      <div className="logo-user"><FontAwesomeIcon icon="user" className="user-icon"/></div>
      <div className="likes"></div>
   </div>
   <div className='right-side-question'>
      <div className="info-postage">
            <div className="Nomuser">{props.nom}</div>
            <div className="QuestionDate">Posted on :{props.posted}</div>
      </div>
      <div className="Question">{props.question}</div>
      <div className="QuestionCard-details">
         <div className="nbr-responses">15 reponse</div>
         <button className="Btn-repondre">Repondre</button>
      </div>
   </div>
  </div>

   );
}
 
export default QuestionCard;