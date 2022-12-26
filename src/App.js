import './App.css';
import React from "react";
import Accueil from './pages/Accueil'
import HeaderBar from './components/HeaderBar/HeaderBar';
import CarteLayout from './pages/Carte/carteLayout'
import Cartes from './pages/Cartes'
import {
  createBrowserRouter,
  BrowserRouter,
  RouterProvider,
  
  Router,
} from "react-router-dom";
import { Route, Routes } from "react-router";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Accueil />,
  },
  {
    path: "/carte",
    element: <CarteLayout />,
  },
  {
    path: "/cartes",
    element: <Cartes />,
  }
]);

function App() {
  return (
    // <ChakraProvider resetCSS theme={theme}>
    <div className='App'>
<React.StrictMode>
      <BrowserRouter>
        <HeaderBar />
        <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path='cartes' element={<Cartes/>}/>
        <Route path="carte" element={<CarteLayout />} />
      </Routes>
      </BrowserRouter>
      </React.StrictMode>
    </div>


    // </ChakraProvider>
  );
}

export default App;
