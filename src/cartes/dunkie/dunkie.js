
import React from 'react';
import TiltCardWidget from '../../components/TiltCardWidget/TiltCardWidget';
import foreground from './assets/foreground.png';
import middleground from './assets/middleground.png';
import background from './assets/background.png';

function Dunkie() {
    return (
        <TiltCardWidget 
            fg={foreground}
            mg={middleground} 
            bg={background} 
            backgroundTransformCSS = "translateZ(0px) translateY(-20px) translateX(-35px) scale(1.12)"/> 
    );
}

Dunkie.displayName = 'dunkie';

export default Dunkie;
            