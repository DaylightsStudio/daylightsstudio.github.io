
import React from 'react';
import TiltCardWidget from '../../components/TiltCardWidget/TiltCardWidget';
import foreground from './assets/foreground.png';
import middleground from './assets/middleground.png';
import background from './assets/background.png';

function Bad_ev() {
    return (
        <TiltCardWidget 
            fg={foreground}
            mg={middleground} 
            bg={background} 
            backgroundTransformCSS="translateZ(0px) translateY(-140px) translateX(20px) scale(1.1)"
            middlegroundTransformCSS="translateZ(25px) translateX(-35px) scale(1.15)"
            /> 
    );
}

export default Bad_ev;
            