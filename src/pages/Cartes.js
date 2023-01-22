import Clef from '../cartesThumbnails/clef.png'
import Dcriss_card from '../cartesThumbnails/dcriss_card.png'
import Bob_ev from '../cartesThumbnails/bob_ev.png'
import Gtii from '../cartesThumbnails/gtii.png'
import Ribsy_card from '../cartesThumbnails/ribsy_card.png'
import Lag_monster from '../cartesThumbnails/lag_monster.png'
import Galette from '../cartesThumbnails/galette.png'
import Good from '../cartesThumbnails/good.png'
import Verse_card from '../cartesThumbnails/verse_card.png'
import Karen_card from '../cartesThumbnails/karen_card.png'
import Os_card from '../cartesThumbnails/os_card.png'
import Frenchfox from '../cartesThumbnails/frenchfox.png'
import Plane_card from '../cartesThumbnails/plane_card.png'
import Nightshadows from '../cartesThumbnails/nightshadows.png'
import Adaoh from '../cartesThumbnails/adaoh.png'
import Conflit_card from '../cartesThumbnails/conflit_card.png'
import Postal_lady_card from '../cartesThumbnails/postal_lady_card.png'
import Eckko_ev_card from '../cartesThumbnails/eckko_ev_card.png'
import Frenchfox_ev from '../cartesThumbnails/frenchfox_ev.png'
import Mystery_box from '../cartesThumbnails/mystery_box.png'
import Sushi_mate from '../cartesThumbnails/sushi_mate.png'
import Kayla from '../cartesThumbnails/kayla.png'
import Potter_ev from '../cartesThumbnails/potter_ev.png'
import Lil_pink from '../cartesThumbnails/lil_pink.png'
import Dunkie_card from '../cartesThumbnails/dunkie_card.png'
import Boulanger from '../cartesThumbnails/boulanger.png'
import Liqueur_anti_t from '../cartesThumbnails/liqueur_anti_t.png'
import Yogourt from '../cartesThumbnails/yogourt.png'
import Potter from '../cartesThumbnails/potter.png'
import Creme_crispe from '../cartesThumbnails/creme_crispe.png'
import Moma from '../cartesThumbnails/moma.png'
import Platii from '../cartesThumbnails/platii.png'
import Aska_card from '../cartesThumbnails/aska_card.png'
import Bad_ev from '../cartesThumbnails/bad_ev.png'
import Misterk_card from '../cartesThumbnails/misterk_card.png'
import Bob from '../cartesThumbnails/bob.png'
import Jukebox_card from '../cartesThumbnails/jukebox_card.png'
import Liqueur from '../cartesThumbnails/liqueur.png'
import Nightshadows_ev from '../cartesThumbnails/nightshadows_ev.png'
import Marine from '../cartesThumbnails/marine.png'
import Reptilien from '../cartesThumbnails/reptilien.png'
import Pogo_mayo from '../cartesThumbnails/pogo_mayo.png'
import Gaming_chair from '../cartesThumbnails/gaming_chair.png'
import Fakefoxx_card from '../cartesThumbnails/fakefoxx_card.png'
import Recrue from '../cartesThumbnails/recrue.png'
import Daylights from '../cartesThumbnails/daylights.png'
import Bat_card from '../cartesThumbnails/bat_card.png'
import New_follower_card from '../cartesThumbnails/new_follower_card.png'
import Déconnecté from '../cartesThumbnails/déconnecté.png'
import Niche from '../cartesThumbnails/niche.png'
import Reverse_card from '../cartesThumbnails/reverse_card.png'
import Bad from '../cartesThumbnails/bad.png'
import Daylights_ev from '../cartesThumbnails/daylights_ev.png'
import Max_the_james_l from '../cartesThumbnails/max_the_james_l.png'
import Sous_marin from '../cartesThumbnails/sous_marin.png'
import Snef from '../cartesThumbnails/snef.png'
import Bad_casino from '../cartesThumbnails/bad_casino.png'
import Mr_pouf from '../cartesThumbnails/mr_pouf.png'
import Lucy from '../cartesThumbnails/lucy.png'
import Back from '../cartesThumbnails/back.png'
import Eckko_card from '../cartesThumbnails/eckko_card.png'
import Lucy_ev from '../cartesThumbnails/lucy_ev.png'


import React from "react";
import { Link } from 'react-router-dom';

function Cartes() {
    document.title = "Cartes - Titans Card Game"
    return (
        <div>
            <h1>Router</h1>
            <h2>Decks complets</h2>
            <div className="flexContainer">
                <div className="item">
                    <img src={Clef}></img>
                    <h2 className="editionTitre">45 Clef</h2>
                    <button><Link to={`/carte?n=clef`}>Afficher la carte</Link></button>
                </div>


                <div className="item">
                    <img src={Dcriss_card}></img>
                    <h2 className="editionTitre">24 Dcriss</h2>
                    <button><Link to={`/carte?n=dcriss`}>Afficher la carte</Link></button>
                </div>


                <div className="item">
                    <img src={Bob_ev}></img>
                    <h2 className="editionTitre">59 Bob ev</h2>
                    <button><Link to={`/carte?n=bob_ev`}>Afficher la carte</Link></button>
                </div>


                <div className="item">
                    <img src={Gtii}></img>
                    <h2 className="editionTitre">30 GTII</h2>
                    <button><Link to={`/carte?n=gtii`}>Afficher la carte</Link></button>
                </div>


                <div className="item">
                    <img src={Ribsy_card}></img>
                    <h2 className="editionTitre">22 Ribsy</h2>
                    <button><Link to={`/carte?n=ribsy`}>Afficher la carte</Link></button>
                </div>


                <div className="item">
                    <img src={Lag_monster}></img>
                    <h2 className="editionTitre">46 lag monster</h2>
                    <button><Link to={`/carte?n=lag_monster`}>Afficher la carte</Link></button>
                </div>


                <div className="item">
                    <img src={Galette}></img>
                    <h2 className="editionTitre">39 Galette</h2>
                    <button><Link to={`/carte?n=galette`}>Afficher la carte</Link></button>
                </div>


                <div className="item">
                    <img src={Good}></img>
                    <h2 className="editionTitre">11 Good</h2>
                    <button><Link to={`/carte?n=good`}>Afficher la carte</Link></button>
                </div>


                <div className="item">
                    <img src={Verse_card}></img>
                    <h2 className="editionTitre">49 Verse</h2>
                    <button><Link to={`/carte?n=verse`}>Afficher la carte</Link></button>
                </div>


                <div className="item">
                    <img src={Karen_card}></img>
                    <h2 className="editionTitre">34 Karen</h2>
                    <button><Link to={`/carte?n=karen`}>Afficher la carte</Link></button>
                </div>


                <div className="item">
                    <img src={Os_card}></img>
                    <h2 className="editionTitre">36 Os</h2>
                    <button><Link to={`/carte?n=os`}>Afficher la carte</Link></button>
                </div>


                <div className="item">
                    <img src={Frenchfox}></img>
                    <h2 className="editionTitre">05 FrenchFox</h2>
                    <button><Link to={`/carte?n=frenchfox`}>Afficher la carte</Link></button>
                </div>


                <div className="item">
                    <img src={Plane_card}></img>
                    <h2 className="editionTitre">40 Plane</h2>
                    <button><Link to={`/carte?n=plane`}>Afficher la carte</Link></button>
                </div>


                <div className="item">
                    <img src={Nightshadows}></img>
                    <h2 className="editionTitre">06 NightShadows</h2>
                    <button><Link to={`/carte?n=nightshadows`}>Afficher la carte</Link></button>
                </div>


                <div className="item">
                    <img src={Adaoh}></img>
                    <h2 className="editionTitre">19 Adaoh</h2>
                    <button><Link to={`/carte?n=adaoh`}>Afficher la carte</Link></button>
                </div>


                <div className="item">
                    <img src={Conflit_card}></img>
                    <h2 className="editionTitre">26 conflit</h2>
                    <button><Link to={`/carte?n=conflit`}>Afficher la carte</Link></button>
                </div>


                <div className="item">
                    <img src={Postal_lady_card}></img>
                    <h2 className="editionTitre">16 Postal lady</h2>
                    <button><Link to={`/carte?n=postal_lady`}>Afficher la carte</Link></button>
                </div>


                <div className="item">
                    <img src={Eckko_ev_card}></img>
                    <h2 className="editionTitre">54 Eckko ev</h2>
                    <button><Link to={`/carte?n=eckko_ev`}>Afficher la carte</Link></button>
                </div>


                <div className="item">
                    <img src={Frenchfox_ev}></img>
                    <h2 className="editionTitre">57 FrenchFox ev</h2>
                    <button><Link to={`/carte?n=frenchfox_ev`}>Afficher la carte</Link></button>
                </div>


                <div className="item">
                    <img src={Mystery_box}></img>
                    <h2 className="editionTitre">33 Mystery Box</h2>
                    <button><Link to={`/carte?n=mystery_box`}>Afficher la carte</Link></button>
                </div>


                <div className="item">
                    <img src={Sushi_mate}></img>
                    <h2 className="editionTitre">42 Sushi Mate</h2>
                    <button><Link to={`/carte?n=sushi_mate`}>Afficher la carte</Link></button>
                </div>


                <div className="item">
                    <img src={Kayla}></img>
                    <h2 className="editionTitre">12 Kayla</h2>
                    <button><Link to={`/carte?n=kayla`}>Afficher la carte</Link></button>
                </div>


                <div className="item">
                    <img src={Potter_ev}></img>
                    <h2 className="editionTitre">56 Potter ev</h2>
                    <button><Link to={`/carte?n=potter_ev`}>Afficher la carte</Link></button>
                </div>


                <div className="item">
                    <img src={Lil_pink}></img>
                    <h2 className="editionTitre">09 Lil_Pink</h2>
                    <button><Link to={`/carte?n=lil_pink`}>Afficher la carte</Link></button>
                </div>


                <div className="item">
                    <img src={Dunkie_card}></img>
                    <h2 className="editionTitre">20 Dunkie</h2>
                    <button><Link to={`/carte?n=dunkie`}>Afficher la carte</Link></button>
                </div>


                <div className="item">
                    <img src={Boulanger}></img>
                    <h2 className="editionTitre">31 Boulanger</h2>
                    <button><Link to={`/carte?n=boulanger`}>Afficher la carte</Link></button>
                </div>


                <div className="item">
                    <img src={Liqueur_anti_t}></img>
                    <h2 className="editionTitre">32 liqueur anti t</h2>
                    <button><Link to={`/carte?n=liqueur_anti_t`}>Afficher la carte</Link></button>
                </div>


                <div className="item">
                    <img src={Yogourt}></img>
                    <h2 className="editionTitre">29 yogourt</h2>
                    <button><Link to={`/carte?n=yogourt`}>Afficher la carte</Link></button>
                </div>


                <div className="item">
                    <img src={Potter}></img>
                    <h2 className="editionTitre">04 Potter</h2>
                    <button><Link to={`/carte?n=potter`}>Afficher la carte</Link></button>
                </div>


                <div className="item">
                    <img src={Creme_crispe}></img>
                    <h2 className="editionTitre">43 Creme Crispe</h2>
                    <button><Link to={`/carte?n=creme_crispe`}>Afficher la carte</Link></button>
                </div>


                <div className="item">
                    <img src={Moma}></img>
                    <h2 className="editionTitre">18 Moma</h2>
                    <button><Link to={`/carte?n=moma`}>Afficher la carte</Link></button>
                </div>


                <div className="item">
                    <img src={Platii}></img>
                    <h2 className="editionTitre">52 PlatII</h2>
                    <button><Link to={`/carte?n=platii`}>Afficher la carte</Link></button>
                </div>


                <div className="item">
                    <img src={Aska_card}></img>
                    <h2 className="editionTitre">14 Aska</h2>
                    <button><Link to={`/carte?n=aska`}>Afficher la carte</Link></button>
                </div>


                <div className="item">
                    <img src={Bad_ev}></img>
                    <h2 className="editionTitre">55 bad ev</h2>
                    <button><Link to={`/carte?n=bad_ev`}>Afficher la carte</Link></button>
                </div>


                <div className="item">
                    <img src={Misterk_card}></img>
                    <h2 className="editionTitre">23 MisterK</h2>
                    <button><Link to={`/carte?n=misterk`}>Afficher la carte</Link></button>
                </div>


                <div className="item">
                    <img src={Bob}></img>
                    <h2 className="editionTitre">07 Bob</h2>
                    <button><Link to={`/carte?n=bob`}>Afficher la carte</Link></button>
                </div>


                <div className="item">
                    <img src={Jukebox_card}></img>
                    <h2 className="editionTitre">17 Jukebox</h2>
                    <button><Link to={`/carte?n=jukebox`}>Afficher la carte</Link></button>
                </div>


                <div className="item">
                    <img src={Liqueur}></img>
                    <h2 className="editionTitre">27 Liqueur</h2>
                    <button><Link to={`/carte?n=liqueur`}>Afficher la carte</Link></button>
                </div>


                <div className="item">
                    <img src={Nightshadows_ev}></img>
                    <h2 className="editionTitre">58 NightShadows ev</h2>
                    <button><Link to={`/carte?n=nightshadows_ev`}>Afficher la carte</Link></button>
                </div>


                <div className="item">
                    <img src={Marine}></img>
                    <h2 className="editionTitre">15 Marine</h2>
                    <button><Link to={`/carte?n=marine`}>Afficher la carte</Link></button>
                </div>


                <div className="item">
                    <img src={Reptilien}></img>
                    <h2 className="editionTitre">10 Reptilien</h2>
                    <button><Link to={`/carte?n=reptilien`}>Afficher la carte</Link></button>
                </div>


                <div className="item">
                    <img src={Pogo_mayo}></img>
                    <h2 className="editionTitre">28 Pogo Mayo</h2>
                    <button><Link to={`/carte?n=pogo_mayo`}>Afficher la carte</Link></button>
                </div>


                <div className="item">
                    <img src={Gaming_chair}></img>
                    <h2 className="editionTitre">38 Gaming Chair</h2>
                    <button><Link to={`/carte?n=gaming_chair`}>Afficher la carte</Link></button>
                </div>


                <div className="item">
                    <img src={Fakefoxx_card}></img>
                    <h2 className="editionTitre">13 Fakefoxx</h2>
                    <button><Link to={`/carte?n=fakefoxx`}>Afficher la carte</Link></button>
                </div>


                <div className="item">
                    <img src={Recrue}></img>
                    <h2 className="editionTitre">25 Recrue</h2>
                    <button><Link to={`/carte?n=recrue`}>Afficher la carte</Link></button>
                </div>


                <div className="item">
                    <img src={Daylights}></img>
                    <h2 className="editionTitre">01 daylights</h2>
                    <button><Link to={`/carte?n=daylights`}>Afficher la carte</Link></button>
                </div>


                <div className="item">
                    <img src={Bat_card}></img>
                    <h2 className="editionTitre">51 Bat</h2>
                    <button><Link to={`/carte?n=bat`}>Afficher la carte</Link></button>
                </div>


                <div className="item">
                    <img src={New_follower_card}></img>
                    <h2 className="editionTitre">50 New Follower</h2>
                    <button><Link to={`/carte?n=new_follower`}>Afficher la carte</Link></button>
                </div>


                <div className="item">
                    <img src={Déconnecté}></img>
                    <h2 className="editionTitre">41 Déconnecté</h2>
                    <button><Link to={`/carte?n=déconnecté`}>Afficher la carte</Link></button>
                </div>


                <div className="item">
                    <img src={Niche}></img>
                    <h2 className="editionTitre">35 Niche</h2>
                    <button><Link to={`/carte?n=niche`}>Afficher la carte</Link></button>
                </div>


                <div className="item">
                    <img src={Reverse_card}></img>
                    <h2 className="editionTitre">48 Reverse</h2>
                    <button><Link to={`/carte?n=reverse`}>Afficher la carte</Link></button>
                </div>


                <div className="item">
                    <img src={Bad}></img>
                    <h2 className="editionTitre">03 bad</h2>
                    <button><Link to={`/carte?n=bad`}>Afficher la carte</Link></button>
                </div>


                <div className="item">
                    <img src={Daylights_ev}></img>
                    <h2 className="editionTitre">53 daylights ev</h2>
                    <button><Link to={`/carte?n=daylights_ev`}>Afficher la carte</Link></button>
                </div>


                <div className="item">
                    <img src={Max_the_james_l}></img>
                    <h2 className="editionTitre">00 Max The James L</h2>
                    <button><Link to={`/carte?n=max_the_james_l`}>Afficher la carte</Link></button>
                </div>


                <div className="item">
                    <img src={Sous_marin}></img>
                    <h2 className="editionTitre">37 Sous Marin</h2>
                    <button><Link to={`/carte?n=sous_marin`}>Afficher la carte</Link></button>
                </div>


                <div className="item">
                    <img src={Snef}></img>
                    <h2 className="editionTitre">21 Snef</h2>
                    <button><Link to={`/carte?n=snef`}>Afficher la carte</Link></button>
                </div>


                <div className="item">
                    <img src={Bad_casino}></img>
                    <h2 className="editionTitre">47 Bad Casino</h2>
                    <button><Link to={`/carte?n=bad_casino`}>Afficher la carte</Link></button>
                </div>


                <div className="item">
                    <img src={Mr_pouf}></img>
                    <h2 className="editionTitre">44 Mr Pouf</h2>
                    <button><Link to={`/carte?n=mr_pouf`}>Afficher la carte</Link></button>
                </div>


                <div className="item">
                    <img src={Lucy}></img>
                    <h2 className="editionTitre">08 Lucy</h2>
                    <button><Link to={`/carte?n=lucy`}>Afficher la carte</Link></button>
                </div>


                <div className="item">
                    <img src={Back}></img>
                    <h2 className="editionTitre">TT back</h2>
                    <button><Link to={`/carte?n=back`}>Afficher la carte</Link></button>
                </div>


                <div className="item">
                    <img src={Eckko_card}></img>
                    <h2 className="editionTitre">02 Eckko</h2>
                    <button><Link to={`/carte?n=eckko`}>Afficher la carte</Link></button>
                </div>


                <div className="item">
                    <img src={Lucy_ev}></img>
                    <h2 className="editionTitre">60 Lucy ev</h2>
                    <button><Link to={`/carte?n=lucy_ev`}>Afficher la carte</Link></button>

                </div>
            </div>
        </div>
            );
}

            export default Cartes;