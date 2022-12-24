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

            <a href="/" id="logo">
                <img src={Logo} height="30px" alt="Logo Titans" />
            </a>
            
            <div
                className={ isNavExpanded ? "navigation-menu expanded" : "navigation-menu" }>

                <ul>
                    <li>
                        <Link
                            className="navbar-item"
                            activeClassName="is-active"
                            to="/"
                            exact>
                            Accueil
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="navbar-item"
                            activeClassName="is-active"
                            to="/cartes"
                            exact>
                            Cartes
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="navbar-item"
                            activeClassName="is-active"
                            to="/faq"
                            exact>
                            FAQ
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="navbar-item"
                            activeClassName="is-active"
                            to="/apropos"
                            exact>
                            À propos
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}