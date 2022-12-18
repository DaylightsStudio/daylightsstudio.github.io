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
            "chaine" : "",
            "clips" : {
                "0" : "twitch.tv/...",
                "1" : "twitch.tv/..."
            }
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
                    "description" : "fait x, y et z"
                },
                "speciale" : {
                    "titre" : "On smoke",
                    "numero": "S+",
                    "sous_titre" : "ladversaire perd un tour le temps que la fumee se dissipe",
                    "description" : "fait x, y et z"
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
                    <table>
                        <tr>
                            <th>Company</th>
                            <th>Contact</th>
                        </tr>
                        <tr>
                            <td>Alfreds Futterkiste</td>
                            <td>Maria Anders</td>
                        </tr>
                        <tr>
                            <td>Centro comercial Moctezuma</td>
                            <td>Francisco Chang</td>
                        </tr>
                    </table>
                </div>
            </div>
        
        </div>
    );
}

export default Adaoh;