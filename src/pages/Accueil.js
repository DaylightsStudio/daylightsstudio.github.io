import React from "react";
import './Accueil.css'
import VideoAutoPlay from "../components/VideoAutoPlay/VideoAutoPlay";

function Accueil() {
    return (
        <div  className="containerAccueil">
            <div>
                <VideoAutoPlay />
                <button className="btn">ACHETER</button>
            </div>

            <div id="comparerEditions">
                <div className="flexContainer">
                    <div class="item">
                        <h2>Nom item</h2>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Accueil;