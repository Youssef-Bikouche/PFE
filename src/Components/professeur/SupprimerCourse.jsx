import { useState,useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import "../style/StyleAdmin/Users.css";
const SupprimerCourse = () => {
  const navigate=useNavigate('');
  const [Courses,setCourses]=useState("");
  const [Error,setError]=useState("");
  const idprof=localStorage.getItem("id");
  const getCourses= async () => {
    await axios.post('http://localhost:8080/pfe/src/Components/PHP/PhpProfesseur/getCourses.php',{idprof}).then((result)=>{
    setCourses(result.data.data);
  });}

  const DeleteCour= async (id)=>{
    await axios.post('http://localhost:8080/pfe/src/Components/PHP/PhpProfesseur/DeleteCour.php',{
     id,
    }).then((result)=>{
      if(result.data.data.status==="invalid"){
      setError('oops,problem while deleting');
      }
      else{
        navigate('/Home')
      }
    
    })
    
    }  
  useEffect(()=>{
    getCourses();
  },[])
  return ( 
    <div className="users-container">
      <h1>List des Cours</h1>
        <div className="user-table">
          <div className="user-table-columns">
            <div>ID</div>
            <div>NomCour</div>
            <div>module</div>
            <div>Semester</div>
            <div>type</div>
            <div>Action</div>
          </div>
          
            {Courses?.length > 0 ? (
              <>
               {Courses.map((cour)=>(
                
                <div className="user-table-columns-details" key={cour.id}>
                  <div>{cour.id}</div>
                  <div>{cour.NomCour}</div>
                  <div>{cour.module}</div>
                  <div>{cour.Semester}</div>
                  <div>{cour.type}</div>
                  <div><button onClick={()=>DeleteCour(cour.id)}>Supprimer</button></div>
                  </div>   
               ))
               }
               </>
            )
            
            :(<></>)
            
            }
      
        </div>
        
    </div>
   );
}
 
export default SupprimerCourse;