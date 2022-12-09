
import React from 'react';
import TiltCardWidget from '../../components/TiltCardWidget/TiltCardWidget';
import foreground from './assets/foreground.png';
import middleground from './assets/middleground.png';
import background from './assets/background.png';

function Bat_titan() {
    return (
        <TiltCardWidget 
            fg={foreground}
            mg={middleground} 
            bg={background} 
            middlegroundTransformCSS = "translateZ(25px) translateY(-15px) scale(1.1)"/> 
    );
}

export default Bat_titan;
            