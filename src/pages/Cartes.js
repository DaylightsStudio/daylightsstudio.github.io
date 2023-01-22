import React from "react";
import Root from '../routes';
import DaylightsDeluxe from "../cartes/daylights-deluxe/daylights-deluxe";

function Cartes() {
    document.title = "Cartes - Titans Card Game"
    return (
        <div>
            <Root />
            <DaylightsDeluxe/>    
        </div>
        
        
    );
}

export default Cartes;