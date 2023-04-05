import "./style/Filiere.css";
import target from "./images/target.png";
import {useLocation} from 'react-router-dom';
import { useState,useEffect } from "react";
import axios from "axios";
const Filiere = () => {
  const location = useLocation();
  const [typeDiplome,settypeDiplome]=useState('');
  const [filiere,setFiliere]=useState('');
  const [Modules,setModules]=useState('');
  const FiliereId = location.state.id;
  const FiliereDiplome = location.state.diplome;
  const pathImg="/filiere/";
  useEffect(()=>{
    const getFiliereinfo= async event => {
      await axios.post('http://localhost:8080/pfe/src/Components/PHP/getFiliereinfo.php',{
        FiliereId,
      }).then((result)=>{
     setFiliere(result.data.data[0]);
    });}
    const getModules= async event => {
      await axios.post('http://localhost:8080/pfe/src/Components/PHP/getModules.php',{
        FiliereId,
      }).then((result)=>{
     setModules(result.data.data[0]);
   
    });}
    const checkDiplome=()=>{
      if(FiliereDiplome==="DUT"){
        settypeDiplome(true);
      }
      else{
        settypeDiplome(false);
      }
    }
    checkDiplome();
    getFiliereinfo();
    getModules();
    
},[FiliereId]);
   
  return ( 
    <div className="Filiere">
      <div className="filiere-pic">
        <div className="pic"><img src={pathImg+filiere.pathImg} alt="" /></div>
        
          {
            typeDiplome?(
              <div className="diplome-name">Diplôme Universitaire <br /> de Technologie <br /><span> {filiere.nom}</span></div>
            ):(
              <div className="diplome-name">Licence Professionnelle <br /><span> {filiere.nom}</span></div>
            )
          }
        
      </div>
      <div className="filiere-info">
        <div className="presentation">
          <h1>Présentation du diplôme</h1>
          <p>{filiere.Presentation}</p>
        </div>
        <div className="objectif">
          <div>
          <h1>Objectifs du diplôme</h1>
          <img src={target} alt="target" />
          </div>
          <p>{filiere.Objectifs}</p>
        </div>
        <div className="Modalites">
          <h1>Modalités d’admission:</h1>
          <p>{filiere.Modalites}</p>
        </div>
        <div className="Organisation">
          <h1>Organisation de la formation</h1>
          <p>La formation se déroule en deux années,
            organisés en quatre semestres.</p>
        </div>
        <div className="modulaire">
        <h1>Organisation modulaire:</h1>
          {typeDiplome?<>
            <div className="annee1">
            <div className="semestre">
            <div className="semestre-number">Semestre 1</div>
                   <div className="module">
                   <div className="M" id="code">code</div>
                   <div className="subject" id="Intitule">Intitulé des modules</div>
                 </div>
                 <div className="module">
                   <div className="M">M1</div>
                   <div className="subject">{Modules.M1}</div>
                 </div>
                 <div className="module">
                   <div className="M">M2</div>
                   <div className="subject">{Modules.M2}</div>
                 </div>
                 <div className="module">
                   <div className="M">M3</div>
                   <div className="subject">{Modules.M3}</div>
                 </div>
                 <div className="module">
                   <div className="M">M4</div>
                   <div className="subject">{Modules.M4}</div>
                 </div>
                 </div>
                 <div className="semestre">
            <div className="semestre-number">Semestre 2</div>
                   <div className="module">
                   <div className="M" id="code">code</div>
                   <div className="subject" id="Intitule">Intitulé des modules</div>
                 </div>
                 <div className="module">
                   <div className="M">M1</div>
                   <div className="subject">{Modules.M5}</div>
                 </div>
                 <div className="module">
                   <div className="M">M2</div>
                   <div className="subject">{Modules.M6}</div>
                 </div>
                 <div className="module">
                   <div className="M">M3</div>
                   <div className="subject">{Modules.M7}</div>
                 </div>
                 <div className="module">
                   <div className="M">M4</div>
                   <div className="subject">{Modules.M8}</div>
                 </div>
                 </div>
               </div>
               <div className="annee2">
               <div className="semestre">
            <div className="semestre-number">Semestre 3</div>
                   <div className="module">
                   <div className="M" id="code">code</div>
                   <div className="subject" id="Intitule">Intitulé des modules</div>
                 </div>
                 <div className="module">
                   <div className="M">M9</div>
                   <div className="subject">{Modules.M9}</div>
                 </div>
                 <div className="module">
                   <div className="M">M10</div>
                   <div className="subject">{Modules.M10}</div>
                 </div>
                 <div className="module">
                   <div className="M">M11</div>
                   <div className="subject">{Modules.M11}</div>
                 </div>
                 <div className="module">
                   <div className="M">M12</div>
                   <div className="subject">{Modules.M12}</div>
                 </div>
                 </div>
                 <div className="semestre">
            <div className="semestre-number">Semestre 4</div>
                   <div className="module">
                   <div className="M" id="code">code</div>
                   <div className="subject" id="Intitule">Intitulé des modules</div>
                 </div>
                 <div className="module">
                   <div className="M">M13</div>
                   <div className="subject">{Modules.M13}</div>
                 </div>
                 <div className="module">
                   <div className="M">M14</div>
                   <div className="subject">{Modules.M14}</div>
                 </div>
                 <div className="module">
                   <div className="M">M15</div>
                   <div className="subject">{Modules.M15}</div>
                 </div>
                 <div className="module">
                   <div className="M">M16</div>
                   <div className="subject">{Modules.M16}</div>
                 </div>
                 </div>
               </div></>
          :(<>
          <div className="annee1">
            <div className="semestre">
            <div className="semestre-number">Semestre 5</div>
                   <div className="module">
                   <div className="M" id="code">code</div>
                   <div className="subject" id="Intitule">Intitulé des modules</div>
                 </div>
                 <div className="module">
                   <div className="M">M1</div>
                   <div className="subject">{Modules.M1}</div>
                 </div>
                 <div className="module">
                   <div className="M">M2</div>
                   <div className="subject">{Modules.M2}</div>
                 </div>
                 <div className="module">
                   <div className="M">M3</div>
                   <div className="subject">{Modules.M3}</div>
                 </div>
                 <div className="module">
                   <div className="M">M4</div>
                   <div className="subject">{Modules.M4}</div>
                 </div>
                 <div className="module">
                   <div className="M">M5</div>
                   <div className="subject">{Modules.M5}</div>
                 </div>
                 <div className="module">
                   <div className="M" >M6</div>
                   <div className="subject" >{Modules.M6}</div>
                 </div>
                 </div>
                 <div className="semestre">
            <div className="semestre-number">Semestre 6</div>
                   <div className="module">
                   <div className="M" id="code">code</div>
                   <div className="subject" id="Intitule">Intitulé des modules</div>
                 </div>
                 <div className="module">
                   <div className="M">M7</div>
                   <div className="subject">{Modules.M7}</div>
                 </div>
                 <div className="module">
                   <div className="M">M8</div>
                   <div className="subject">{Modules.M8}</div>
                 </div>
                 <div className="module">
                   <div className="M">M9</div>
                   <div className="subject">{Modules.M9}</div>
                 </div>
                 <div className="module">
                   <div className="M">M10</div>
                   <div className="subject">{Modules.M10}</div>
                 </div>
                 </div>
               </div>
          
          
          </>)
          
        }
          <div className="Poursuite">
          <h1>Poursuite d’études:</h1>
          <p>{filiere.Poursuite}</p>
        </div> 
        
      
      </div>
      </div>
    </div>
   );
}
 
export default Filiere;