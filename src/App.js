import Eckko from './pages/eckko/eckko'
import Bad from './pages/bad/bad'
import Frenchfox from './pages/frenchfox/frenchfox'
import Nightshadows from './pages/nightshadows/nightshadows'
import Bob from './pages/bob/bob'
import Lucy from './pages/lucy/lucy'
import Lil_pink from './pages/lil_pink/lil_pink'
import Reptilien from './pages/reptilien/reptilien'
import Good from './pages/good/good'
import Kayla from './pages/kayla/kayla'
import Fakefoxx from './pages/fakefoxx/fakefoxx'
import Aska from './pages/aska/aska'
import Marine from './pages/marine/marine'
import Postal_lady from './pages/postal_lady/postal_lady'
import Jukebox from './pages/jukebox/jukebox'
import Moma from './pages/moma/moma'
import Adaoh from './pages/adaoh/adaoh'
import Dunkie from './pages/dunkie/dunkie'
import Snef from './pages/snef/snef'
import Ribsy from './pages/ribsy/ribsy'
import Misterk from './pages/misterk/misterk'
import Dcriss from './pages/dcriss/dcriss'
import Recruit from './pages/recruit/recruit'
import Pogo_mayo from './pages/pogo_mayo/pogo_mayo'
import Badtivia from './pages/badtivia/badtivia'
import Gtii from './pages/gtii/gtii'
import Boulanger from './pages/boulanger/boulanger'
import Liqueur from './pages/liqueur/liqueur'
import Mystery_box from './pages/mystery_box/mystery_box'
import Karen from './pages/karen/karen'
import Niche from './pages/niche/niche'
import Os from './pages/os/os'
import Sous_marin from './pages/sous_marin/sous_marin'
import Gaming_chair from './pages/gaming_chair/gaming_chair'
import Galette from './pages/galette/galette'
import Plane from './pages/plane/plane'
import Deconnecte from './pages/deconnecte/deconnecte'
import Sushi_mate from './pages/sushi_mate/sushi_mate'
import Creme_crispe from './pages/creme_crispe/creme_crispe'
import Mr_pouf from './pages/mr_pouf/mr_pouf'
import Clef from './pages/clef/clef'
import Lag_monster from './pages/lag_monster/lag_monster'
import Bad_casino from './pages/bad_casino/bad_casino'
import Reverse from './pages/reverse/reverse'
import Verse from './pages/verse/verse'
import New_follow from './pages/new_follow/new_follow'
import Bat_titan from './pages/bat_titan/bat_titan'
import Platii from './pages/platii/platii'
import Daylights_ev from './pages/daylights_ev/daylights_ev'
import Eckko_ev from './pages/eckko_ev/eckko_ev'
import Bad_ev from './pages/bad_ev/bad_ev'
import Potter_ev from './pages/potter_ev/potter_ev'
import Frenchfox_ev from './pages/frenchfox_ev/frenchfox_ev'
import Nightsshadows_ev from './pages/nightsshadows_ev/nightsshadows_ev'
import Bob_ev from './pages/bob_ev/bob_ev'
import Lucyfer_ev from './pages/lucyfer_ev/lucyfer_ev'
import Daylights from './pages/daylights/daylights'
import Potter from './pages/potter/potter'
import Max_the_james from './pages/max_the_james/max_the_james'
import Liqueur_anti_t from './pages/liqueur_anti_t/liqueur_anti_t'


import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import Root from './routes';


const router = createBrowserRouter([
  {path: '/liqueur', element: <Liqueur />,},
  {path: '/recruit', element: <Recruit />,},
  {path: '/dcriss', element: <Dcriss />,},
  {path: '/misterk', element: <Misterk />,},
  {path: '/ribsy', element: <Ribsy />,},
  {path: '/snef', element: <Snef />,},
  {path: '/dunkie', element: <Dunkie />,},
  {path: '/adaoh', element: <Adaoh />,},
  {path: '/moma', element: <Moma />,},
  {path: '/jukebox', element: <Jukebox />,},
  {path: '/postal_lady', element: <Postal_lady />,},
  {path: '/marine', element: <Marine />,},
  {path: '/aska', element: <Aska />,},
  {path: '/fakefoxx', element: <Fakefoxx />,},
  {path: '/kayla', element: <Kayla />,},
  {path: '/good', element: <Good />,},
  {path: '/reptilien', element: <Reptilien />,},
  {path: '/lil_pink', element: <Lil_pink />,},
  {path: '/lucy', element: <Lucy />,},
  {path: '/bob', element: <Bob />,},
  {path: '/nightshadows', element: <Nightshadows />,},
  {path: '/frenchfox', element: <Frenchfox />,},
  {path: '/potter', element: <Potter />,},
  {path: '/bad', element: <Bad />,},
  {path: '/eckko', element: <Eckko />,},
  {path: '/daylights', element: <Daylights />,},
  {path: '/max_the_james', element: <Max_the_james />,},
  {path: '/pogo_mayo', element: <Pogo_mayo />,},
  {path: '/badtivia', element: <Badtivia />,},
  {path: '/gtii', element: <Gtii />,},
  {path: '/boulanger', element: <Boulanger />,},
  {path: '/mystery_box', element: <Mystery_box />,},
  {path: '/karen', element: <Karen />,},
  {path: '/niche', element: <Niche />,},
  {path: '/os', element: <Os />,},
  {path: '/sous_marin', element: <Sous_marin />,},
  {path: '/gaming_chair', element: <Gaming_chair />,},
  {path: '/galette', element: <Galette />,},
  {path: '/plane', element: <Plane />,},
  {path: '/deconnecte', element: <Deconnecte />,},
  {path: '/sushi_mate', element: <Sushi_mate />,},
  {path: '/creme_crispe', element: <Creme_crispe />,},
  {path: '/mr_pouf', element: <Mr_pouf />,},
  {path: '/clef', element: <Clef />,},
  {path: '/lag_monster', element: <Lag_monster />,},
  {path: '/bad_casino', element: <Bad_casino />,},
  {path: '/reverse', element: <Reverse />,},
  {path: '/verse', element: <Verse />,},
  {path: '/new_follow', element: <New_follow />,},
  {path: '/bat_titan', element: <Bat_titan />,},
  {path: '/platii', element: <Platii />,},
  {path: '/daylights_ev', element: <Daylights_ev />,},
  {path: '/eckko_ev', element: <Eckko_ev />,},
  {path: '/bad_ev', element: <Bad_ev />,},
  {path: '/potter_ev', element: <Potter_ev />,},
  {path: '/frenchfox_ev', element: <Frenchfox_ev />,},
  {path: '/nightsshadows_ev', element: <Nightsshadows_ev />,},
  {path: '/bob_ev', element: <Bob_ev />,},
  {path: '/lucyfer_ev', element: <Lucyfer_ev />,},
  {path: '/liqueur_anti_t', element: <Liqueur_anti_t />,},
]);

function App() {
  return (
    <div className="App">

      <header className="App-header"> 
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>
      </header>
    </div>
  );
}

export default App;
