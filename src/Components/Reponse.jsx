import "./style/Reponse.css";
import QuestionCard from "./questionCard";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faUser);
const Reponse = () => {
 
 return ( 
  <div className="reponse-container">
   {/* <QuestionCard props={props}/> */}
    <div className="reponses">
                        {/* <div className="ReponseCard" key={props.id} >
                            <div className='left-side-Reponse'>
                              <div className="logo-user"><FontAwesomeIcon icon="user" className="user-icon"/></div>
                              <div className="likes"></div>
                            </div>
                            <div className='right-side-Reponse'>
                              <div className="infoReponse-postage">
                                    <div className="Nomuser">{props.nom}</div>
                                    <div className="ReponseDate">Posted on :{props.posted}</div>
                              </div>
                              <div className="Reponse">{props.question}</div>
                              <div className="ReponseCard-details">
                              </div>
                            </div>
                          </div> */}
      </div>
  </div>
  );
}
 
export default Reponse;