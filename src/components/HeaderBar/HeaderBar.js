import { useState } from "react"
import "./HeaderBar.css"
import Logo from './Titans_logo.png'
import { Link } from "react-router-dom"


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

            <Link to="/" id="logo">
                <img src={Logo} height="30px" alt="Logo Titans" />
            </Link>
            
            <div
                className={ isNavExpanded ? "navigation-menu expanded" : "navigation-menu" }>

                <ul>
                    <li>
                        <Link
                            onClick={() => {setIsNavExpanded(!isNavExpanded)}}
                            to="/">
                            Accueil
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={() => {setIsNavExpanded(!isNavExpanded)}}
                            to="/cartes">
                            Cartes
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={() => {setIsNavExpanded(!isNavExpanded)}}
                            to="/faq">
                            FAQ
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={() => {setIsNavExpanded(!isNavExpanded)}}
                            to="/apropos">
                            À propos
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}