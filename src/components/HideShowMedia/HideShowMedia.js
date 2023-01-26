import React from 'react';
import "./HideShowMedia.css"
import HideMedia from './hide-media.png'
import ShowMedia from './show-media.png'

function HideShowMedia() {
    
    if (document.cookie === "showMedia=true")
    {
        console.log("afficher media = true")
        return (
            <div>
                <img className="toggleMediaImage" src={HideMedia}></img>
            </div>
        );
    }
    else {
        console.log("afficher media = false")
        document.cookie = "showMedia=false"
        return (
            <div>
                <img className="toggleMediaImage" src={ShowMedia}></img>
            </div>
        );
    }
}

export default HideShowMedia