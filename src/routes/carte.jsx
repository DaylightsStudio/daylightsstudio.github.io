import * as React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";
import CarteLayout from "../layout/carteLayout";

export default function Carte() {
    return (
        <CarteLayout>
            <h1>My App</h1>
        </CarteLayout>
    );
}