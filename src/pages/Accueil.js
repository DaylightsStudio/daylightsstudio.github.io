import Eckko from '../cartes/eckko/eckko'
import Bad from '../cartes/bad/bad'
import Frenchfox from '../cartes/frenchfox/frenchfox'
import Nightshadows from '../cartes/nightshadows/nightshadows'
import Bob from '../cartes/bob/bob'
import Lucy from '../cartes/lucy/lucy'
import Lil_pink from '../cartes/lil_pink/lil_pink'
import Reptilien from '../cartes/reptilien/reptilien'
import Good from '../cartes/good/good'
import Kayla from '../cartes/kayla/kayla'
import Fakefoxx from '../cartes/fakefoxx/fakefoxx'
import Aska from '../cartes/aska/aska'
import Marine from '../cartes/marine/marine'
import Postal_lady from '../cartes/postal_lady/postal_lady'
import Jukebox from '../cartes/jukebox/jukebox'
import Moma from '../cartes/moma/moma'
import Adaoh from '../cartes/adaoh/adaoh'
import Dunkie from '../cartes/dunkie/dunkie'
import Snef from '../cartes/snef/snef'
import Ribsy from '../cartes/ribsy/ribsy'
import Misterk from '../cartes/misterk/misterk'
import Dcriss from '../cartes/dcriss/dcriss'
import Recruit from '../cartes/recruit/recruit'
import Pogo_mayo from '../cartes/pogo_mayo/pogo_mayo'
import Badtivia from '../cartes/badtivia/badtivia'
import Gtii from '../cartes/gtii/gtii'
import Boulanger from '../cartes/boulanger/boulanger'
import Liqueur from '../cartes/liqueur/liqueur'
import Mystery_box from '../cartes/mystery_box/mystery_box'
import Karen from '../cartes/karen/karen'
import Niche from '../cartes/niche/niche'
import Os from '../cartes/os/os'
import Sous_marin from '../cartes/sous_marin/sous_marin'
import Gaming_chair from '../cartes/gaming_chair/gaming_chair'
import Galette from '../cartes/galette/galette'
import Plane from '../cartes/plane/plane'
import Deconnecte from '../cartes/deconnecte/deconnecte'
import Sushi_mate from '../cartes/sushi_mate/sushi_mate'
import Creme_crispe from '../cartes/creme_crispe/creme_crispe'
import Mr_pouf from '../cartes/mr_pouf/mr_pouf'
import Clef from '../cartes/clef/clef'
import Lag_monster from '../cartes/lag_monster/lag_monster'
import Bad_casino from '../cartes/bad_casino/bad_casino'
import Reverse from '../cartes/reverse/reverse'
import Verse from '../cartes/verse/verse'
import New_follow from '../cartes/new_follow/new_follow'
import Bat_titan from '../cartes/bat_titan/bat_titan'
import Platii from '../cartes/platii/platii'
import Daylights_ev from '../cartes/daylights_ev/daylights_ev'
import Eckko_ev from '../cartes/eckko_ev/eckko_ev'
import Bad_ev from '../cartes/bad_ev/bad_ev'
import Potter_ev from '../cartes/potter_ev/potter_ev'
import Frenchfox_ev from '../cartes/frenchfox_ev/frenchfox_ev'
import Nightsshadows_ev from '../cartes/nightsshadows_ev/nightsshadows_ev'
import Bob_ev from '../cartes/bob_ev/bob_ev'
import Lucyfer_ev from '../cartes/lucyfer_ev/lucyfer_ev'
import Daylights from '../cartes/daylights/daylights'
import Potter from '../cartes/potter/potter'
import Max_the_james from '../cartes/max_the_james/max_the_james'
import Liqueur_anti_t from '../cartes/liqueur_anti_t/liqueur_anti_t'


import {
    createBrowserRouter,
    RouterProvider,
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import React from "react";

import Root from '../routes';
import CarteLayout from '../layout/carteLayout'
import Carte from './Carte'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
    },
    {
        path: "/carte",
        element: <CarteLayout/>,
    },
    {path: '/adaoh', element: <Adaoh />,},
    {path: '/aska', element: <Aska />,},
    {path: '/bad', element: <Bad />,},
    {path: '/bad_casino', element: <Bad_casino />,},
    {path: '/bad_ev', element: <Bad_ev />,},
    {path: '/badtivia', element: <Badtivia />,},
    {path: '/bat_titan', element: <Bat_titan />,},
    {path: '/bob', element: <Bob />,},
    {path: '/bob_ev', element: <Bob_ev />,},
    {path: '/boulanger', element: <Boulanger />,},
    {path: '/clef', element: <Clef />,},
    {path: '/creme_crispe', element: <Creme_crispe />,},
    {path: '/daylights', element: <Daylights />,},
    {path: '/daylights_ev', element: <Daylights_ev />,},
    {path: '/dcriss', element: <Dcriss />,},
    {path: '/deconnecte', element: <Deconnecte />,},
    {path: '/dunkie', element: <Dunkie />,},
    {path: '/eckko', element: <Eckko />,},
    {path: '/eckko_ev', element: <Eckko_ev />,},
    {path: '/fakefoxx', element: <Fakefoxx />,},
    {path: '/frenchfox', element: <Frenchfox />,},
    {path: '/frenchfox_ev', element: <Frenchfox_ev />,},
    {path: '/galette', element: <Galette />,},
    {path: '/gaming_chair', element: <Gaming_chair />,},
    {path: '/good', element: <Good />,},
    {path: '/gtii', element: <Gtii />,},
    {path: '/jukebox', element: <Jukebox />,},
    {path: '/karen', element: <Karen />,},
    {path: '/kayla', element: <Kayla />,},
    {path: '/lag_monster', element: <Lag_monster />,},
    {path: '/lil_pink', element: <Lil_pink />,},
    {path: '/liqueur', element: <Liqueur />,},
    {path: '/liqueur_anti_t', element: <Liqueur_anti_t />,},
    {path: '/lucy', element: <Lucy />,},
    {path: '/lucyfer_ev', element: <Lucyfer_ev />,},
    {path: '/marine', element: <Marine />,},
    {path: '/max_the_james', element: <Max_the_james />,},
    {path: '/misterk', element: <Misterk />,},
    {path: '/moma', element: <Moma />,},
    {path: '/mr_pouf', element: <Mr_pouf />,},
    {path: '/mystery_box', element: <Mystery_box />,},
    {path: '/new_follow', element: <New_follow />,},
    {path: '/niche', element: <Niche />,},
    {path: '/nightshadows', element: <Nightshadows />,},
    {path: '/nightsshadows_ev', element: <Nightsshadows_ev />,},
    {path: '/os', element: <Os />,},
    {path: '/plane', element: <Plane />,},
    {path: '/platii', element: <Platii />,},
    {path: '/pogo_mayo', element: <Pogo_mayo />,},
    {path: '/postal_lady', element: <Postal_lady />,},
    {path: '/potter', element: <Potter />,},
    {path: '/potter_ev', element: <Potter_ev />,},
    {path: '/recruit', element: <Recruit />,},
    {path: '/reptilien', element: <Reptilien />,},
    {path: '/reverse', element: <Reverse />,},
    {path: '/ribsy', element: <Ribsy />,},
    {path: '/snef', element: <Snef />,},
    {path: '/sous_marin', element: <Sous_marin />,},
    {path: '/sushi_mate', element: <Sushi_mate />,},
    {path: '/verse', element: <Verse />,
  },
]);

function Accueil() {
    return (
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    );
}

export default Accueil;