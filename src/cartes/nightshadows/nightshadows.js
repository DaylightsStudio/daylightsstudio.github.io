
import React from 'react';
import TiltCardWidget from '../../components/TiltCardWidget/TiltCardWidget';
import foreground from './assets/foreground.png';
import middleground from './assets/middleground.png';
import background from './assets/background.png';

function Nightshadows() {
    return (
        <TiltCardWidget 
            fg={foreground}
            mg={middleground} 
            bg={background}
            backgroundTransformCSS="translateZ(0px) translateY(0px) scale(1.2)"/> 
    );
}

Nightshadows.displayName = 'nightshadows';

export default Nightshadows;
            