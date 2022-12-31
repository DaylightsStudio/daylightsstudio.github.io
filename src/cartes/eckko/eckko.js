
import React from 'react';
import TiltCardWidget from '../../components/TiltCardWidget/TiltCardWidget';
import foreground from './assets/foreground.png';
import middleground from './assets/middleground.png';
import background from './assets/background.png';

function Eckko() {
    return (
        <TiltCardWidget 
            fg={foreground}
            mg={middleground} 
            bg={background} 
            middlegroundTransformCSS = "translateZ(25px) translateY(-20px) scale(1.1)"
            backgroundTransformCSS = "translateZ(0px) translateY(-20px) translateX(-30px) scale(1.1)" /> 
    );
}

Eckko.displayName = 'eckko';

export default Eckko;
            