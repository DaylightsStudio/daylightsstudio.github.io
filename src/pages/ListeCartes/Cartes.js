import Clef from '../../cartesThumbnails/clef.webp'
import Dcriss from '../../cartesThumbnails/dcriss.webp'
import Bob_ev from '../../cartesThumbnails/bob_ev.webp'
import Gtii from '../../cartesThumbnails/gtii.webp'
import Ribsy from '../../cartesThumbnails/ribsy.webp'
import Lag_monster from '../../cartesThumbnails/lag_monster.webp'
import Galette from '../../cartesThumbnails/galette.webp'
import Good from '../../cartesThumbnails/good.webp'
import Verse from '../../cartesThumbnails/verse.webp'
import Karen from '../../cartesThumbnails/karen.webp'
import Os from '../../cartesThumbnails/os.webp'
import Frenchfox from '../../cartesThumbnails/frenchfox.webp'
import Plane from '../../cartesThumbnails/plane.webp'
import Nightshadows from '../../cartesThumbnails/nightshadows.webp'
import Adaoh from '../../cartesThumbnails/adaoh.webp'
import Conflit from '../../cartesThumbnails/conflit.webp'
import Postal_lady from '../../cartesThumbnails/postal_lady.webp'
import Eckko_ev from '../../cartesThumbnails/eckko_ev.webp'
import Frenchfox_ev from '../../cartesThumbnails/frenchfox_ev.webp'
import Mystery_box from '../../cartesThumbnails/mystery_box.webp'
import Sushi_mate from '../../cartesThumbnails/sushi_mate.webp'
import Kayla from '../../cartesThumbnails/kayla.webp'
import Potter_ev from '../../cartesThumbnails/potter_ev.webp'
import Lil_pink from '../../cartesThumbnails/lil_pink.webp'
import Dunkie from '../../cartesThumbnails/dunkie.webp'
import Boulanger from '../../cartesThumbnails/boulanger.webp'
import Liqueur_anti_t from '../../cartesThumbnails/liqueur_anti_t.webp'
import Badtivia from '../../cartesThumbnails/yogourt.webp'
import Potter from '../../cartesThumbnails/potter.webp'
import Creme_crispe from '../../cartesThumbnails/creme_crispe.webp'
import Moma from '../../cartesThumbnails/moma.webp'
import Platii from '../../cartesThumbnails/platii.webp'
import Aska from '../../cartesThumbnails/aska.webp'
import Bad_ev from '../../cartesThumbnails/bad_ev.webp'
import Misterk from '../../cartesThumbnails/misterk.webp'
import Bob from '../../cartesThumbnails/bob.webp'
import Jukebox from '../../cartesThumbnails/jukebox.webp'
import Liqueur from '../../cartesThumbnails/liqueur.webp'
import Nightshadows_ev from '../../cartesThumbnails/nightshadows_ev.webp'
import Marine from '../../cartesThumbnails/marine.webp'
import Reptilien from '../../cartesThumbnails/reptilien.webp'
import Pogo_mayo from '../../cartesThumbnails/pogo_mayo.webp'
import Gaming_chair from '../../cartesThumbnails/gaming_chair.webp'
import Fakefoxx from '../../cartesThumbnails/fakefoxx.webp'
import Recruit from '../../cartesThumbnails/recrue.webp'
import Daylights from '../../cartesThumbnails/daylights.webp'
import Bat_titan from '../../cartesThumbnails/bat.webp'
import New_follower from '../../cartesThumbnails/new_follower.webp'
import Déconnecté from '../../cartesThumbnails/déconnecté.webp'
import Niche from '../../cartesThumbnails/niche.webp'
import Reverse from '../../cartesThumbnails/reverse.webp'
import Bad from '../../cartesThumbnails/bad.webp'
import Daylights_ev from '../../cartesThumbnails/daylights_ev.webp'
import Max_the_james_l from '../../cartesThumbnails/max_the_james_l.webp'
import Sous_marin from '../../cartesThumbnails/sous_marin.webp'
import Snef from '../../cartesThumbnails/snef.webp'
import Bad_casino from '../../cartesThumbnails/bad_casino.webp'
import Mr_pouf from '../../cartesThumbnails/mr_pouf.webp'
import Lucy from '../../cartesThumbnails/lucy.webp'
import Eckko from '../../cartesThumbnails/eckko.webp'
import Lucy_ev from '../../cartesThumbnails/lucy_ev.webp'


import React from "react";
import { Link } from 'react-router-dom';
import './cartes.css'

function Cartes() {
    document.title = "Cartes - Titans Card Game"

    if (document.cookie === "showMedia=true") {
        return (
            <div>
                <h1>Toutes les cartes</h1>
                <div className="flexContainer">
                    <div className="item">
                        <img src={Max_the_james_l} alt="une carte"></img>
                        <h2 className="editionTitre">Max The James</h2>
                        <Link to={`/carte?n=max_the_james`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        <img src={Daylights} alt="une carte"></img>
                        <h2 className="editionTitre">01 Daylights</h2>
                        <Link to={`/carte?n=daylights`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        <img src={Eckko} alt="une carte"></img>
                        <h2 className="editionTitre">02 Eckko</h2>
                        <Link to={`/carte?n=eckko`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        <img src={Bad} alt="une carte"></img>
                        <h2 className="editionTitre">03 bad</h2>
                        <Link to={`/carte?n=bad`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        <img src={Potter} alt="une carte"></img>
                        <h2 className="editionTitre">04 Potter</h2>
                        <Link to={`/carte?n=potter`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        <img src={Frenchfox} alt="une carte"></img>
                        <h2 className="editionTitre">05 FrenchFox</h2>
                        <Link to={`/carte?n=frenchfox`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        <img src={Nightshadows} alt="une carte"></img>
                        <h2 className="editionTitre">06 NightShadows</h2>
                        <Link to={`/carte?n=nightshadows`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        <img src={Bob} alt="une carte"></img>
                        <h2 className="editionTitre">07 Bob</h2>
                        <Link to={`/carte?n=bob`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        <img src={Lucy} alt="une carte"></img>
                        <h2 className="editionTitre">08 Lucy</h2>
                        <Link to={`/carte?n=lucy`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        <img src={Lil_pink} alt="une carte"></img>
                        <h2 className="editionTitre">09 Lil Pink</h2>
                        <Link to={`/carte?n=lil_pink`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        <img src={Reptilien} alt="une carte"></img>
                        <h2 className="editionTitre">10 Reptilien</h2>
                        <Link to={`/carte?n=reptilien`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        <img src={Good} alt="une carte"></img>
                        <h2 className="editionTitre">11 Good</h2>
                        <Link to={`/carte?n=good`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        <img src={Kayla} alt="une carte"></img>
                        <h2 className="editionTitre">12 Kayla</h2>
                        <Link to={`/carte?n=kayla`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        <img src={Fakefoxx} alt="une carte"></img>
                        <h2 className="editionTitre">13 Fakefoxx</h2>
                        <Link to={`/carte?n=fakefoxx`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        <img src={Aska} alt="une carte"></img>
                        <h2 className="editionTitre">14 Aska</h2>
                        <Link to={`/carte?n=aska`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        <img src={Marine} alt="une carte"></img>
                        <h2 className="editionTitre">15 Marine</h2>
                        <Link to={`/carte?n=marine`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        <img src={Postal_lady} alt="une carte"></img>
                        <h2 className="editionTitre">16 Postal lady</h2>
                        <Link to={`/carte?n=postal_lady`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        <img src={Jukebox} alt="une carte"></img>
                        <h2 className="editionTitre">17 Jukebox</h2>
                        <Link to={`/carte?n=jukebox`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        <img src={Moma} alt="une carte"></img>
                        <h2 className="editionTitre">18 Moma</h2>
                        <Link to={`/carte?n=moma`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        <img src={Adaoh} alt="une carte"></img>
                        <h2 className="editionTitre">19 Adaoh</h2>
                        <Link to={`/carte?n=adaoh`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        <img src={Dunkie} alt="une carte"></img>
                        <h2 className="editionTitre">20 Dunkie</h2>
                        <Link to={`/carte?n=dunkie`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        <img src={Snef} alt="une carte"></img>
                        <h2 className="editionTitre">21 Snef</h2>
                        <Link to={`/carte?n=snef`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        <img src={Ribsy} alt="une carte"></img>
                        <h2 className="editionTitre">22 Ribsy</h2>
                        <Link to={`/carte?n=ribsy`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        <img src={Misterk} alt="une carte"></img>
                        <h2 className="editionTitre">23 MisterK</h2>
                        <Link to={`/carte?n=misterk`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        <img src={Dcriss} alt="une carte"></img>
                        <h2 className="editionTitre">24 Dcriss</h2>
                        <Link to={`/carte?n=dcriss`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        <img src={Recruit} alt="une carte"></img>
                        <h2 className="editionTitre">25 Recruit</h2>
                        <Link to={`/carte?n=recruit`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        <img src={Conflit} alt="une carte"></img>
                        <h2 className="editionTitre">26 Conflit</h2>
                        <Link to={`/carte?n=conflit`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        <img src={Liqueur} alt="une carte"></img>
                        <h2 className="editionTitre">27 Liqueur</h2>
                        <Link to={`/carte?n=liqueur`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        <img src={Pogo_mayo} alt="une carte"></img>
                        <h2 className="editionTitre">28 Pogo Mayo</h2>
                        <Link to={`/carte?n=pogo_mayo`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        <img src={Badtivia} alt="une carte"></img>
                        <h2 className="editionTitre">29 Badtivia</h2>
                        <Link to={`/carte?n=badtivia`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        <img src={Gtii} alt="une carte"></img>
                        <h2 className="editionTitre">30 GTII</h2>
                        <Link to={`/carte?n=gtii`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        <img src={Boulanger} alt="une carte"></img>
                        <h2 className="editionTitre">31 Boulanger</h2>
                        <Link to={`/carte?n=boulanger`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        <img src={Liqueur_anti_t} alt="une carte"></img>
                        <h2 className="editionTitre">32 Liqueur Anti-T</h2>
                        <Link to={`/carte?n=liqueur_anti_t`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        <img src={Mystery_box} alt="une carte"></img>
                        <h2 className="editionTitre">33 Mystery Box</h2>
                        <Link to={`/carte?n=mystery_box`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        <img src={Karen} alt="une carte"></img>
                        <h2 className="editionTitre">34 Karen</h2>
                        <Link to={`/carte?n=karen`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        <img src={Niche} alt="une carte"></img>
                        <h2 className="editionTitre">35 Niche</h2>
                        <Link to={`/carte?n=niche`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        <img src={Os} alt="une carte"></img>
                        <h2 className="editionTitre">36 Os</h2>
                        <Link to={`/carte?n=os`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        <img src={Sous_marin} alt="une carte"></img>
                        <h2 className="editionTitre">37 Sous Marin</h2>
                        <Link to={`/carte?n=sous_marin`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        <img src={Gaming_chair} alt="une carte"></img>
                        <h2 className="editionTitre">38 Gaming Chair</h2>
                        <Link to={`/carte?n=gaming_chair`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        <img src={Galette} alt="une carte"></img>
                        <h2 className="editionTitre">39 Galette</h2>
                        <Link to={`/carte?n=galette`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        <img src={Plane} alt="une carte"></img>
                        <h2 className="editionTitre">40 Plane</h2>
                        <Link to={`/carte?n=plane`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        <img src={Déconnecté} alt="une carte"></img>
                        <h2 className="editionTitre">41 Déconnecté</h2>
                        <Link to={`/carte?n=deconnecte`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        <img src={Sushi_mate} alt="une carte"></img>
                        <h2 className="editionTitre">42 Sushi Mate</h2>
                        <Link to={`/carte?n=sushi_mate`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        <img src={Creme_crispe} alt="une carte"></img>
                        <h2 className="editionTitre">43 Crème Crispé</h2>
                        <Link to={`/carte?n=creme_crispe`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        <img src={Mr_pouf} alt="une carte"></img>
                        <h2 className="editionTitre">44 Mr Pouf</h2>
                        <Link to={`/carte?n=mr_pouf`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        <img src={Clef} alt="une carte"></img>
                        <h2 className="editionTitre">45 Clef</h2>
                        <Link to={`/carte?n=clef`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        <img src={Lag_monster} alt="une carte"></img>
                        <h2 className="editionTitre">46 Lag Monster</h2>
                        <Link to={`/carte?n=lag_monster`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        <img src={Bad_casino} alt="une carte"></img>
                        <h2 className="editionTitre">47 Bad Casino</h2>
                        <Link to={`/carte?n=bad_casino`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        <img src={Reverse} alt="une carte"></img>
                        <h2 className="editionTitre">48 Reverse</h2>
                        <Link to={`/carte?n=reverse`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        <img src={Verse} alt="une carte"></img>
                        <h2 className="editionTitre">49 Verse</h2>
                        <Link to={`/carte?n=verse`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        <img src={New_follower} alt="une carte"></img>
                        <h2 className="editionTitre">50 New Follower</h2>
                        <Link to={`/carte?n=new_follow`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        <img src={Bat_titan} alt="une carte"></img>
                        <h2 className="editionTitre">51 Bat</h2>
                        <Link to={`/carte?n=bat_titan`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        <img src={Platii} alt="une carte"></img>
                        <h2 className="editionTitre">52 PlatII</h2>
                        <Link to={`/carte?n=platii`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        <img src={Daylights_ev} alt="une carte"></img>
                        <h2 className="editionTitre">53 Daylights EV</h2>
                        <Link to={`/carte?n=daylights_ev`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        <img src={Eckko_ev} alt="une carte"></img>
                        <h2 className="editionTitre">54 Eckko EV</h2>
                        <Link to={`/carte?n=eckko_ev`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        <img src={Bad_ev} alt="une carte"></img>
                        <h2 className="editionTitre">55 Bad EV</h2>
                        <Link to={`/carte?n=bad_ev`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        <img src={Potter_ev} alt="une carte"></img>
                        <h2 className="editionTitre">56 Potter EV</h2>
                        <Link to={`/carte?n=potter_ev`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        <img src={Frenchfox_ev} alt="une carte"></img>
                        <h2 className="editionTitre">57 FrenchFox EV</h2>
                        <Link to={`/carte?n=frenchfox_ev`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        <img src={Nightshadows_ev} alt="une carte"></img>
                        <h2 className="editionTitre">58 NightShadows EV</h2>
                        <Link to={`/carte?n=nightsshadows_ev`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        <img src={Bob_ev} alt="une carte"></img>
                        <h2 className="editionTitre">59 Bob EV</h2>
                        <Link to={`/carte?n=bob_ev`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        <img src={Lucy_ev} alt="une carte"></img>
                        <h2 className="editionTitre">60 Lucyfer EV</h2>
                        <Link to={`/carte?n=lucyfer_ev`}><button>Afficher la carte</button></Link>
                    </div>
                </div>
            </div>
        );
    }

    else if (document.cookie === "showMedia=false") {
        return (
            <div>
                <h1>Toutes les cartes</h1>
                <div className="flexContainer">
                    <div className="item">
                        
                        <h2 className="editionTitre">Max The James</h2>
                        <Link to={`/carte?n=max_the_james`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        
                        <h2 className="editionTitre">01 Daylights</h2>
                        <Link to={`/carte?n=daylights`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        
                        <h2 className="editionTitre">02 Eckko</h2>
                        <Link to={`/carte?n=eckko`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        
                        <h2 className="editionTitre">03 bad</h2>
                        <Link to={`/carte?n=bad`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        
                        <h2 className="editionTitre">04 Potter</h2>
                        <Link to={`/carte?n=potter`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        
                        <h2 className="editionTitre">05 FrenchFox</h2>
                        <Link to={`/carte?n=frenchfox`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        
                        <h2 className="editionTitre">06 NightShadows</h2>
                        <Link to={`/carte?n=nightshadows`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        
                        <h2 className="editionTitre">07 Bob</h2>
                        <Link to={`/carte?n=bob`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        
                        <h2 className="editionTitre">08 Lucy</h2>
                        <Link to={`/carte?n=lucy`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        
                        <h2 className="editionTitre">09 Lil Pink</h2>
                        <Link to={`/carte?n=lil_pink`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        
                        <h2 className="editionTitre">10 Reptilien</h2>
                        <Link to={`/carte?n=reptilien`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        
                        <h2 className="editionTitre">11 Good</h2>
                        <Link to={`/carte?n=good`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        
                        <h2 className="editionTitre">12 Kayla</h2>
                        <Link to={`/carte?n=kayla`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        
                        <h2 className="editionTitre">13 Fakefoxx</h2>
                        <Link to={`/carte?n=fakefoxx`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        
                        <h2 className="editionTitre">14 Aska</h2>
                        <Link to={`/carte?n=aska`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        
                        <h2 className="editionTitre">15 Marine</h2>
                        <Link to={`/carte?n=marine`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        
                        <h2 className="editionTitre">16 Postal lady</h2>
                        <Link to={`/carte?n=postal_lady`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        
                        <h2 className="editionTitre">17 Jukebox</h2>
                        <Link to={`/carte?n=jukebox`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        
                        <h2 className="editionTitre">18 Moma</h2>
                        <Link to={`/carte?n=moma`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        
                        <h2 className="editionTitre">19 Adaoh</h2>
                        <Link to={`/carte?n=adaoh`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        
                        <h2 className="editionTitre">20 Dunkie</h2>
                        <Link to={`/carte?n=dunkie`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        
                        <h2 className="editionTitre">21 Snef</h2>
                        <Link to={`/carte?n=snef`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        
                        <h2 className="editionTitre">22 Ribsy</h2>
                        <Link to={`/carte?n=ribsy`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        
                        <h2 className="editionTitre">23 MisterK</h2>
                        <Link to={`/carte?n=misterk`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        
                        <h2 className="editionTitre">24 Dcriss</h2>
                        <Link to={`/carte?n=dcriss`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        
                        <h2 className="editionTitre">25 Recruit</h2>
                        <Link to={`/carte?n=recruit`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        
                        <h2 className="editionTitre">26 Conflit</h2>
                        <Link to={`/carte?n=conflit`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        
                        <h2 className="editionTitre">27 Liqueur</h2>
                        <Link to={`/carte?n=liqueur`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        
                        <h2 className="editionTitre">28 Pogo Mayo</h2>
                        <Link to={`/carte?n=pogo_mayo`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        
                        <h2 className="editionTitre">29 Badtivia</h2>
                        <Link to={`/carte?n=badtivia`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        
                        <h2 className="editionTitre">30 GTII</h2>
                        <Link to={`/carte?n=gtii`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        
                        <h2 className="editionTitre">31 Boulanger</h2>
                        <Link to={`/carte?n=boulanger`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        
                        <h2 className="editionTitre">32 Liqueur Anti-T</h2>
                        <Link to={`/carte?n=liqueur_anti_t`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        
                        <h2 className="editionTitre">33 Mystery Box</h2>
                        <Link to={`/carte?n=mystery_box`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        
                        <h2 className="editionTitre">34 Karen</h2>
                        <Link to={`/carte?n=karen`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        
                        <h2 className="editionTitre">35 Niche</h2>
                        <Link to={`/carte?n=niche`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        
                        <h2 className="editionTitre">36 Os</h2>
                        <Link to={`/carte?n=os`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        
                        <h2 className="editionTitre">37 Sous Marin</h2>
                        <Link to={`/carte?n=sous_marin`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        
                        <h2 className="editionTitre">38 Gaming Chair</h2>
                        <Link to={`/carte?n=gaming_chair`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        
                        <h2 className="editionTitre">39 Galette</h2>
                        <Link to={`/carte?n=galette`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        
                        <h2 className="editionTitre">40 Plane</h2>
                        <Link to={`/carte?n=plane`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        
                        <h2 className="editionTitre">41 Déconnecté</h2>
                        <Link to={`/carte?n=deconnecte`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        
                        <h2 className="editionTitre">42 Sushi Mate</h2>
                        <Link to={`/carte?n=sushi_mate`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        
                        <h2 className="editionTitre">43 Crème Crispé</h2>
                        <Link to={`/carte?n=creme_crispe`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        
                        <h2 className="editionTitre">44 Mr Pouf</h2>
                        <Link to={`/carte?n=mr_pouf`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        
                        <h2 className="editionTitre">45 Clef</h2>
                        <Link to={`/carte?n=clef`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        
                        <h2 className="editionTitre">46 Lag Monster</h2>
                        <Link to={`/carte?n=lag_monster`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        
                        <h2 className="editionTitre">47 Bad Casino</h2>
                        <Link to={`/carte?n=bad_casino`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        
                        <h2 className="editionTitre">48 Reverse</h2>
                        <Link to={`/carte?n=reverse`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        
                        <h2 className="editionTitre">49 Verse</h2>
                        <Link to={`/carte?n=verse`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        
                        <h2 className="editionTitre">50 New Follower</h2>
                        <Link to={`/carte?n=new_follow`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        
                        <h2 className="editionTitre">51 Bat</h2>
                        <Link to={`/carte?n=bat_titan`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        
                        <h2 className="editionTitre">52 PlatII</h2>
                        <Link to={`/carte?n=platii`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        
                        <h2 className="editionTitre">53 Daylights EV</h2>
                        <Link to={`/carte?n=daylights_ev`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        
                        <h2 className="editionTitre">54 Eckko EV</h2>
                        <Link to={`/carte?n=eckko_ev`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        
                        <h2 className="editionTitre">55 Bad EV</h2>
                        <Link to={`/carte?n=bad_ev`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        
                        <h2 className="editionTitre">56 Potter EV</h2>
                        <Link to={`/carte?n=potter_ev`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        
                        <h2 className="editionTitre">57 FrenchFox EV</h2>
                        <Link to={`/carte?n=frenchfox_ev`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        
                        <h2 className="editionTitre">58 NightShadows EV</h2>
                        <Link to={`/carte?n=nightsshadows_ev`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        
                        <h2 className="editionTitre">59 Bob EV</h2>
                        <Link to={`/carte?n=bob_ev`}><button>Afficher la carte</button></Link>
                    </div>


                    <div className="item">
                        
                        <h2 className="editionTitre">60 Lucyfer EV</h2>
                        <Link to={`/carte?n=lucyfer_ev`}><button>Afficher la carte</button></Link>
                    </div>
                </div>
            </div>
        );
    }


}

export default Cartes;