import jsonData from '../../components/descriptions/operateurs.json'
import Carte from './Carte';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    useMediaQuery,
    Flex,
    Box,
} from '@chakra-ui/react'
import './pageCarte.css'
import { useSearchParams } from 'react-router-dom';
import { TwitchClip } from 'react-twitch-embed';
import { Link } from 'react-router-dom';

let nomCarte;

function carteExiste(nomCarteParam) {
    let isCarteExiste = false
    // let nomCarteParam = params.get('n')


    Object.entries(jsonData).forEach(elem => {
        if (elem[0] === nomCarteParam) {
            isCarteExiste = true;
        }
    });


    if (isCarteExiste) {
        nomCarte = nomCarteParam.toLowerCase();
        return nomCarteParam.toLowerCase();
    } else {
        return "not_found"
    }
}


const TypeCarte = () => {
    let categorie = jsonData[nomCarte]['carte']['categorie'];

    let referenceBasique;
    let referenceSpeciale;
    let deuxiemeDropdownSupplydrop;



    if (categorie === "supplydrop") {
        if (jsonData[nomCarte]["carte"]["bonus"]["avantage"]["specifique"]["avantage"] !== "") {
            deuxiemeDropdownSupplydrop = <AccordionItem>
                <h2>
                    <AccordionButton>
                        <AccordionIcon />
                        <Box as="span" flex='1' textAlign='left'>
                            <div className='TypeAttaque'>
                                Effet spécial
                            </div>
                        </Box>
                    </AccordionButton>
                </h2>
                <AccordionPanel>
                    <div className='InfoAttaque'>
                        <div className='SousTitreAttaque'>
                            Avantage spécifique:
                        </div>
                        <div className='ContenuSousTitreAttaque'>
                            {jsonData[nomCarte]["carte"]["bonus"]["avantage"]["specifique"]["avantage"]}
                        </div>
                        <div className='SousTitreAttaque'>
                            Affecte:
                        </div>
                        <div className='ContenuSousTitreAttaque'>
                            {jsonData[nomCarte]["carte"]["bonus"]["avantage"]["specifique"]["cible"].map(cible =>
                            (
                                <Link className='link-supplydrop-carte' to={`/carte?n=${cible}`}>{jsonData[cible]["nom"]}<br></br></Link>
                            )
                            )}
                        </div>
                    </div>
                </AccordionPanel>
            </AccordionItem>
        }

        return (
            <div className=''>
                <Accordion allowMultiple>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <AccordionIcon />
                                <Box as="span" flex='1' textAlign='left'>
                                    <div className='TypeAttaque'>
                                        Effet universel
                                    </div>
                                </Box>
                            </AccordionButton>
                        </h2>
                        <AccordionPanel>
                            <div className='InfoAttaque'>
                                <div className='SousTitreAttaque'>
                                    Avantage pour tout le monde:
                                </div>
                                <div className='ContenuSousTitreAttaque'>
                                    {jsonData[nomCarte]["carte"]["bonus"]["avantage"]["universel"]}
                                </div>
                            </div>
                        </AccordionPanel>
                    </AccordionItem>

                    {deuxiemeDropdownSupplydrop}
                </Accordion>
            </div>
        );
    }
    else if (categorie === "not_found") { return (<div></div>); }
    else {

        if (jsonData[nomCarte]["carte"]["attaques"]["basique"]["reference"].startsWith("clip=")) {
            referenceBasique = <TwitchClip clip={jsonData[nomCarte]["carte"]["attaques"]["basique"]["reference"].replace("clip=", "")} width="100%" autoplay="false" muted="false" />;
        } else {
            referenceBasique = jsonData[nomCarte]["carte"]["attaques"]["basique"]["reference"]
        }

        if (jsonData[nomCarte]["carte"]["attaques"]["speciale"]["reference"].startsWith("clip=")) {
            referenceSpeciale = <TwitchClip clip={jsonData[nomCarte]["carte"]["attaques"]["speciale"]["reference"].replace("clip=", "")} width="100%" autoplay="false" muted="false" />;
        } else {
            referenceSpeciale = jsonData[nomCarte]["carte"]["attaques"]["speciale"]["reference"]
        }

        return (
            <div className=''>
                <Accordion allowMultiple>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <AccordionIcon />
                                <Box as="span" flex='1' textAlign='left'>
                                    <div className='TypeAttaque'>
                                        Attaque basique
                                    </div>
                                </Box>
                            </AccordionButton>
                        </h2>
                        <AccordionPanel>
                            <div className='InfoAttaque'>
                                <div className='SousTitreAttaque'>
                                    Nom:
                                </div>
                                <div className='ContenuSousTitreAttaque'>
                                    {jsonData[nomCarte]["carte"]["attaques"]["basique"]["titre"]}
                                </div>

                                <br />

                                <div className='SousTitreAttaque'>
                                    Description:
                                </div>
                                <div className='ContenuSousTitreAttaque'>
                                    {jsonData[nomCarte]["carte"]["attaques"]["basique"]["sous_titre"]}
                                </div>

                                <br />

                                <div className='SousTitreAttaque'>
                                    Référence:
                                </div>
                                <div className='ContenuSousTitreAttaque'>
                                    {referenceBasique}
                                </div>
                            </div>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <AccordionIcon />
                                <Box as="span" flex='1' textAlign='left'>
                                    <div className='TypeAttaque'>
                                        Attaque spéciale
                                    </div>
                                </Box>
                            </AccordionButton>
                        </h2>
                        <AccordionPanel>
                            <div className='InfoAttaque'>
                                <div className='SousTitreAttaque'>
                                    Nom:
                                </div>
                                <div className='ContenuSousTitreAttaque'>
                                    {jsonData[nomCarte]["carte"]["attaques"]["speciale"]["titre"]}
                                </div>

                                <br />

                                <div className='SousTitreAttaque'>
                                    Description:
                                </div>
                                <div className='ContenuSousTitreAttaque'>
                                    {jsonData[nomCarte]["carte"]["attaques"]["speciale"]["sous_titre"]}
                                </div>

                                <br />

                                <div className='SousTitreAttaque'>
                                    Référence:
                                </div>
                                <div className='ContenuSousTitreAttaque'>
                                    {referenceSpeciale}
                                </div>
                            </div>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </div>
        );
    }
}


function CarteLayout() {
    let [searchParams] = useSearchParams();
    const nomCarteParams = searchParams.get("n");
    nomCarte = carteExiste(nomCarteParams);


    // https://github.com/chakra-ui/chakra-ui/discussions/4789#discussioncomment-1442248
    const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

    let carte_WidthOver768;
    let info_WidthOver768;

    document.title = `${jsonData[nomCarte]["nom"]} - Titans Card Game`

    if (isLargerThan768) {
        carte_WidthOver768 = "40%";
        info_WidthOver768 = "60%";
    } else {
        carte_WidthOver768 = '{{ base: "100%", md: "50%" }}';
        info_WidthOver768 = '{{ base: "100%", md: "50%" }}';
    }

    let numeroCarte
    if (jsonData[nomCarte]["carte"]["numero"] === 0)
        numeroCarte = "Max"
    else numeroCarte = jsonData[nomCarte]["carte"]["numero"]

    return (
        <div>
            <h1 id='nomCarte'>{jsonData[nomCarte]["nom"]}</h1>
            <p id='numeroCarte'>{numeroCarte}/{Object.keys(jsonData).length - 1}</p>

            <Flex direction={isLargerThan768 ? "row" : "column-reverse"}>
                <Box width={info_WidthOver768}>
                    <div className='SectionInfos'>
                        <TypeCarte />
                    </div>
                </Box>
                <Box width={carte_WidthOver768}>
                    <div className='SectionCarte' style={{ alignContent: 'center', margin: 'auto', textAlign: 'center' }}>
                        <Carte nomCarte={nomCarte} />
                    </div>
                </Box>
            </Flex>
        </div>
    );
}

export default CarteLayout;