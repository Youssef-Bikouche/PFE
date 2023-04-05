import React from "react";
import Navbar from "./Components/Navbar";
import "./index.css";
import SearchClicked from "./Components/SearchClicked";
import Home from "./Components/Home";
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Filiere from "./Components/Filiere";
import Loginn from "./Components/Loginn";
import Register from "./Components/Register";
import Clubs from "./Components/Clubs";
import Reponse from "./Components/Reponse";
import Reviews from "./Components/Reviews";
import Footer from "./Components/Foot";
import Foot from "./Components/Foot";
import Users from "./Components/admin/Users";
import AjoutFiliere from "./Components/admin/AjoutFiliere";
import AjoutClub from "./Components/admin/AjoutClub";
import EditClubs from "./Components/admin/EditClub";
import Uploadcourse from "./Components/professeur/Uploadcourse";
import DeleteFiliere from "./Components/admin/DeleteFiliere";
import Evenement from "./Components/Evenment";
import AjoutTournoi from "./Components/admin/AjoutTournoi";
import SupprimerCourse from "./Components/professeur/SupprimerCourse";
function App() {
  return (
  <Router>
        <Routes>
        <Route exact path='/' element={<>
            <Navbar />
            <Home /></>
        }/>
          <Route exact path='/Home' element={<>
            <Navbar />
            <Home />
           
            </>
        }/>
        <Route exact path='/Reviews' element={<>
            <Navbar />
            <Reviews/></>
        }/>
          <Route exact path='/SearchClicked' element={<>
          <SearchClicked />
        
          </>} />
          <Route exact path='/Reponse' element={<>
          <Reponse />
          </>} />
         
          <Route exact path='/Login' element={<Loginn />} />
          <Route exact path='/Clubs' element={<>
          <Navbar />
          <Clubs /></>}/>
          <Route exact path='/Filiere' element={<>
          <Navbar />
          <Filiere />
          <Foot />
          </>}/>

          <Route exact path='/Register' element={<Register />} />
          <Route exact path='/Users' element={<>
            <Navbar />
            <Users /></>
        }/>
        <Route exact path='/AjoutFiliere' element={<>
            <Navbar />
            <AjoutFiliere /></>
        }/>
      <Route exact path='/AjoutClub' element={<>
            <Navbar />
            <AjoutClub/></>
        }/>
        <Route exact path='/SupprimerClub' element={<>
            <Navbar />
            <EditClubs/></>
        }/>
          <Route exact path='/Uploadcourse' element={<>
            <Navbar />
            <Uploadcourse/></>
        }/>
          <Route exact path='/DeleteFiliere' element={<>
            <Navbar />
            <DeleteFiliere/></>
        }/>

          <Route exact path='/Evenement' element={<>
            <Navbar />
            <Evenement /></>
        }/>
        <Route exact path='/AjouterTournoi' element={<>
            <Navbar />
            <AjoutTournoi /></>
        }/>

        <Route exact path='/SupprimerCourse' element={<>
            <Navbar />
            <SupprimerCourse /></>
        }/>
        </Routes>    
  </Router>
 
  );
}

export default App;

