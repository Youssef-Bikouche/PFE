import "../style/StyleAdmin/AjoutClub.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const AjoutClub = () => {
 const [NomClub,setNomClub]=useState("");
const [infoClub,setinfoClub]=useState("");
const [DomaineClub,setDomaineClub]=useState("");
const [ClubEmail,setClubEmail]=useState("");
const [error,setError]=useState("");
const navigate=useNavigate('');
const checkRequiredClub=(event)=>{
   if(NomClub.length>=1 && DomaineClub.length>=1 && ClubEmail.length>=1 && infoClub.length>=1){
     addClub();
    }
     else{
      setError('Veuillez remlir tos les champs');
     }
   }
   /***************************** */
   const [image, setImage] = useState(null);
     const addimg= async () => {
      const formData = new FormData();
      formData.append('image',image);

      await axios.post('http://localhost:8080/pfe/src/Components/PHP/PhpAdmin/saveClubImg.php',formData).then((result)=>{
         console.log(result);
      })
      .catch(error => {
         setError('error');
       });
  
   } 
  /***************************** */
const addClub= async ()=> {
   console.log(image.size);
   if(image.size < 40000000){
     addimg();
     const imgPath=image.name;
     await axios.post('http://localhost:8080/pfe/src/Components/PHP/PhpAdmin/AddClub.php',{
       NomClub,
       infoClub,
       DomaineClub,
       ClubEmail,
       imgPath,
       }).then((result)=>{
         navigate('/Clubs');
     });
   } else{
      setError('image is to large');
   }
   
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
       <input type="file" accept="image/*" onChange={(event)=>{setImage(event.target.files[0])}}/>
    </div>
    <div className="btn-post-club"> <button onClick={()=>checkRequiredClub()}>Add</button></div>
    <div>{error}</div>
   </div>

</div>

 );
}
 
export default AjoutClub;