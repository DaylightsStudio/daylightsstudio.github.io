
import React from 'react';
import TiltCardWidget from '../../components/TiltCardWidget/TiltCardWidget';
import foreground from './assets/foreground.png';
import middleground from './assets/middleground.png';
import background from './assets/background.png';

function Potter_ev() {
    return (
        <TiltCardWidget 
            fg={foreground}
            mg={middleground} 
            bg={background} 
            backgroundTransformCSS="translateZ(0px) translateY(-10px) translateX(60px) scale(1.2)"
            middlegroundTransformCSS = "translateZ(25px) scale(1.15)"/> 
    );
}

Potter_ev.displayName = 'potter_ev';

export default Potter_ev;
            