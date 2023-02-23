import { useState } from "react";
const FiliereCard= ({props}) => {
const filiereNom=props.nom;
  const [verifie,setVerifie]=useState(false);
const ToggleDiv=()=>{
  if (verifie == false) {
    setVerifie(true);
  } else {

    setVerifie(false);
  }
}
  return (   
  <div  className="filiere-container" key={props.id} onClick={()=>ToggleDiv()}>
        <p> {filiereNom} </p>
      {verifie ?(
       <div className="filiere-option">
                    <div className="courses">cours <span>►</span></div>
                    <div className="Q&A">questions <span>►</span></div>
                  </div> 
     ):(
      <div></div>
     )
      }
  </div> 
  );
}

 
export default FiliereCard;