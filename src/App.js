import './App.css';
import React from "react";
import Accueil from './pages/Accueil'
import { ChakraProvider } from '@chakra-ui/react'
import HeaderBar from './components/HeaderBar/HeaderBar';

function App() {
  return (
    // <ChakraProvider resetCSS theme={theme}>
    <div className='App'>
      <HeaderBar/>
      <Accueil />
    </div>
      
      
    // </ChakraProvider>
  );
}

export default App;
