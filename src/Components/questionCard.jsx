import "./style/QuestionCard.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faUser);
const QuestionCard = ({props}) => {
 return (
  <div className="QuestionCard">
      <div className="NomUser"><FontAwesomeIcon icon="user" className="user-icon"/>{props.nom}</div>
      <div className="Question">{props.question}</div>
      <div className="QuestionCard-details">
         <button className="Btn-readmore">read more</button>
         <div className="QuestionDate">Posted on :{props.posted}</div>
      </div>
  </div>

   );
}
 
export default QuestionCard;