import React from 'react';
import "./HideShowMedia.css"
// import HideMedia from './hide-media.png'
// import ShowMedia from './show-media.png'
import {ReactComponent as HideMedia} from './hide-media.svg'
import {ReactComponent as ShowMedia} from './show-media.svg'


function HideShowMedia() {
    
    if (document.cookie === "showMedia=true")
    {
        console.log("afficher media = true")
        return (
            <div>
                <HideMedia className='toggleMediaImage'/>
            </div>
        );
    }
    else {
        console.log("afficher media = false")
        document.cookie = "showMedia=false"
        return (
            <div>
                <ShowMedia className='toggleMediaImage'/>
            </div>
        );
    }
}

export default HideShowMedia