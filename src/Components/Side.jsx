import { useState } from "react";
import { useEffect } from "react";

import axios from "axios";
import "./style/Side.css";
import FiliereCard from "./Filierecard";
const Side = ({props}) => {
  const [filieres,setfilieres]=useState('');
  console.log(props.searchTerm);
  const getFiliere = async event => {
    const response = await axios.post('http://localhost:8080/pfe/src/Components/PHP/Filiere.php').then((result)=>{
    // console.log(result.data.data);
    setfilieres(result.data.data);
    // console.log(data[0].nom);
  });}
  useEffect(()=>{
    getFiliere();
  }
  ,[]);

  // const ToggleDiv=()=>{
  //   if (verifie == false) {
  //     setVerifie(true);
  //   } else {

  //     setVerifie(false);
  //   }
  // }
  // const [verifie,setVerifie]=useState(false);
  
  return (  
    <div>
    {filieres?.length > 0 ? (
      <div className="Side">
        {filieres.map((filiere) => (
          <FiliereCard props={filiere} /> 
        ))}
      </div>
    ) : (
      <div className="Side">
        <h2>No filiere found</h2>
      </div>
    )}  
    </div>
  );
}
 
export default Side;