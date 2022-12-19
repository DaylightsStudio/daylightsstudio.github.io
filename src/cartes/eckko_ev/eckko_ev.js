
import React from 'react';
import TiltCardWidget from '../../components/TiltCardWidget/TiltCardWidget';
import foreground from './assets/foreground.png';
import middleground from './assets/middleground.png';
import background from './assets/background.png';

function Eckko_ev() {
    return (
        <TiltCardWidget 
            fg={foreground}
            mg={middleground} 
            bg={background}
            middlegroundTransformCSS = "translateZ(25px) scale(1.15)"
            backgroundTransformCSS="translateZ(0px) translateY(-350px) scale(1.2)" /> 
    );
}

export default Eckko_ev;
            