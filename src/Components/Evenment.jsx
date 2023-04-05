import "./style/Evenement.css";
import x from "./images/x.jpg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CryptoJS from "crypto-js";
const Evenement = () => {
  
  const [Tournaments,setTournaments]=useState('');
  const [IdTournoi,setIdTournoi]=useState('');
  const [filieres,setfilieres]=useState('');
  const [Participer,setParticiper]=useState(false);
  const [nom,setNom]=useState('');
  const [prenom,setPrenom]=useState('');
  const [fil,setFil]=useState('');
  const [ParticipationResult,setParticipationResult]=useState('');
  const getTournament= async ()=>{
    await axios.post('http://localhost:8080/pfe/src/Components/PHP/Tournoi.php').then((result)=>{
      setTournaments(result.data.data);
    })
  }

  const getFilieres=async ()=>
  await axios.post('http://localhost:8080/pfe/src/Components/PHP/Filiere.php').then((result)=>{
    setfilieres(result.data.data);
  })

  const handleParticipation= async ()=>
  await axios.post('http://localhost:8080/pfe/src/Components/PHP/Participation.php',{
  nom,
  prenom,
  fil,
  IdTournoi,
  }).then((result)=>{
   if(result.data.data.status==='ajouter'){
    setParticipationResult("vous etre maintenant participant dans cette tournoi !")
   }
   else if(result.data.data.status==='deja'){
    setParticipationResult("Vous avez deja participer dans cette tournoi !")
   }
   else if(result.data.data.status==="0place"){
    setParticipationResult("désolée , tous les places sont réservés ")
   }
   else{
    setParticipationResult("une erreur")
   }
  })
 const handleParticipeShow=(id)=>{
  setParticiper(true);
  setIdTournoi(id);
  setParticipationResult('');
 }
 const DeleteTournoi=async (id)=>
 await axios.post('http://localhost:8080/pfe/src/Components/PHP/PhpAdmin/DeleteTournoi.php',{
  id,
 }).then((result)=>{
  getTournament();
 })
  useEffect(()=>{
    getTournament();
    getFilieres();
    checkAdmin();
  },[Tournaments]);

  const [adminDeleteTournoi,setadminDeleteTournoi]=useState(false);
  const checkAdmin=()=>{
      const CryptingKey = "xxx";
      const encryptedData = localStorage.getItem('Crypted');
     if(encryptedData){
        const decryptedData = CryptoJS.AES.decrypt(encryptedData,CryptingKey).toString(CryptoJS.enc.Utf8);
   if(decryptedData==='admin'){
     setadminDeleteTournoi(true);
   }
   else{
     setadminDeleteTournoi(false);
   }
 }}
  return (
    <div className="Evenement-container">
        <h1 style={{margin: "100px 0px",fontStyle: "italic",color: "white"}}>Compéter , s'amuser , développer !</h1>
        <div className="Evenement-cards-container">
        {Tournaments?.length > 0 ? (
           Tournaments.map((T)=>(
            <div className="ClubCard-Container" key={T.id}>
              { adminDeleteTournoi ? (<button className="supp-tourney" onClick={()=>DeleteTournoi(T.id)}>supprimer</button>):(<></>)}
                <div className="Club-logo">
                 <img src={x} alt={T.nom} id="Clubimg"/>
                </div>
                <div className="CardDesign"></div>
                <div className="Club-info">
                  <div><h1 id="Clubtitle">{T.nom}✨</h1></div>
                  <div className="ppp"><p id="ClubDescri">{T.info}</p></div>
                  <div className="event-card-last">
                    <div>Date limit :{T.date}</div>
                    <div><h2>Place disponible : {T.place}</h2></div>
                    <button className="join-us" id="JoinButton" onClick={()=>handleParticipeShow(T.id)}>Participer</button>  
                  </div>
                </div>
            </div>
           
           )) 
        ):
        (
          <div>No Tournaments found </div>
        )}
        </div>

        {Participer ? 
        (<div className="join-tournament-container">
            <div className="join-tournament">
              <div className="close-pop" onClick={()=>setParticiper(false)}>X</div>
                <label htmlFor="">Nom: </label>
                <input type="text" name="" id="" onChange={(e)=>setNom(e.target.value)}/>
                <label htmlFor="">Prenom: </label>
                <input type="text" name="" id="" onChange={(e)=>setPrenom(e.target.value)}/>
                <label htmlFor="">Filiere: </label>
                <select name="" id="" onChange={(e)=>setFil(e.target.value)}>
                <option value="">filiere</option>
                  {filieres?.length > 0 ?(
                    <>
                    {filieres.map((filiere)=>(
                      <option value={filiere.id}>{filiere.nom}</option>
                    ))
                    }</>
                    ):
                    (<></>)
                  }
                  
                </select>
                <button className="submit-participer" onClick={()=>handleParticipation()}>submit</button>
                <div className="Participation-Result">{ParticipationResult}</div>
            </div>
         </div>
         ):
        (<></>)
        }
       

    </div>
   );
}
 
export default Evenement;