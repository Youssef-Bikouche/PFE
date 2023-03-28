import "../style/StyleAdmin/AjoutClub.css"
import axios from "axios";
import { useState } from "react";
const AjoutClub = () => {
 const [NomClub,setNomClub]=useState("");
const [infoClub,setinfoClub]=useState("");
const [DomaineClub,setDomaineClub]=useState("");
const [ClubEmail,setClubEmail]=useState("");
const checkRequiredClub=(event)=>{
   if(NomClub.length>=1 && DomaineClub.length>=1 && ClubEmail.length>=1 && infoClub.length>=1){
     addClub();
     
    }
     else{
      console.log("error");
     }
   }
const addClub= async event => {
     await axios.post('http://localhost:8080/pfe/src/Components/PHP/PhpAdmin/AddClub.php',{
       NomClub,
       infoClub,
       DomaineClub,
       ClubEmail,
       }).then((result)=>{
       console.log(result.data);
     });
   
  }
 return (  
<div className="AjoutClub">
   <div className="postClub">
    <div className="addNomClub">
       <label htmlFor="">Nom club :</label>
       <input type="text" name="" id="" onChange={(event)=>setNomClub(event.target.value)}/>
    </div>
    <div className="addInfoClub">
       <label htmlFor="">information club :</label>
       <textarea  onChange={(event)=>setinfoClub(event.target.value)} ></textarea>
    </div>
    <div className="addDomaineClub">
       <label htmlFor="">Domaine Club :</label>
       <input type="text" name="" id="" onChange={(event)=>setDomaineClub(event.target.value)}/>
    </div>
    <div className="addEmailClub">
       <label htmlFor="">Club Email:</label>
       <input type="text" name="" id="" onChange={(event)=>setClubEmail(event.target.value)}/>
    </div>
    <div className="addLogoClub">
       <label htmlFor="">Logo:</label>
       <input type="file" accept="image/*" />
    </div>
    <div className="btn-post-club"> <button onClick={()=>checkRequiredClub()}>Add</button></div>
   </div>

</div>

 );
}
 
export default AjoutClub;