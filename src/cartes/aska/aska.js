
import React from 'react';
import TiltCardWidget from '../../components/TiltCardWidget/TiltCardWidget';
import foreground from './assets/foreground.png';
import middleground from './assets/middleground.png';
import background from './assets/background.png';

function Aska() {
    return (
        <TiltCardWidget 
            fg={foreground}
            mg={middleground} 
            bg={background} 
            middlegroundTransformCSS = "translateZ(25px) translateX(-10px) scale(1.1)"/> 
    );
}

Aska.displayName = 'aska'

export default Aska;
            