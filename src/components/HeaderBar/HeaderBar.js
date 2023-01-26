import { useState } from "react"
import "./HeaderBar.css"
import Logo from './Titans_logo.png'
import HideShowMedia from '../HideShowMedia/HideShowMedia'
import { Link } from "react-router-dom"
import { Tooltip } from '@chakra-ui/react'


// // // // // // // // // // // // // // // -=|=- \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ 
// Code pris de/Code taken from https://blog.logrocket.com/create-responsive-navbar-react-css/  \\
// // // // // // // // // // // // // // // -=|=- \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\

function toggleCookieMedia() 
{
    console.log(document.cookie)
    if (document.cookie === "showMedia=false") 
    {
        if (window.confirm("Voulez vous activer les médias? Cela va utiliser plus de données.")) {
            document.cookie = "showMedia=true"
            window.location.reload(false);
        }
    }
    else
    {
        document.cookie = "showMedia=false"
        window.location.reload(false);
    }
}

export default function HeaderBar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false)

    return (
        <nav className="navigation">

            <button
                className="hamburger"
                onClick={() => { setIsNavExpanded(!isNavExpanded) }}>
                ☰
            </button>

            <div className="tooltip-toggle-media">
                <Tooltip label='Afficher/Cacher les médias volumineux.'>
                    <button 
                    className="toggle-media" 
                    onClick={() => { toggleCookieMedia() }}>
                        <HideShowMedia />
                    </button>
                </Tooltip>

            </div>

            <Link to="/" id="logo">
                <img src={Logo} height="30px" alt="Logo Titans" />
            </Link>

            <div
                className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>

                <ul>
                    <li>
                        <Link
                            onClick={() => { setIsNavExpanded(!isNavExpanded) }}
                            to="/">
                            Accueil
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={() => { setIsNavExpanded(!isNavExpanded) }}
                            to="/cartes">
                            Cartes
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={() => { setIsNavExpanded(!isNavExpanded) }}
                            to="/reglements">
                            Règlements
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={() => { setIsNavExpanded(!isNavExpanded) }}
                            to="/apropos">
                            À propos
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}