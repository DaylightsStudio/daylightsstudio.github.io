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

function Cartes() {
    return (
        <Root />
    );
}

export default Cartes;