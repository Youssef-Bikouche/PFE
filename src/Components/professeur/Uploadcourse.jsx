import "../style/StyleProfesseur/Uploadcourse.css"
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Uploadcourse = () => {
   const [selectedFile, setSelectedFile] = useState('');
   const navigate=useNavigate();
   const handleUploadClick = async () => {
     const formData = new FormData();
     formData.append("pdfFile", selectedFile);
     await axios.post('http://localhost:8080/pfe/src/Components/PHP/PhpProfesseur/uploadcour.php',
     formData).then((result)=>{
     })
   };
 

   /*********************** */
   const [ListFiliere,setListfiliere]=useState('');
   useEffect(()=>{
      const getFiliereList=async ()=>
      await axios.post('http://localhost:8080/pfe/src/Components/PHP/Filiere.php').then((result)=>{
        setListfiliere(result.data.data);
      })
      getFiliereList();
    })

    const [nomcour,setNomcour]=useState('');  
    const [courSemester,setcourSemester]=useState('');  
    const [courModule,setcourModule]=useState(''); 
    const [courFiliere,setcourFiliere]=useState(''); 
const uploadcour= async event => {
   const pathcour=selectedFile.name;
   handleUploadClick();
   await axios.post('http://localhost:8080/pfe/src/Components/PHP/PhpProfesseur/AddCour.php',{
    nomcour,
    courSemester,
    courModule,
    courFiliere,
    pathcour,
     }).then(()=>{
      navigate('/Home');
   });
 
}

 return ( 
  <div className="UploadCour-container">
   <div className="postCour">
   <div className="Cour-filiere">
             <label htmlFor="">filiere :</label>
             <select name="" id="" onChange={(event)=>setcourFiliere(event.target.value)}>
             <option value="">filiere</option>
            
             {ListFiliere?.length > 0 ? (
              <>
               {ListFiliere.map((filiere)=>(
               <option value={filiere.id}>{filiere.nom}</option>
               ))
               }
               </>
            )
            
            :(<></>)
            
            }
             </select>
           </div>
    <div className="addNomCour">
       <label htmlFor="">cour title:</label>
       <input type="text" name="" id="" onChange={(event)=>setNomcour(event.target.value)}/>
    </div>
    <div className="addSemester">
       <label htmlFor="">Semester :</label>
       <input type="text" name="" id="" onChange={(event)=>setcourSemester(event.target.value)}/>
    </div>
    <div className="addModule">
       <label htmlFor="">Module:</label>
       <input type="text" name="" id="" onChange={(event)=>setcourModule(event.target.value)}/>
    </div>
    <div className="addCour">
    <label htmlFor="">Cour:(on pdf)</label>
    <input type="File" name="" accept=".pdf" onChange={(event)=>{setSelectedFile(event.target.files[0])}}/>
    </div>
    <div className="btn-post-cour"> <button  onClick={()=>uploadcour()}>Add</button></div>
   </div>
  </div>
  );
}
 
export default Uploadcourse;