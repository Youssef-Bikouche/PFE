import "./style/Footer.css";
import { Link } from 'react-router-dom';
const Foot = () => {
  return (  
   <div className="footer">
    <div className="contact">
    <span className="title">Contact: </span>
      <span> <a href="mailto:este@uca.ma">este@uca.ma</a></span>
    <span>Tél :</span>
    <a href="tel:(+212) 5 24 79 20 64"> (+212) 5 24 79 20 64</a>
    <a href="tel:(+212) 5 24 79 26 48">(+212) 5 24 79 26 48</a>
    </div>
    <div className="LiensUtiles">
    <span className="title">Liens utils</span>
  <Link to="/Home"><span>▶</span>Home</Link>
  <Link to='/Reviews'><span>▶</span>Témoignages</Link>
  <Link to="/Clubs"><span>▶</span>Clubs</Link>
  <Link to="/SearchClicked"><span>▶</span>Espace des Questions</Link>
    </div>
    <div className="contact">
      <span className="title">Adresse  </span>
          <span> Km 9, Route d'Agadir, Essaouira Aljadida BP. 383, Essaouira</span>
    </div>
   </div>
  )
}
 
export default Foot;
