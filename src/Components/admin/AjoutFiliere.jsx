import "../style/StyleAdmin/AjoutFiliere.css"
import { useState } from "react";
const AjoutFiliere = () => {
const [diplomeDUT,setDiplomeDUT]=useState();
const checkDiplomeType=(event)=>{
if(event.target.value==='DUT'){
 setDiplomeDUT(true);
}
else{
 setDiplomeDUT(false);
}
}
 return ( 
<div className="container-AddFiliere">
   <div className="post-filiere">
        <div className="Diplome">
             <label htmlFor="">Diplome :</label>
             <select name="" id="" onChange={(event)=>checkDiplomeType(event)}>
              <option value="DUT">DUT</option>
              <option value="LP">LP</option>
             </select>
           </div>
          <div className="NomFiliere">
             <label htmlFor="">Nom filiere :</label>
             <input type="text" name="" id="" />
           </div>
           <div className="Presentation">
              <label htmlFor="">Presentation :</label>
              <textarea   name="" id="" cols="30" rows="10"></textarea>
            </div>
            <div className="Objectifs">
              <label htmlFor="">Objectifs :</label>
              <textarea   name="" id="" cols="30" rows="10"></textarea>
            </div>
            <div className="Modalite">
              <label htmlFor="">Modalite :</label>
              <textarea   name="" id="" cols="30" rows="10"></textarea>
            </div>
            <div className="Poursuite">
              <label htmlFor="">Poursuite :</label>
              <textarea   name="" id="" cols="30" rows="10"></textarea>
            </div>
            
            <div className="Responsable">
               <label id="Responsable">Responsable :</label>
                 <div>
                 <label htmlFor="">nom :</label>
                 <input type="text" />
                 </div>
                 <div>
                 <label htmlFor="">email :</label>
                 <input type="text" />
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
               <input type="text" />
                <label htmlFor="">M2 :</label> <input type="text" /> 
                   <label htmlFor="">M3 :</label> <input type="text" />  
                    <label htmlFor="">M4 :</label> <input type="text" /> 
                 <label htmlFor="">M5 :</label> <input type="text" /> 
                  <label htmlFor="">M6 :</label> <input type="text"/>
                  <label htmlFor="">M7 :</label> <input type="text" />
                   <label htmlFor="">M8 :</label> <input type="text" />
                   </div>
            <div className="semester2">
            <div>semester 2:</div>
               <label htmlFor="">M9 :</label>
              <input type="text" />
              <label htmlFor="">M10 :</label>
              <input type="text"  />
              <label htmlFor="">M11 :</label>
              <input type="text"  />
              <label htmlFor="">M12 :</label>
              <input type="text" />
              <label htmlFor="">M13 :</label>
              <input type="text"  />
              <label htmlFor="">M14 :</label>
              <input type="text"/>
              <label htmlFor="">M15 :</label>
              <input type="text" />
              <label htmlFor="">M16 :</label>
              <input type="text" />
            </div>
             </div>
             
             </>
            ):(<>
             <div className="module-add-filiere">
             <div className="semester1"> 
             <div>semester 1:</div>
                   <label htmlFor="">M1 :</label> <input type="text" />
                  <label htmlFor="">M2 :</label> <input type="text" /> 
                   <label htmlFor="">M3 :</label> <input type="text" />  
                    <label htmlFor="">M4 :</label> <input type="text" /> 
                   <label htmlFor="">M5 :</label> <input type="text" /> 
                  <label htmlFor="">M6 :</label> <input type="text"/>
               </div>

            <div className="semester2">
             <div>semester 2:</div>
              <label htmlFor="">M7 :</label>
              <input type="text"  />
              <label htmlFor="">M8 :</label>
              <input type="text"/>
              <label htmlFor="">M9 :</label>
              <input type="text" />
              <label htmlFor="">M10 :</label>
              <input type="text" />
            </div>
        </div>
            </>)

            }
             <div className="btn-post-filiere"> <button>Pose</button></div>
     </div>
</div>
  );
}
 
export default AjoutFiliere;