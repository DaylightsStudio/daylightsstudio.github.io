import React from "react";
import './Accueil.css'
import VideoAutoPlay from "../components/VideoAutoPlay/VideoAutoPlay";

function Accueil() {
    return (
        <div>
            <div className="containerVideo">
                <VideoAutoPlay />
                <button className="btn">ACHETER</button>
            </div>
        </div>
    );
}

export default Accueil;