import Eckko from '../../cartes/eckko/eckko'
import Bad from '../../cartes/bad/bad'
import Frenchfox from '../../cartes/frenchfox/frenchfox'
import Nightshadows from '../../cartes/nightshadows/nightshadows'
import Bob from '../../cartes/bob/bob'
import Lucy from '../../cartes/lucy/lucy'
import Lil_pink from '../../cartes/lil_pink/lil_pink'
import Reptilien from '../../cartes/reptilien/reptilien'
import Good from '../../cartes/good/good'
import Kayla from '../../cartes/kayla/kayla'
import Fakefoxx from '../../cartes/fakefoxx/fakefoxx'
import Aska from '../../cartes/aska/aska'
import Marine from '../../cartes/marine/marine'
import Postal_lady from '../../cartes/postal_lady/postal_lady'
import Jukebox from '../../cartes/jukebox/jukebox'
import Moma from '../../cartes/moma/moma'
import Adaoh from '../../cartes/adaoh/adaoh'
import Dunkie from '../../cartes/dunkie/dunkie'
import Snef from '../../cartes/snef/snef'
import Ribsy from '../../cartes/ribsy/ribsy'
import Misterk from '../../cartes/misterk/misterk'
import Dcriss from '../../cartes/dcriss/dcriss'
import Recruit from '../../cartes/recruit/recruit'
import Pogo_mayo from '../../cartes/pogo_mayo/pogo_mayo'
import Badtivia from '../../cartes/badtivia/badtivia'
import Gtii from '../../cartes/gtii/gtii'
import Boulanger from '../../cartes/boulanger/boulanger'
import Liqueur from '../../cartes/liqueur/liqueur'
import Mystery_box from '../../cartes/mystery_box/mystery_box'
import Karen from '../../cartes/karen/karen'
import Niche from '../../cartes/niche/niche'
import Os from '../../cartes/os/os'
import Sous_marin from '../../cartes/sous_marin/sous_marin'
import Gaming_chair from '../../cartes/gaming_chair/gaming_chair'
import Galette from '../../cartes/galette/galette'
import Plane from '../../cartes/plane/plane'
import Deconnecte from '../../cartes/deconnecte/deconnecte'
import Sushi_mate from '../../cartes/sushi_mate/sushi_mate'
import Creme_crispe from '../../cartes/creme_crispe/creme_crispe'
import Mr_pouf from '../../cartes/mr_pouf/mr_pouf'
import Clef from '../../cartes/clef/clef'
import Lag_monster from '../../cartes/lag_monster/lag_monster'
import Bad_casino from '../../cartes/bad_casino/bad_casino'
import Reverse from '../../cartes/reverse/reverse'
import Verse from '../../cartes/verse/verse'
import New_follow from '../../cartes/new_follow/new_follow'
import Bat_titan from '../../cartes/bat_titan/bat_titan'
import Platii from '../../cartes/platii/platii'
import Daylights_ev from '../../cartes/daylights_ev/daylights_ev'
import Eckko_ev from '../../cartes/eckko_ev/eckko_ev'
import Bad_ev from '../../cartes/bad_ev/bad_ev'
import Potter_ev from '../../cartes/potter_ev/potter_ev'
import Frenchfox_ev from '../../cartes/frenchfox_ev/frenchfox_ev'
import Nightsshadows_ev from '../../cartes/nightsshadows_ev/nightsshadows_ev'
import Bob_ev from '../../cartes/bob_ev/bob_ev'
import Lucyfer_ev from '../../cartes/lucyfer_ev/lucyfer_ev'
import Daylights from '../../cartes/daylights/daylights'
import Potter from '../../cartes/potter/potter'
import Max_the_james from '../../cartes/max_the_james/max_the_james'
import Liqueur_anti_t from '../../cartes/liqueur_anti_t/liqueur_anti_t'
import NotFound from '../../cartes/not_found/not_found'

import { useSearchParams } from 'react-router-dom'

const windowUrl = window.location.search;
const params = new URLSearchParams(windowUrl);
// const nomCarte = params.get('n');



const listeCartes = [Eckko, Bad, Frenchfox, Frenchfox_ev, Daylights, Daylights_ev, Nightshadows,
    Nightsshadows_ev, Bob, Bob_ev, Lucy, Lucyfer_ev, Lil_pink, Reptilien, Good, Karen, Kayla,
    Fakefoxx, Aska, Marine, Max_the_james, Misterk, Moma, Jukebox, Postal_lady, Dunkie, Adaoh, 
    Snef, Ribsy, Dcriss, Recruit, Pogo_mayo, Badtivia, Gtii, Boulanger, Liqueur, Mystery_box, 
    Niche, Os, Sous_marin, Gaming_chair, Galette, Plane, Deconnecte, Sushi_mate, Creme_crispe, 
    Mr_pouf, Clef, Lag_monster, Bad_casino, Reverse, Verse, New_follow, Bat_titan, Platii, 
    Eckko_ev, Bad_ev, Potter, Potter_ev, Liqueur_anti_t]

function getCardComponent(nomCarte) {
    for (let i = 0; i < listeCartes.length; i++) {
        // console.log(listeCartes[i].name.toLowerCase())
        if (listeCartes[i].name.toLowerCase() === nomCarte) {
            return listeCartes[i];
        }
    }
}

function Carte() {
    let [searchParams] = useSearchParams();
    const nomCarte = searchParams.get("n");
    let CarteSelonLeNom = getCardComponent(nomCarte);

    return (
        <CarteSelonLeNom />
    );
}

export default Carte;