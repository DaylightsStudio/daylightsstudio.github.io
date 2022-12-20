import './App.css';
import React from "react";
import Accueil from './pages/Accueil'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './components/theme';

function App() {
  return (
    // <ChakraProvider resetCSS theme={theme}>
      <Accueil />
    // </ChakraProvider>
  );
}

export default App;
