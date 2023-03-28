import { useEffect, useState } from "react";
import "../style/StyleAdmin/EditClubs.css";
import axios from "axios";
const EditClubs = () => {
  const [ListClubs,setListClubs]=useState("");
  const [idClub,setidClub]=useState("");
  const getClubs= async () => {
    await axios.post('http://localhost:8080/pfe/src/Components/PHP/PhpAdmin/getClubs.php').then((result)=>{
    setListClubs(result.data.data);
  });}

  const DeleteClub= async (id) => {
      await axios.post('http://localhost:8080/pfe/src/Components/PHP/PhpAdmin/DeleteClub.php',{
        id,
      }).then((result)=>{
        console.log("deleted club");
        getClubs();

    });}
  
  useEffect(()=>{
    getClubs();
  })
  const urlClubImg="/Clubs/";
  return ( 
    <div className="ListClubs-container">
      <h1>List des Clubs</h1>
        <div className="club-table">
          <div className="club-table-columns">
            <div>Logo</div>
            <div>Id</div>
            <div>Title</div>
            <div>domaine</div>
            <div>Email</div>
            <div>Action</div>
          </div>
          
            {ListClubs?.length > 0 ? (
              <>
               {ListClubs.map((club)=>(
                <div className="club-table-columns-details" key={club.id}>
                  <div><img src={urlClubImg+club.imgClub} alt="" /></div>
                  <div>{club.id}</div>
                  <div>{club.titleClub}</div>
                  <div>{club.domaine}</div>
                  <div>{club.email}</div>
                  <div><button onClick={()=>DeleteClub(club.id)}>Supprimer</button></div>
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
 
export default EditClubs;