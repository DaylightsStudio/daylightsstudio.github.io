import './App.css';
import React from "react";
import Accueil from './pages/Accueil'
import HeaderBar from './components/HeaderBar/HeaderBar';
import CarteLayout from './pages/Carte/carteLayout'
import Cartes from './pages/Cartes'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



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
      <HeaderBar />
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </div>


    // </ChakraProvider>
  );
}

export default App;
