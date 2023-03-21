import "../style/StyleAdmin/AjoutClub.css"
import axios from "axios";
import { useState } from "react";
const AjoutClub = () => {
 const [NomClub,setNomClub]=useState("");
const [infoClub,setinfoClub]=useState("");
const [DomaineClub,setDomaineClub]=useState("");
const [ClubEmail,setClubEmail]=useState("");
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
       <input type="text" name="" id="" onChange={(event)=>setNomClub(event)}/>
    </div>
    <div className="addInfoClub">
       <label htmlFor="">information club :</label>
       <textarea  onChange={(event)=>setinfoClub(event)} ></textarea>
    </div>
    <div className="addDomaineClub">
       <label htmlFor="">Domaine Club :</label>
       <input type="text" name="" id="" onChange={(event)=>setDomaineClub(event)}/>
    </div>
    <div className="addEmailClub">
       <label htmlFor="">Club Email:</label>
       <input type="text" name="" id="" onChange={(event)=>setClubEmail(event)}/>
    </div>
    <div className="addLogoClub">
       <label htmlFor="">Logo:</label>
       <input type="file" accept="image/*" />
    </div>
    <div className="btn-post-club"> <button >Add</button></div>
   </div>

</div>

 );
}
 
export default AjoutClub;