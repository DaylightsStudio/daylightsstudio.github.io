
import React from 'react';
import TiltCardWidget from '../../components/TiltCardWidget/TiltCardWidget';
import foreground from './assets/foreground.png';
import middleground from './assets/middleground.png';
import background from './assets/background.png';

function Frenchfox_ev() {
    return (
        <TiltCardWidget 
            fg={foreground}
            mg={middleground} 
            bg={background} 
            middlegroundTransformCSS = "translateZ(25px) translateX(-10px) scale(1.2)"
            backgroundTransformCSS = "translateZ(0px) translateY(85px) translateX(-50px) scale(1.2)"/> 
    );
}

export default Frenchfox_ev;
            