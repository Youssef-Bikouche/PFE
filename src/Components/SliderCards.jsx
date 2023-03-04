import "./style/SliderCards.css";
// import { Link } from "react-router-dom";


const SLiderCard = ({props}) => {
  const imgg="/Clubs/"+props.imgClub;
  const id="#"+props.id;
  return ( 
    <a href={id}><div className="one-slider-card">
        <div className="image">
        <img src={imgg} alt={props.titleClub} id="Clubimg"/>
        </div>
        <div className="infoslide">
        {props.titleClub}
        </div>
    </div></a>
   );
}
 
export default SLiderCard;