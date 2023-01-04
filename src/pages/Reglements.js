import React from "react";
import { Link } from "react-router-dom"

function Reglements() {
    document.title = "Règlements - Titans Card Game"
    return (
        <div>
            <h1>Règlements</h1>

            <ul style={{textAlign:"left", width:"70%", lineHeight: "1.6"}}>
                <li>
                    Chaque joueur doit choisir deux cartes combattant (Titan ou anti-t) de leur choix. Placez un combattant visible sur le jeu et l'autre face caché sur le coté de la planche de jeu.
                </li>

                <li>
                    Le tour débute en pigeant 8 cartes de votre deck (max. 40 cartes par deck) et en placer 3 sur la table.
                </li>

                <li>
                    Vous devez en tout temps avoir 5 cartes dans vos mains.
                </li>

                <li>
                    À chaque tour, lancez votre jeton pour déterminer quel type d'attaque votre carte va effectuer:
                    <ul>
                        <li>
                            Pile 🠚 attaque de base
                        </li>
                        <li>
                            Face 🠚 Possibilité d'attaque spéciale
                        </li>
                    </ul>
                </li>
                <li>
                    Pour chaque attaque, une carte de support de votre choix peux être utilisée (Friend ou Supply Drop). Si votre carte comporte plus d'une assistance, lancez votre jeton pour déterminer quel support elle effectuera.
                </li>
                <li>
                    Une fois le tour utilisée, la carte support est mise hors du jeu. Le joueur re-pige le nombre de cartes nécéssaire afin d'en avoir cinq en main.
                </li>
                <li>
                    Un Titan, ou Anti-T, peut changer de forme seulement si la carte <Link to="/carte?n=platii">Plat II</Link> a été jouée de votre main. Le joueur qui change de forme ne peux attaquer le même tour.
                </li>
                <li>
                    Le premier joueur à  K/O les deux cartes combattant de l'adversaire l'emporte.
                </li>
            </ul>
        </div>
    );
}

export default Reglements;