import { useState } from "react"
import "./HeaderBar.css"

// // // // // // // // // // // // // // // -=|=- \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ 
// Code pris de/Code taken from https://blog.logrocket.com/create-responsive-navbar-react-css/  \\
// // // // // // // // // // // // // // // -=|=- \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\

export default function HeaderBar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <nav className="navigation">
        
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}>
      </button>

      <img src="../../Titans_logo.png"></img>

      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }>

        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}