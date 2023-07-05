import React from "react";
import './Accueil.css'
import VideoAutoPlay from "../components/VideoAutoPlay/VideoAutoPlay";

function Accueil() {
    document.title = "Accueil - Titans Card Game"

    return (
        <div className="containerAccueil">
            <div>
                <VideoAutoPlay />
                <button className="btn">
                    <a href="#comparerEditions">EN SAVOIR PLUS</a>
                </button>
            </div>

            <div id="comparerEditions">

                <h1>Comparer les éditions</h1>

                <h2>Edition de collection</h2>
                <div className="flexContainer">

                    <div className="item">
                        <h2 className="editionTitre">Collector Lucky 5X Legendary</h2>
                        <h3 className="editionPrix">94.00$</h3>
                        <p className="editionDescription">Comprend <b>5</b> Booster Pack Legendary</p>
                        <ul className="editionListeAttributs">
                            <li className="attributEditionInclus">2 cartes Frosted Garantie</li>
                            <li className="attributEditionInclus">Badge Team Titans Or</li>
                            <li className="attributEditionInclus">Frame de Carte</li>
                        </ul>

                        <div className="item_accueil_bouton">
                            <a href="https://ko-fi.com/s/a6bc95addc" target="_blank">
                                <button className="btn_item">
                                    ACHETER
                                </button>
                            </a>
                        </div>

                    </div>
                    <div className="item">
                        <h2 className="editionTitre">Collector Lucky 3X Legendary</h2>
                        <h3 className="editionPrix">68,00$</h3>
                        <p className="editionDescription">Comprend <b>3</b> Booster Pack Legendary</p>
                        <ul className="editionListeAttributs">
                            <li className="attributEditionInclus">1 cartes Frosted Garantie</li>
                            <li className="attributEditionInclus">Badge Team Titans Or</li>
                            <li className="attributEditionInclus">Frame de Carte</li>
                        </ul>
                        <div className="item_accueil_bouton">
                            <a href="https://ko-fi.com/s/96e2615a77" target="_blank">
                                <button className="btn_item">
                                    ACHETER
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="item">
                        <h2 className="editionTitre">Collector 3X Legendary</h2>
                        <h3 className="editionPrix">52,00$</h3>
                        <p className="editionDescription">Comprend <b>3</b> Booster Pack Legendary</p>
                        <ul className="editionListeAttributs">
                            <li className="attributEditionInclus">Badge Team Titans Or</li>
                        </ul>
                        <div className="item_accueil_bouton">
                            <a href="https://ko-fi.com/s/bc8e479caa" target="_blank">
                                <button className="btn_item">
                                    ACHETER
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                <h2>Booster Pack</h2>

                <div className="flexContainer">
                    <div className="item">
                        <h2 className="editionTitre">Legendary Booster Pack</h2>
                        <h3 className="editionPrix">16$</h3>
                        <p className="editionDescription">Comprend <b>16</b> cartes incluant <b>2</b> Holographique ou <b>1</b> Frosted (1 chance sur 5) </p>
                        <ul className="editionListeAttributs">
                            <li className="attributEditionInclus"><b>16</b> Cartes</li>
                            <li className="attributEditionInclus">2 Holo ou 1 Frosted</li>
                        </ul>
                        <div className="item_accueil_bouton">
                            <a href="https://ko-fi.com/s/d5bd7f8808" target="_blank">
                                <button className="btn_item">
                                    ACHETER
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="item">
                        <h2 className="editionTitre">Holo Booster Pack</h2>
                        <h3 className="editionPrix">12$</h3>
                        <p className="editionDescription">Comprend <b>12</b> cartes incluant <b>1</b> Holographique</p>
                        <ul className="editionListeAttributs">
                            <li className="attributEditionInclus"><b>12</b> Cartes</li>
                            <li className="attributEditionInclus">1 carte holographique</li>
                        </ul>
                        <div className="item_accueil_bouton">
                            <a href="https://ko-fi.com/s/60b67a18f3" target="_blank">
                                <button className="btn_item">
                                    ACHETER
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="item">
                        <h2 className="editionTitre">Booster Pack</h2>
                        <h3 className="editionPrix">10$</h3>
                        <p className="editionDescription">Comprend <b>12</b> cartes</p>
                        <ul className="editionListeAttributs">
                            <li className="attributEditionInclus">12 Cartes</li>
                        </ul>
                        <div className="item_accueil_bouton">
                            <a href="https://ko-fi.com/s/1c8047baba" target="_blank">
                                <button className="btn_item">
                                    ACHETER
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Accueil;
