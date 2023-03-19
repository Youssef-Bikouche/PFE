import "./style/Home.css";
import why1 from "./images/why1.png";
import question from "./images/question.png";
import filiere from "./images/filiere.png";
import club from "./images/clubHome.png";
import review from "./images/reviewHome.png";
import Foot from "./Foot";


const Home = () => {
 return ( 
  <div className="Home">
    <div className="home-picture">
      <span>Ecole supérieure de technologie <br /> Essaouira <p>E-learning</p></span>
    </div>
    <div className="home-why">
    <span>Why e-learning</span>
    <div className="why-container">
      <div className="why-card">
        <div className="why-img">
        <img src={why1} />  
        </div>
        <div className="why-info">
          <span>gestion</span>
        </div>
      </div>
      <div className="why-card">
        <div className="why-img">
        <img src={why1} />  
        </div>
        <div className="why-info">
          <span>gestion</span>
        </div>
      </div>
      <div className="why-card">
        <div className="why-img">
        <img src={why1}/>  
        </div>
        <div className="why-info">
          <span>gestion</span>
        </div>
      </div>
      <div className="why-card">
        <div className="why-img">
        <img src={why1}/>  
        </div>
        <div className="why-info">
          <span>gestion</span>
        </div>
      </div>

    </div>
    </div>


    

  
    <div className="information">
      <div className="img-info">
          <img src={question}/> 
      </div>
      <div className="info">
      <h1>filieres</h1>
      <p>l'espace des filières est une fonctionnalité essentielle pour offrir une expérience d'apprentissage personnalisée aux apprenants et répondre à leurs besoins spécifiques de formation. Elle permet également aux établissements d'enseignement en ligne de proposer des parcours de formation cohérents et adaptés aux exigences du marché de l'emploi.</p>
      </div>
    </div>

    <div className="information">
      <div className="info">
      <h1>Question</h1>
      <p>L'espace de question permet aux apprenants de clarifier des concepts qui leur paraissent flous, de demander des explications supplémentaires sur des sujets abordés en cours ou encore de poser des questions pratiques sur l'organisation des activités pédagogiques. Les réponses apportées par les enseignants ou les autres apprenants peuvent aider à combler des lacunes dans la compréhension du cours et à renforcer les connaissances acquises.
      L'espace de question peut également favoriser les interactions entre les apprenants en encourageant les échanges autour du contenu du cours. Cela peut conduire à des discussions fructueuses et à une meilleure compréhension du sujet étudié.</p>
      </div>
      <div className="img-info">
          <img src={filiere}/> 
      </div>
    </div>

    <div className="information">
      <div className="img-info">
          <img src={club}/> 
      </div>
      <div className="info">
        <h1>Clubs</h1>
      <p>dédié à la vie communautaire et à la participation active des apprenants. Il s'agit d'un lieu virtuel où les apprenants peuvent se rassembler pour discuter, échanger des idées et collaborer sur des projets en groupe. Les clubs sont souvent organisés autour d'un intérêt commun, tel que l'apprentissage d'une langue étrangère, la programmation informatique, le marketing numérique, ou toute
         autre thématique pertinente à l'enseignement en ligne</p>
      </div>
    </div>

    <div className="information">
      <div className="info">
      <h1>Témoignages</h1>
      <p>donner un aperçu de l'expérience d'autres apprenants et de leur succès dans le parcours d'apprentissage. Les témoignages peuvent être présentés sous forme de vidéos, de textes ou d'images, et sont souvent recueillis auprès d'anciens apprenants
         qui ont suivi avec succès les cours proposés sur le site</p>
      </div>
      <div className="img-info">
          <img src={review}/> 
      </div>
    </div>
    <Foot />
  </div>
  );
}
 
export default Home;