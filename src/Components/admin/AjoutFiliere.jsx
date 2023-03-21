import "../style/StyleAdmin/AjoutFiliere.css"
import axios from "axios";
import { useState } from "react";
const AjoutFiliere = () => {
const [diplomeDUT,setDiplomeDUT]=useState();
const checkDiplomeType=(event)=>{
setDiplomeType(event.target.value)
if(event.target.value==='DUT'){
 setDiplomeDUT(true);
}
else{
 setDiplomeDUT(false);
}
}
/************************** */
const [error,seterror]=useState("");

/*********** */
const [NomFiliere,setNomFiliere]=useState("");
const [Presentation,setPresentation]=useState("");
const [Objectifs,setObjectifs]=useState("");
const [Modalite,setModalite]=useState("");
const [Poursuite,setPoursuite]=useState("");
const [ResponsableNom,setResponsableNom]=useState("");
const [ResponsableEmail,setResponsableEmail]=useState("");
const [DiplomeType,setDiplomeType]=useState("");
/******************** */
const [M1,setM1]=useState("");
const [M2,setM2]=useState("");
const [M3,setM3]=useState("");
const [M4,setM4]=useState("");
const [M5,setM5]=useState("");
const [M6,setM6]=useState("");
const [M7,setM7]=useState("");
const [M8,setM8]=useState("");
const [M9,setM9]=useState(" ");
const [M10,setM10]=useState(" ");
const [M11,setM11]=useState(" ");
const [M12,setM12]=useState(" ");
const [M13,setM13]=useState(" ");
const [M14,setM14]=useState(" ");
const [M15,setM15]=useState(" ");
const [M16,setM16]=useState(" ");
/********* */
const addFiliere= async event => {
  if(NomFiliere.length>0){
    await axios.post('http://localhost:8080/pfe/src/Components/PHP/PhpAdmin/addFiliere.php',{
      NomFiliere,
      DiplomeType,
      Presentation,
      Objectifs,
      Modalite,
      Poursuite,
      ResponsableNom,
      ResponsableEmail,
      M1,M2,M3,M4,M5,M6,M7,M8,M9,M10,M11,M12,M13,M14,M15,M16,
      }).then((result)=>{
      // console.log(result.data);
    });
  }
 }

 return ( 
<div className="container-AddFiliere">
   <div className="post-filiere">
        <div className="Diplome">
             <label htmlFor="">Diplome :</label>
             <select name="" id="" onChange={(event)=>checkDiplomeType(event)}>
             <option value="">type de diplome</option>
              <option value="DUT">DUT</option>
              <option value="LP">LP</option>
             </select>
           </div>
          <div className="NomFiliere">
             <label htmlFor="">Nom filiere :</label>
             <input type="text" name="" id="" onChange={(event)=>setNomFiliere(event.target.value)}/>
           </div>
           <div className="Presentation">
              <label htmlFor="">Presentation :</label>
              <textarea   name="" id="" cols="30" rows="10" onChange={(event)=>setPresentation(event.target.value)}></textarea>
            </div>
            <div className="Objectifs">
              <label htmlFor="">Objectifs :</label>
              <textarea   name="" id="" cols="30" rows="10" onChange={(event)=>setObjectifs(event.target.value)}></textarea>
            </div>
            <div className="Modalite">
              <label htmlFor="">Modalite :</label>
              <textarea   name="" id="" cols="30" rows="10" onChange={(event)=>setModalite(event.target.value)}></textarea>
            </div>
            <div className="Poursuite">
              <label htmlFor="">Poursuite :</label>
              <textarea   name="" id="" cols="30" rows="10" onChange={(event)=>setPoursuite(event.target.value)}></textarea>
            </div>
            
            <div className="Responsable">
               <label id="Responsable">Responsable :</label>
                 <div>
                 <label htmlFor="">nom :</label>
                 <input type="text" onChange={(event)=>setResponsableNom(event.target.value)}/>
                 </div>
                 <div>
                 <label htmlFor="">email :</label>
                 <input type="text" onChange={(event)=>setResponsableEmail(event.target.value)}/>
                 </div>
            </div>
            <div className="filiere-background">
              <label htmlFor="">background image :</label>
              <input type="file" accept="image/*" />
            </div>
            {diplomeDUT?(
             <>
             <div className="module-add-filiere">
             <div className="semester1">
             <div>semester 1:</div>
              <label htmlFor="">M1 :</label>
               <input type="text" onChange={(event)=>setM1(event.target.value)}/>
                <label htmlFor="">M2 :</label> <input type="text" onChange={(event)=>setM2(event.target.value)}/> 
                   <label htmlFor="">M3 :</label> <input type="text" onChange={(event)=>setM3(event.target.value)}/>  
                    <label htmlFor="">M4 :</label> <input type="text" onChange={(event)=>setM4(event.target.value)}/> 
                 <label htmlFor="">M5 :</label> <input type="text" onChange={(event)=>setM5(event.target.value)}/> 
                  <label htmlFor="">M6 :</label> <input type="text" onChange={(event)=>setM6(event.target.value)}/>
                  <label htmlFor="">M7 :</label> <input type="text"  onChange={(event)=>setM7(event.target.value)}/>
                   <label htmlFor="">M8 :</label> <input type="text"  onChange={(event)=>setM8(event.target.value)}/>
                   </div>
            <div className="semester2">
            <div>semester 2:</div>
               <label htmlFor="">M9 :</label>
              <input type="text" onChange={(event)=>setM9(event.target.value)}/>
              <label htmlFor="">M10 :</label>
              <input type="text"  onChange={(event)=>setM10(event.target.value)}/>
              <label htmlFor="">M11 :</label>
              <input type="text"  onChange={(event)=>setM11(event.target.value)}/>
              <label htmlFor="">M12 :</label>
              <input type="text" onChange={(event)=>setM12(event.target.value)}/>
              <label htmlFor="">M13 :</label>
              <input type="text"  onChange={(event)=>setM13(event.target.value)}/>
              <label htmlFor="">M14 :</label>
              <input type="text" onChange={(event)=>setM14(event.target.value)}/>
              <label htmlFor="">M15 :</label>
              <input type="text" onChange={(event)=>setM15(event.target.value)}/>
              <label htmlFor="">M16 :</label>
              <input type="text" onChange={(event)=>setM16(event.target.value)}/>
            </div>
             </div>
             
             </>
            ):(<>
             <div className="module-add-filiere">
             <div className="semester1"> 
             <div>semester 1:</div>
                   <label htmlFor="">M1 :</label> <input type="text" onChange={(event)=>setM1(event.target.value)}/>
                  <label htmlFor="">M2 :</label> <input type="text" onChange={(event)=>setM2(event.target.value)}/> 
                   <label htmlFor="">M3 :</label> <input type="text" onChange={(event)=>setM3(event.target.value)}/>  
                    <label htmlFor="">M4 :</label> <input type="text" onChange={(event)=>setM4(event.target.value)}/> 
                   <label htmlFor="">M5 :</label> <input type="text" onChange={(event)=>setM5(event.target.value)}/> 
                  <label htmlFor="">M6 :</label> <input type="text"onChange={(event)=>setM6(event.target.value)}/>
               </div>

            <div className="semester2">
             <div>semester 2:</div>
              <label htmlFor="">M7 :</label>
              <input type="text"  onChange={(event)=>setM7(event.target.value)}/>
              <label htmlFor="">M8 :</label>
              <input type="text" onChange={(event)=>setM8(event.target.value)}/>
              <label htmlFor="">M9 :</label>
              <input type="text" onChange={(event)=>setM9(event.target.value)}/>
              <label htmlFor="">M10 :</label>
              <input type="text" onChange={(event)=>setM10(event.target.value)}/>
            </div>
        </div>
            </>)

            }
             <div className="btn-post-filiere"> <button onClick={()=>{addFiliere()}}>Pose</button></div>
     </div>
</div>
  );
}
 
export default AjoutFiliere;