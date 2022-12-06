import './App.css';
import Tilt from 'react-parallax-tilt';
import TiltCardWidget from './TiltCardWidget';
import Daylights from './pages/daylights/daylights'
import Potter from './pages/potter/potter'

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">

    <header className="App-header">
       

      <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<App />} />
          <Route path="potter" element={<Potter />} />
          <Route path="daylights" element={<Daylights />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </header>
    </div>
  );
}

export default App;
