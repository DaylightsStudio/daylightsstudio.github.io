import jsonData from '../components/descriptions/operateurs.json'
import Carte from '../pages/Carte';

const windowUrl = window.location.search;
const params = new URLSearchParams(windowUrl);
const nomCarte = carteExiste().toLowerCase();

function carteExiste() {
    let isCarteExiste = false
    let nomCarteParam = params.get('n')

    Object.entries(jsonData).forEach(elem => {
        if (elem[0] == nomCarteParam) {
            isCarteExiste = true;
        }
    });
    

    if (isCarteExiste) {
        return nomCarteParam.toLowerCase();
    } else {
        return "not_found"
    }
}


const TypeCarte = () => {
    let categorie = jsonData[nomCarte]['carte']['categorie'];

    if (categorie == "supplydrop") {
        return (
            <div>
                <p>test</p>
            </div>
        );
    }
    else if (categorie == "not_found") { return (<div></div>); }
    else {
        return (
            <div>
                <details>
                    <summary>
                        Attaque normale
                    </summary>
                    <table>
                        <tr>
                            <td><b>Nom</b></td>
                            <td>{jsonData[nomCarte]["carte"]["attaques"]["basique"]["titre"]}</td>
                        </tr>
                        <tr>
                            <td><b>Description</b></td>
                            <td>{jsonData[nomCarte]["carte"]["attaques"]["basique"]["description"]}</td>
                        </tr>
                        <tr>
                            <td><b>Dommages</b></td>
                            <td>{jsonData[nomCarte]["carte"]["attaques"]["basique"]["numero"]}</td>
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
                            <td>{jsonData[nomCarte]["carte"]["attaques"]["speciale"]["titre"]}</td>
                        </tr>
                        <tr>
                            <td><b>Description</b></td>
                            <td>{jsonData[nomCarte]["carte"]["attaques"]["speciale"]["description"]}</td>
                        </tr>
                        <tr>
                            <td><b>Dommages</b></td>
                            <td>{jsonData[nomCarte]["carte"]["attaques"]["speciale"]["numero"]}</td>
                        </tr>
                    </table>
                </details>
            </div>
        );
    }
}


function CarteLayout() {
    return (
        <div>
            <Carte nomCarte={nomCarte} />
            <div>
                <h1 id='nomCarte'>{jsonData[nomCarte]["nom"]}</h1>
                <p>{jsonData[nomCarte]["description"]["bio"]}</p>
                <div className="container">


                    <div className="item" id="description">

                    <TypeCarte />

                    </div>
                </div>
            </div>
        </div>
    );
}

export default CarteLayout;