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
    Spacer,
    Square,
    Center,
    Box,
} from '@chakra-ui/react'
import './pageCarte.css'

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

                                <br/>

                                <div className='SousTitreAttaque'>
                                    Description:
                                </div>
                                <div className='ContenuSousTitreAttaque'>
                                    {jsonData[nomCarte]["carte"]["attaques"]["basique"]["description"]}
                                </div>

                                <br/>

                                <div className='SousTitreAttaque'>
                                    Référence:
                                </div>
                                <div className='ContenuSousTitreAttaque'>
                                    {jsonData[nomCarte]["carte"]["attaques"]["basique"]["reference"]}
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
                               
                                <br/>

                                <div className='SousTitreAttaque'>
                                    Description:
                                </div>
                                <div className='ContenuSousTitreAttaque'>
                                    {jsonData[nomCarte]["carte"]["attaques"]["basique"]["description"]}
                                </div>
                               
                                <br/>

                                <div className='SousTitreAttaque'>
                                    Référence:
                                </div>
                                <div className='ContenuSousTitreAttaque'>
                                    {jsonData[nomCarte]["carte"]["attaques"]["speciale"]["reference"]}
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
    // https://github.com/chakra-ui/chakra-ui/discussions/4789#discussioncomment-1442248
    const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

    let carte_WidthOver768;
    let info_WidthOver768;

    if (isLargerThan768)
    {
        carte_WidthOver768 = "40%";
        info_WidthOver768 = "60%";
    } else {
        carte_WidthOver768 = '{{ base: "100%", md: "50%" }}';
        info_WidthOver768 = '{{ base: "100%", md: "50%" }}';
    }

    return (
        <div>
            <h1 id='nomCarte'>{jsonData[nomCarte]["nom"]}</h1>
            <p>{jsonData[nomCarte]["description"]["bio"]}</p>
            <p>{jsonData[nomCarte]["carte"]["numero"]}/{Object.keys(jsonData).length - 1}</p>

            <Flex direction={isLargerThan768 ? "row" : "column-reverse"}>
                <Box width={info_WidthOver768}>
                    <div className='SectionInfos'>
                        <TypeCarte />
                    </div>
                </Box>
                <Box width={carte_WidthOver768}>
                    <div className='SectionCarte' style={{alignContent:'center', margin:'auto', textAlign:'center'}}>
                        <Carte nomCarte={nomCarte} />
                    </div>
                </Box>
            </Flex>
        </div>
    );
}

export default CarteLayout;