import { useState } from "react"
import "./HeaderBar.css"
import Logo from './Titans_logo.png'

// // // // // // // // // // // // // // // -=|=- \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ 
// Code pris de/Code taken from https://blog.logrocket.com/create-responsive-navbar-react-css/  \\
// // // // // // // // // // // // // // // -=|=- \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\

export default function HeaderBar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false)

    return (
        <nav className="navigation">

            <button
                className="hamburger"
                onClick={() => {setIsNavExpanded(!isNavExpanded)}}>
                    ☰
            </button>

            <a href="/" id="logo">
                <img src={Logo} height="30px" alt="Logo Titans" />
            </a>
            
            <div
                className={ isNavExpanded ? "navigation-menu expanded" : "navigation-menu" }>

                <ul>
                    <li>
                        <a href="./">Accueil</a>
                    </li>
                    <li>
                        <a href="./cartes">Cartes</a>
                    </li>
                    <li>
                        <a href="./faq">FAQ</a>
                    </li>
                    <li>
                        <a href="./apropos">À propos</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}