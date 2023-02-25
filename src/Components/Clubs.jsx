import ClubCards from "./clubCards";
import ClubSlider from "./ClubSlider";
import "./style/clubs.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const Clubs = () => {
  const [Clubs,setClubs]=useState('');
  const getClubs= async event => {
    const response = await axios.post('http://localhost:8080/pfe/src/Components/PHP/getClubs.php').then((result)=>{
    console.log(result.data.data);
    setClubs(result.data.data);
    // console.log(Clubs);
  });}
  useEffect(()=>{
    getClubs();
  }
  ,[Clubs]);
  return ( 
    <div className="Club">
      <div className="ClubSlider">
      {/* <ClubCards/> */}
      <ClubSlider/>
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