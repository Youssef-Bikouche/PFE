import { useEffect, useState } from "react";
import "../style/StyleAdmin/DeleteFiliere.css";
import axios from "axios";
import { Navigate } from "react-router-dom";
const DeleteFiliere = () => {

  useEffect(()=>{
    getFiliereList();
  })
  const getFiliereList=async ()=>
  await axios.post('http://localhost:8080/pfe/src/Components/PHP/Filiere.php').then((result)=>{
    setListfiliere(result.data.data);
  })
  const [Error,setError]=useState('');
  const [FiliereId,setFiliereId]=useState('')
  const [ListFiliere,setListfiliere]=useState('');
  const [popDeleteFiliere,setpopDeleteFiliere]=useState(false);

 const DeleteFil= async (id)=>{
 await axios.post('http://localhost:8080/pfe/src/Components/PHP/PhpAdmin/DeleteFiliere.php',{
  id,
 }).then((result)=>{
  if(result.data.status == 'invalid'){
    setError('delete failed');
  }
  else{
    setError('delete Succesed');
    setpopDeleteFiliere(false)
  }
 })
 
 }  
 const handleDeleteFil=(id)=>{
  setFiliereId(id);
  setpopDeleteFiliere(true)
  }
  return (  
    <div className="ListFilieres-container">
      <h1>List des filiere</h1>
        <div className="filiere-table">
          <div className="filiere-table-columns">
            <div>Id</div>
            <div>Nom filiere</div>
            <div>Responsable</div>
            <div>Diplome</div>
            <div>Action</div>
          </div>
          
            {ListFiliere?.length > 0 ? (
              <>
               {ListFiliere.map((filiere)=>(
        
                <div className="filiere-table-columns-details" key={filiere.id}>
                  <div>{filiere.id}</div>
                  <div>{filiere.nom}</div>
                  <div>{filiere.Responsable}</div>
                  <div>{filiere.Diplome}</div>
                  <div><button onClick={()=>handleDeleteFil(filiere.id)}>Supprimer</button></div>
                  </div>   
               ))
               }
               </>
            )
            
            :(<></>)
            
            }
          
        </div>
        {popDeleteFiliere?(
          <div className="popDeleteFiliere">
            <div className="close-pop" onClick={()=>setpopDeleteFiliere(false)}>X</div>
            <h2>Do you really want to delete it ?</h2>
            <div className="delete-options">
                <button onClick={()=>DeleteFil(FiliereId)}>Yes</button>
                <button onClick={()=>setpopDeleteFiliere(false)}>No</button>
            </div>
            <div>{Error}</div>
          </div>
        )
        :(<> </>) }
      </div>
  );
}
 
export default DeleteFiliere;