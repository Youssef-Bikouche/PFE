import React from "react";
import Navbar from "./Components/Navbar";
import "./index.css";
import SearchClicked from "./Components/SearchClicked";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Filiere from "./Components/Filiere";
import Loginn from "./Components/Loginn";
import Register from "./Components/Register";
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
            <Home /></>
        }/>
          <Route exact path='/SearchClicked' element={<>
          <Navbar/>
          <SearchClicked />
          </>} />
          <Route exact path='/Login' element={<Loginn />} />
          <Route exact path='/Contact' element={<>
          <Navbar />
          <Contact /></>}/>
          <Route exact path='/Filiere' element={<>
          <Navbar />
          <Filiere />
          </>}/>
          <Route exact path='/Register' element={<Register />} />
        </Routes>    
  </Router>
 
  );
}

export default App;

