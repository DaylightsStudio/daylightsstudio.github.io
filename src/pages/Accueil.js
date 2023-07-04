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

                <h2>Decks complets</h2>
                <div className="flexContainer">

                    <div className="item">
                        <h2 className="editionTitre">Collector 5X Legendary</h2>
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
                        <h2 className="editionTitre">Deck complet holographique</h2>
                        <h3 className="editionPrix">70,00$</h3>
                        <p className="editionDescription">Toutes les <b>60</b> cartes uniques incluant <b>6</b> cartes holographiques</p>
                        <ul className="editionListeAttributs">
                            <li className="attributEditionInclus">Jeu complet</li>
                            <li className="attributEditionPasInclus">Boite de rangement</li>
                            <li className="attributEditionInclus">Cartes holo</li>
                            <li className="attributEditionPasInclus">Pièce de jeu <i>Bad Casino</i></li>
                        </ul>
                    </div>
                    <div className="item">
                        <h2 className="editionTitre">Collector Package</h2>
                        <h3 className="editionPrix">92,00$</h3>
                        <p className="editionDescription">Toutes les <b>60</b> cartes uniques avec la boite de rangement ainsi que la pièce <i>Bad Casino</i></p>
                        <ul className="editionListeAttributs">
                            <li className="attributEditionInclus">Jeu complet</li>
                            <li className="attributEditionInclus">Boite de rangement</li>
                            <li className="attributEditionPasInclus">Cartes holo</li>
                            <li className="attributEditionInclus">Pièce de jeu <i>Bad Casino</i></li>
                        </ul>
                    </div>
                    <div className="item">
                        <h2 className="editionTitre">Holo Collector Package</h2>
                        <h3 className="editionPrix">103,50$</h3>
                        <p className="editionDescription">Toutes les <b>60</b> cartes uniques incluant <b>6</b> cartes holographiques, avec la boite de rangement ainsi que la pièce <i>Bad Casino</i></p>
                        <ul className="editionListeAttributs">
                            <li className="attributEditionInclus">Jeu complet</li>
                            <li className="attributEditionInclus">Boite de rangement</li>
                            <li className="attributEditionInclus">Cartes holo</li>
                            <li className="attributEditionInclus">Pièce de jeu <i>Bad Casino</i></li>
                        </ul>
                    </div>
                </div>

                <h2>Deck patiels</h2>

                <div className="flexContainer">
                    <div className="item">
                        <h2 className="editionTitre">Solo Pick</h2>
                        <h3 className="editionPrix">2,50$</h3>
                        <p className="editionDescription"><b>Une</b> carte au choix parmis les Titan et les Friend Origin seulement</p>
                        <ul className="editionListeAttributs">
                            <li className="attributEditionInclus">Carte au choix</li>
                            <li className="attributEditionPasInclus">Cartes au hasard</li>
                            <li className="attributEditionPasInclus">Cartes holo</li>
                            <li className="attributEditionPasInclus">Boite de rangement</li>
                            <li className="attributEditionPasInclus">Pièce de jeu <i>Bad Casino</i></li>
                            <li className="attributEditionPasInclus">Jeu complet</li>
                        </ul>
                    </div>
                    <div className="item">
                        <h2 className="editionTitre">Streamer Booster Pack</h2>
                        <h3 className="editionPrix">11,50$</h3>
                        <p className="editionDescription"><b>10</b> cartes au hasard selon la thématique du streamer au choix (spécifier le streamer voulu lors de la transaction)</p>
                        <ul className="editionListeAttributs">
                            <li className="attributEditionInclus">Carte au choix</li>
                            <li className="attributEditionInclus">Cartes au hasard</li>
                            <li className="attributEditionPasInclus">Cartes holo</li>
                            <li className="attributEditionPasInclus">Boite de rangement</li>
                            <li className="attributEditionPasInclus">Pièce de jeu <i>Bad Casino</i></li>
                            <li className="attributEditionPasInclus">Jeu complet</li>
                        </ul>
                    </div>
                    <div className="item">
                        <h2 className="editionTitre">Pièce de jeu <i>Bad Casino</i></h2>
                        <h3 className="editionPrix">11,50$</h3>
                        <p className="editionDescription">L'incroyable pièce de jeu <i>Bad Casino</i></p>
                        <ul className="editionListeAttributs">
                            <li className="attributEditionPasInclus">Carte au choix</li>
                            <li className="attributEditionPasInclus">Cartes au hasard</li>
                            <li className="attributEditionPasInclus">Cartes holo</li>
                            <li className="attributEditionPasInclus">Boite de rangement</li>
                            <li className="attributEditionInclus">Pièce de jeu <i>Bad Casino</i></li>
                            <li className="attributEditionPasInclus">Jeu complet</li>
                        </ul>
                    </div>
                    <div className="item">
                        <h2 className="editionTitre">Holo Streamer Booster Pack</h2>
                        <h3 className="editionPrix">14,00$</h3>
                        <p className="editionDescription"><b>10</b> cartes au hasard selon la thématique du streamer au choix incluant <b>une</b> holographique. (spécifier le streamer voulu lors de la transaction)</p>
                        <ul className="editionListeAttributs">
                            <li className="attributEditionInclus">Carte au choix</li>
                            <li className="attributEditionInclus">Cartes au hasard</li>
                            <li className="attributEditionInclus">Cartes holo</li>
                            <li className="attributEditionPasInclus">Boite de rangement</li>
                            <li className="attributEditionPasInclus">Pièce de jeu <i>Bad Casino</i></li>
                            <li className="attributEditionPasInclus">Jeu complet</li>
                        </ul>
                    </div>
                    <div className="item">
                        <h2 className="editionTitre">Booster Pack</h2>
                        <h3 className="editionPrix">14,00$</h3>
                        <p className="editionDescription"><b>14</b> cartes au hasard</p>
                        <ul className="editionListeAttributs">
                            <li className="attributEditionPasInclus">Carte au choix</li>
                            <li className="attributEditionInclus">Cartes au hasard</li>
                            <li className="attributEditionInclus">Cartes holo</li>
                            <li className="attributEditionPasInclus">Boite de rangement</li>
                            <li className="attributEditionPasInclus">Pièce de jeu <i>Bad Casino</i></li>
                            <li className="attributEditionPasInclus">Jeu complet</li>
                        </ul>
                    </div>
                    <div className="item">
                        <h2 className="editionTitre">Boite de rangement</h2>
                        <h3 className="editionPrix">30,00$</h3>
                        <p className="editionDescription">La magnifique boite de rangement qui peut contenir plus de <b>60</b> cartes</p>
                        <ul className="editionListeAttributs">
                            <li className="attributEditionPasInclus">Carte au choix</li>
                            <li className="attributEditionPasInclus">Cartes au hasard</li>
                            <li className="attributEditionPasInclus">Cartes holo</li>
                            <li className="attributEditionInclus">Boite de rangement</li>
                            <li className="attributEditionPasInclus">Pièce de jeu <i>Bad Casino</i></li>
                            <li className="attributEditionPasInclus">Jeu complet</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Accueil;
