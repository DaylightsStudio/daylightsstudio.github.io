
import React from 'react';
import TiltCardWidget from '../../components/TiltCardWidget/TiltCardWidget';
import foreground from './assets/foreground.png';
import middleground from './assets/middleground.png';
import background from './assets/background.png';

function Boulanger() {
    return (
        <TiltCardWidget 
            fg={foreground}
            mg={middleground} 
            bg={background} 
            backgroundTransformCSS="translateZ(0px) translateY(60px) translateX(-45px) scale(1.2)"/> 
    );
}

Boulanger.displayName = 'boulanger'

export default Boulanger;
            