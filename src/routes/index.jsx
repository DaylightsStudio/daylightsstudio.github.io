import VideoAutoPlay from '../components/VideoAutoPlay/VideoAutoPlay'
import { Link } from 'react-router-dom';

export default function Root() {
    return (
      <>
        <div>
          <h1>Router</h1>
          <nav>
            <ul>
              {/* Faire en sorte que la liste se charge automatiquement ici!! */}
                <li><button><Link to={`/carte?n=adaoh`}>Adaoh EN PARAMS!!!</Link></button></li>
                <li><button><Link to={`/carte?n=aska`}>Aska</Link></button></li>
                <li><button><Link to={`/carte?n=bad_casino`}>Bad_casino</Link></button></li>
                <li><button><Link to={`/carte?n=bad_ev`}>Bad_ev</Link></button></li>
                <li><button><Link to={`/carte?n=bad`}>Bad</Link></button></li>
                <li><button><Link to={`/carte?n=badtivia`}>Badtivia</Link></button></li>
                <li><button><Link to={`/carte?n=bat_titan`}>Bat_titan</Link></button></li>
                <li><button><Link to={`/carte?n=bob_ev`}>Bob_ev</Link></button></li>
                <li><button><Link to={`/carte?n=bob`}>Bob</Link></button></li>
                <li><button><Link to={`/carte?n=boulanger`}>Boulanger</Link></button></li>
                <li><button><Link to={`/carte?n=clef`}>Clef</Link></button></li>
                <li><button><Link to={`/carte?n=creme_crispe`}>Creme_crispe</Link></button></li>
                <li><button><Link to={`/carte?n=daylights_ev`}>Daylights_ev</Link></button></li>
                <li><button><Link to={`/carte?n=daylights`}>Daylights</Link></button></li>
                <li><button><Link to={`/carte?n=dcriss`}>Dcriss</Link></button></li>
                <li><button><Link to={`/carte?n=deconnecte`}>Deconnecte</Link></button></li>
                <li><button><Link to={`/carte?n=dunkie`}>Dunkie</Link></button></li>
                <li><button><Link to={`/carte?n=eckko_ev`}>Eckko_ev</Link></button></li>
                <li><button><Link to={`/carte?n=eckko`}>Eckko</Link></button></li>
                <li><button><Link to={`/carte?n=fakefoxx`}>Fakefoxx</Link></button></li>
                <li><button><Link to={`/carte?n=frenchfox_ev`}>Frenchfox_ev</Link></button></li>
                <li><button><Link to={`/carte?n=frenchfox`}>Frenchfox</Link></button></li>
                <li><button><Link to={`/carte?n=galette`}>Galette</Link></button></li>
                <li><button><Link to={`/carte?n=gaming_chair`}>Gaming_chair</Link></button></li>
                <li><button><Link to={`/carte?n=good`}>Good</Link></button></li>
                <li><button><Link to={`/carte?n=gtii`}>Gtii</Link></button></li>
                <li><button><Link to={`/carte?n=jukebox`}>Jukebox</Link></button></li>
                <li><button><Link to={`/carte?n=karen`}>Karen</Link></button></li>
                <li><button><Link to={`/carte?n=kayla`}>Kayla</Link></button></li>
                <li><button><Link to={`/carte?n=lag_monster`}>Lag_monster</Link></button></li>
                <li><button><Link to={`/carte?n=lil_pink`}>Lil_pink</Link></button></li>
                <li><button><Link to={`/carte?n=liqueur_anti_t`}>Liqueur_anti_t</Link></button></li>
                <li><button><Link to={`/carte?n=liqueur`}>Liqueur</Link></button></li>
                <li><button><Link to={`/carte?n=lucy`}>Lucy</Link></button></li>
                <li><button><Link to={`/carte?n=lucyfer_ev`}>Lucyfer_ev</Link></button></li>
                <li><button><Link to={`/carte?n=marine`}>Marine</Link></button></li>
                <li><button><Link to={`/carte?n=max_the_james`}>Max_the_james</Link></button></li>
                <li><button><Link to={`/carte?n=misterk`}>Misterk</Link></button></li>
                <li><button><Link to={`/carte?n=moma`}>Moma</Link></button></li>
                <li><button><Link to={`/carte?n=mr_pouf`}>Mr_pouf</Link></button></li>
                <li><button><Link to={`/carte?n=mystery_box`}>Mystery_box</Link></button></li>
                <li><button><Link to={`/carte?n=new_follow`}>New_follow</Link></button></li>
                <li><button><Link to={`/carte?n=niche`}>Niche</Link></button></li>
                <li><button><Link to={`/carte?n=nightshadows`}>Nightshadows</Link></button></li>
                <li><button><Link to={`/carte?n=nightsshadows_ev`}>Nightsshadows_ev</Link></button></li>
                <li><button><Link to={`/carte?n=os`}>Os</Link></button></li>
                <li><button><Link to={`/carte?n=plane`}>Plane</Link></button></li>
                <li><button><Link to={`/carte?n=platii`}>Platii</Link></button></li>
                <li><button><Link to={`/carte?n=pogo_mayo`}>Pogo_mayo</Link></button></li>
                <li><button><Link to={`/carte?n=postal_lady`}>Postal_lady</Link></button></li>
                <li><button><Link to={`/carte?n=potter_ev`}>Potter_ev</Link></button></li>
                <li><button><Link to={`/carte?n=potter`}>Potter</Link></button></li>
                <li><button><Link to={`/carte?n=recruit`}>Recruit</Link></button></li>
                <li><button><Link to={`/carte?n=reptilien`}>Reptilien</Link></button></li>
                <li><button><Link to={`/carte?n=reverse`}>Reverse</Link></button></li>
                <li><button><Link to={`/carte?n=ribsy`}>Ribsy</Link></button></li>
                <li><button><Link to={`/carte?n=snef`}>Snef</Link></button></li>
                <li><button><Link to={`/carte?n=sous_marin`}>Sous_marin</Link></button></li>
                <li><button><Link to={`/carte?n=sushi_mate`}>Sushi_mate</Link></button></li>
                <li><button><Link to={`/carte?n=verse`}>Verse</Link></button></li>
            </ul>
          </nav>
        </div>
      </>
    );
  }