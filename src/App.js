import foreground from './assets/foreground.png';
import middleground from './assets/middleground.png';
import background from './assets/background.png';
import './App.css';
import Tilt from 'react-parallax-tilt';

function App() {
  return (


     
<div className="App">

<header className="App-header">
<a style={{color: "#fff", fontSize: 75, fontWeight: 'bold'}}
    variant="body2">
      MonÉcole
      </a>
      <a> </a>

      <Tilt
        className="background"
        tiltMaxAngleX={20}
        tiltMaxAngleY={10}
        tiltReverse={true}
        perspective={1000}
        transitionSpeed={1500}
        scale={1.1}
        gyroscope={true} >
        <img src={foreground} style={{height: "auto", width: "48vmin"}} className="foreground" alt="pic" />
        <img src={middleground} style={{height: "auto", width: "48vmin"}} className="middleground" alt="pic" />
      </Tilt>

  <p style={{maxWidth: "60vh", fontSize: 20, paddingTop: "2vh", paddingBottom: "2vh", paddingLeft: "2vw", paddingRight: "2vw"}}>
  MonÉcole est une application pour les élèves et les enseignants qui permet de faciliter l'accès à l'horaire de classe, les devoirs à remettre, et les annonces de l'école.
  </p>
    <div>
      <a href='https://play.google.com/store/apps/details?id=com.myschool.android&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img style={{width: "29vh", height: "auto"}} alt='Disponible sur Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/fr_badge_web_generic.png'/></a>
    <br/>
      <a  href='https://apps.apple.com/us/app/mon%C3%A9cole/id1562920377'><img style={{width: "25vh", height: "auto"}} alt='Disponible sur App Store' src='https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg'/></a>
    </div>
  
    <a 
    style={{color: "#2c8ed4", fontSize: 20}}
    component="button" 
    href="mailto:support@monecole.app"
    variant="body2">
      Contact 
    </a>
    <a 
    style={{color: "#2c8ed4", fontSize:18}}
    component="button" 
    href="https://docs.google.com/document/d/18UBHAIjJLIMMurPUy6g0UWnxpW1zBGxEJsxwx_DZ0s8/edit?usp=sharing"
    variant="body2">
      Politique de confidentialité
    </a>
    <a 
    style={{color: "#fff", fontSize:20}}>
       MonÉcole, une compagnie JAQuébec. 
    </a>
    
</header>
</div>
  
  );
}

export default App;
