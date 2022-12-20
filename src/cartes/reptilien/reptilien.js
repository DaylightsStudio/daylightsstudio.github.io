
import React from 'react';
import TiltCardWidget from '../../components/TiltCardWidget/TiltCardWidget';
import foreground from './assets/foreground.png';
import middleground from './assets/middleground.png';
import background from './assets/background.png';

function Reptilien() {
    return (
        <TiltCardWidget 
            fg={foreground}
            mg={middleground} 
            bg={background} 
            backgroundTransformCSS = "translateZ(0px)  scale(1)"/> 
    );
}

export default Reptilien;
            