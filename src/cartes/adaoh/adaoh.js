import React from 'react';
import TiltCardWidget from '../../components/TiltCardWidget/TiltCardWidget';
import foreground from './assets/foreground.png';
import middleground from './assets/middleground.png';
import background from './assets/background.png';
import '../../components/pageCarte.css'


function Adaoh() {
    
    return (
        <TiltCardWidget
            fg={foreground}
            mg={middleground}
            bg={background}
            middlegroundTransformCSS = "translateZ(25px) translateY(-25px) scale(1.1)" />
    );
}

export default Adaoh;