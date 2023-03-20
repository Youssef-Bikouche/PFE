import { useEffect, useState } from "react";
import "../style/StyleAdmin/Users.css";
import axios from "axios";
const Users = () => {
  const [Users,setUsers]=useState("");
  const [IdUser,setIdUSer]=useState("");
  const getUsers= async event => {
    await axios.post('http://localhost:8080/pfe/src/Components/PHP/PhpAdmin/getUsers.php').then((result)=>{
    setUsers(result.data.data);
  });}

  const DeleteUser= async (id) => {
      await axios.post('http://localhost:8080/pfe/src/Components/PHP/PhpAdmin/DeleteUser.php',{
        id,
      }).then((result)=>{
        console.log("deleted");
        getUsers();
        console.log(result);
    });}
  
  useEffect(()=>{
    getUsers();
  })
  return ( 
    <div className="users-container">
      <h1>List des utilisateurs</h1>
        <div className="user-table">
          <div className="user-table-columns">
            <div>ID</div>
            <div>Username</div>
            <div>Nom</div>
            <div>Prenom</div>
            <div>Email</div>
            <div>Role</div>
            <div>Action</div>
          </div>
          
            {Users?.length > 0 ? (
              <>
               {Users.map((user)=>(
                
                <div className="user-table-columns-details" key={user.id}>
                  <div>{user.id}</div>
                  <div>{user.username}</div>
                  <div>{user.nom}</div>
                  <div>{user.prenom}</div>
                  <div>{user.email}</div>
                  <div>{user.role}</div>
                  <div><button onClick={()=>DeleteUser(user.id)}>Supprimer</button></div>
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
 
export default Users;