
import React from 'react';
import TiltCardWidget from '../../components/TiltCardWidget/TiltCardWidget';
import foreground from './assets/foreground.png';
import middleground from './assets/middleground.png';
import background from './assets/background.png';

function Lil_pink() {
    return (
        <TiltCardWidget 
            fg={foreground}
            mg={middleground} 
            bg={background} 
            middlegroundTransformCSS = "translateZ(25px) translateY(-40px) translateX(47px) scale(1.17)"/> 
    );
}

Lil_pink.displayName = 'lil_pink';

export default Lil_pink;
            