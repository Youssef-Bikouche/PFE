import "./style/clubCards.css";

const ClubCards = ({props}) => {
  const imgg="/Clubs/"+props.imgClub;
  const recipient = props.email;
  const subject = "Demande de joindre le Club : "+props.titleClub;
  const body = "Bonjour,\n\nnom && prenom :\n\nVotre filiere :\n\nVotre motivation pour joindre: \n\n";
  function handleJoinUs() {
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  }
 return (  
  <div className="ClubCard-Container" key={props.id} id={props.id}>
    <div className="Club-logo">
     <img src={imgg} alt={props.titleClub} id="Clubimg"/>
    </div>
    <div className="CardDesign"></div>
    <div className="Club-info">
       <div><h1 id="Clubtitle">{props.titleClub} ✨</h1></div>
       <div className="ppp"><p id="ClubDescri">{props.infoClub}</p></div>
      <div><button className="join-us" id="JoinButton" onClick={()=>handleJoinUs()}>Join us</button></div>
    </div>
    
  </div>

 );
}

export default ClubCards;