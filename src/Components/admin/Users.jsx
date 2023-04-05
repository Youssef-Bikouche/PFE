import { useEffect, useState } from "react";
import "../style/StyleAdmin/Users.css";
import axios from "axios";
const Users = () => {
  const [Users,setUsers]=useState("");
  const [popEditRole,setpopEditRole]=useState("");
  const [nomUser,setnomUser]=useState("");
  const [prenomUser,setprenomUser]=useState("");
  const [Newrole,setNewrole]=useState("etudiant");
  const [OldRole,setOldRole]=useState("");
  const [idUser,setIduser]=useState("");
  
const editRole=(iduser,nom,prenom,OldRole)=>{
setIduser(iduser);
setnomUser(nom);
setprenomUser(prenom);
setOldRole(OldRole);
setpopEditRole(true);
}

const changeRole =async event => {
  if(Newrole===OldRole){
    popEditRole(false);
  }
  else{
  await axios.post('http://localhost:8080/pfe/src/Components/PHP/PhpAdmin/ChangeRole.php',{
    idUser,
    Newrole,
  }).then((result)=>{
    setpopEditRole(false);

});
}
}
  /************************* */
  const getUsers= async event => {
    await axios.post('http://localhost:8080/pfe/src/Components/PHP/PhpAdmin/getUsers.php').then((result)=>{
    setUsers(result.data.data);
  });}

  const DeleteUser= async (id) => {
      await axios.post('http://localhost:8080/pfe/src/Components/PHP/PhpAdmin/DeleteUser.php',{
        id,
      }).then((result)=>{
        getUsers();
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
                  <div><button onClick={()=>DeleteUser(user.id)}>Supprimer</button><span onClick={()=>editRole(user.id,user.nom,user.prenom,user.role)}>⚙</span></div>
                  </div>   
               ))
               }
               </>
            )
            
            :(<></>)
            
            }
      
        </div>
        {popEditRole ? 
        (<div className="editRole-container">
            <div className="editRole">
              <div className="close-pop" onClick={()=>setpopEditRole(false)}>X</div>
                <label htmlFor="">Nom: </label>
                <input type="text" name="" id="" value={nomUser}/>
                <label htmlFor="">Prenom: </label>
                <input type="text" name="" id="" value={prenomUser} />
                <label htmlFor="">role: </label>
                <select name="" id="" onChange={(event)=>{setNewrole(event.target.value)}} >
                <option value="etudiant">etudiant</option>
                <option value="admin">admin</option>
                <option value="professeur">professeur</option>
                </select>
                <button className="submit-changeRole" onClick={()=>{changeRole()}}>submit</button>
            </div>
         </div>
         ):
        (<></>)
        }
     
    </div>
    
   );
}
 
export default Users;