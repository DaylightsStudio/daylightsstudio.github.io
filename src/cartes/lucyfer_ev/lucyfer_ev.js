
import React from 'react';
import TiltCardWidget from '../../components/TiltCardWidget/TiltCardWidget';
import foreground from './assets/foreground.png';
import middleground from './assets/middleground.png';
import background from './assets/background.png';

function Lucyfer_ev() {
    return (
        <TiltCardWidget 
            fg={foreground}
            mg={middleground} 
            bg={background} 
            middlegroundTransformCSS = "translateZ(25px) translateY(-90px) translateX(-20px) scale(1.05)"
            backgroundTransformCSS="translateZ(0px) translateY(0px) scale(1.2)" /> 
    );
}

export default Lucyfer_ev;
            