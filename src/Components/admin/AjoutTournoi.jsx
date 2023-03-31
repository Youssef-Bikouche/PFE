import "../style/StyleAdmin/AjouterTournoi.css"
import axios from "axios";
import { useState } from "react";
const AjoutTournoi = () => {
const [NomTournoi,setNomTournoi]=useState("");
const [infoTournoi,setinfoTournoi]=useState("");
const [NbrPlace,setNbrPlace]=useState("");
const [Delais,setDelais]=useState("");
const [Message,setMessage]=useState("");
const checkRequiredClub=(event)=>{
   if(NomTournoi.length>=1 && NbrPlace.length>=1 && Delais.length>=1 && infoTournoi.length>=1){
    addTournoi();
    setMessage("Added successfully");
    
    }
     else{
      setMessage("il faut remplir tous les champs !");
     }
   }

   const addTournoi= async event => {
    await axios.post('http://localhost:8080/pfe/src/Components/PHP/PhpAdmin/addTournoi.php',{
      NomTournoi,
      infoTournoi,
      NbrPlace,
      Delais,
      }).then((result)=>{
      console.log(result.data);
    });
}
  return ( 
<div className="AjoutClub">
   <div className="postClub">
    <div className="addNomClub">
       <label htmlFor="">Nom Tournoi :</label>
       <input type="text" name="" id="" onChange={(event)=>setNomTournoi(event.target.value)}/>
    </div>
    <div className="addInfoClub">
       <label htmlFor="">information Tournoi :</label>
       <textarea  onChange={(event)=>setinfoTournoi(event.target.value)} ></textarea>
    </div>
    <div className="addDomaineClub">
       <label htmlFor="">Nombre de place :</label>
       <input type="text" name="" id="" onChange={(event)=>setNbrPlace(event.target.value)}/>
    </div>
    <div className="addEmailClub">
       <label htmlFor="">Dernier délais d'inscription:</label>
       <input type="date" placeholder='xx-xx-xxxx'name="" id="" onChange={(event)=>setDelais(event.target.value)}/>
    </div>
    <div className="btn-post-club"> <button onClick={()=>checkRequiredClub()}>Add</button></div>
    <div className="addTournoi-message">{Message}</div>
   </div>

</div>
   );
}
 
export default AjoutTournoi;