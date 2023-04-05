import ClubCards from "./clubCards";
import "./style/clubs.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import ClubSlider from "./ClubSlider";
const Clubs = () => {
  const [Clubs,setClubs]=useState('');
  useEffect(()=>{
    const getClubs= async event => {
      const response = await axios.post('http://localhost:8080/pfe/src/Components/PHP/getClubs.php').then((result)=>{
      setClubs(result.data.data);
    });}
    getClubs();
  }
  ,[Clubs]);
  return ( 
    <div className="Club">
      <div className="ClubSlider">
       <ClubSlider props={Clubs}/>
      </div>
      
      {Clubs?.length > 0 ? (
        <div className="Containercards">
            {Clubs.map((Club) => (
              <ClubCards props={Club} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No Club found</h2>
          </div>)}
    </div>
   );
}
 
export default Clubs;