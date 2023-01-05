import './App.css';
import React from "react";
import {
  BrowserRouter,
} from "react-router-dom";
import { Route, Routes } from "react-router";

import Accueil from './pages/Accueil'
import HeaderBar from './components/HeaderBar/HeaderBar';
import CarteLayout from './pages/Carte/carteLayout'
import Cartes from './pages/Cartes'
import Reglements from './pages/Reglements';


function App() {
  return (
    <div className='App'>
      <React.StrictMode>
        <BrowserRouter basename="/">
          <HeaderBar />
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path='/cartes' element={<Cartes />} />
            <Route path="/carte" element={<CarteLayout />} />
            <Route path="/reglements" element={<Reglements />} />
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    </div>
  );
}

export default App;
