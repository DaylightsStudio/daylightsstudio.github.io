import React from 'react';
import TiltCardWidget from '../../components/TiltCardWidget/TiltCardWidget';
import foreground from './assets/foreground.png';
import middleground from './assets/middleground.png';
import background from './assets/background.png';
import '../../components/pageCarte.css'


const jsonData = {
    "adaoh" : {
        "nom" : "Adaoh",
        "description" : {
            "bio" : "Adaoh il fait des tres bon plans a r6",
            "chaine" : ""
        },
        "carte" : {
            "numero" : 19,
            "categorie" : "friends",
            "pv" : 0,
            "attaques" : {
                "basique" : {
                    "titre" : "Jai un plan",
                    "numero" : "10",
                    "sous_titre" : "mais on a pas de smoke",
                    "description" : "fait x, y et z",
                    "reference" : "twitch.tv/..."
                },
                "speciale" : {
                    "titre" : "On smoke",
                    "numero": "S+",
                    "sous_titre" : "ladversaire perd un tour le temps que la fumee se dissipe",
                    "description" : "fait x, y et z",
                    "reference" : "twitch.tv/..."
                }
            }
        }        
    }
}


function Adaoh() {
    
    console.log(jsonData)

    return (

        <div>
            <h1 id='nomCarte'>{jsonData["adaoh"]["nom"]}</h1>
            <p>{jsonData["adaoh"]["description"]["bio"]}</p>
            <div className="container">
                <div className="item" id="carte">
                    <TiltCardWidget
                        fg={foreground}
                        mg={middleground}
                        bg={background}
                        middlegroundTransformCSS = "translateZ(25px) translateY(-25px) scale(1.1)" />
                </div>

                <div className="item" id="description">

                <details>
                    <summary>
                        Attaque normale
                    </summary>
                    <table>
                        <tr>
                            <td><b>Nom</b></td>
                            <td>{jsonData["adaoh"]["carte"]["attaques"]["basique"]["titre"]}</td>
                        </tr>
                        <tr>
                            <td><b>Description</b></td>
                            <td>{jsonData["adaoh"]["carte"]["attaques"]["basique"]["description"]}</td>
                        </tr>
                        <tr>
                            <td><b>Dommages</b></td>
                            <td>{jsonData["adaoh"]["carte"]["attaques"]["basique"]["numero"]}</td>
                        </tr>
                    </table>
                </details>

                <details>
                    <summary>
                        Attaque spéciale
                    </summary>
                    <table>
                        <tr>
                            <td><b>Nom</b></td>
                            <td>{jsonData["adaoh"]["carte"]["attaques"]["speciale"]["titre"]}</td>
                        </tr>
                        <tr>
                            <td><b>Description</b></td>
                            <td>{jsonData["adaoh"]["carte"]["attaques"]["speciale"]["description"]}</td>
                        </tr>
                        <tr>
                            <td><b>Dommages</b></td>
                            <td>{jsonData["adaoh"]["carte"]["attaques"]["speciale"]["numero"]}</td>
                        </tr>
                    </table>
                </details>


                </div>
            </div>
        </div>
    );
}

export default Adaoh;