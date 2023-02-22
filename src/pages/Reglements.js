import React from "react";
import { Link } from "react-router-dom"
import './Reglements.css'

function Reglements() {
    document.title = "Règlements - Titans Card Game"
    return (
        <div>
            <h1>Règlements</h1>

            <ul className="liste-reglements">
                <li>
                    Chaque joueur doit choisir deux cartes parmi les Titans et les Anti-T. Ces cartes seront les combattants de chaque joueur.
                </li>

                <li>
                    Placez une des cartes sur le jeu de sorte qu'elle soit visible. Placez l’autre carte sur le côté du jeu tout en cachant le combattant qui s’y trouve.
                </li>

                <li>
                    La carte mise de côté remplace le premier combattant s’il est éliminé.
                </li>

                <li>
                    Au début de la partie, vous piochez 8 cartes de votre deck, de ces 8, vous en posez 3 qui seront vos cartes de support sur la table. (Un deck contient max. 40 cartes et uniquement des cartes Supply Drop et Friend)
                </li>

                <li>
                    À chaque tour, lancez votre jeton pour déterminer quel type d'attaque votre combattant va effectuer:
                    <ul>
                        <li>
                            Pile -&gt; attaque de base.
                        </li>
                        <li>
                            Face -&gt; Possibilité d'attaque spéciale.
                        </li>
                    </ul>
                </li>
                <li>
                    Pour chaque attaque, une carte de support de votre choix peut être utilisée (Friend ou Supply Drop).
                </li>
                <li>
                    Une fois le tour utilisée, la carte support est mise hors du jeu. Le joueur re-pige le nombre de cartes nécéssaire afin d'en avoir cinq en main.
                </li>
                <li>
                    Une fois le tour joué, la carte support est placée hors du jeu. Vous devez la remplacer en utilisant une des 5 cartes de votre main. Ensuite, vous pigez une nouvelle carte pour compléter votre jeu.
                </li>
                <li>
                    Une carte Titan ou Anti-T peut changer de forme seulement si vous avez joué la carte <Link to="/carte?n=platii">Plat II</Link>. Le joueur qui change de forme ne peut pas attaquer durant le même tour.
                </li>
                <li>
                    Le premier joueur à éliminer les deux cartes de l'adversaire l'emporte.
                </li>
            </ul>
        </div>
    );
}

export default Reglements;