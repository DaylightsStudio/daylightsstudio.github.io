import jsonData from '../components/descriptions/operateurs.json'

function CarteLayout(props) {
    return (
    <div>
                <div>
            <h1 id='nomCarte'>{jsonData["adaoh"]["nom"]}</h1>
            <p>{jsonData["adaoh"]["description"]["bio"]}</p>
            <div className="container">
                <div className="item" id="carte">

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

        {
            props.children
        }
    </div>
);

}

export default CarteLayout;