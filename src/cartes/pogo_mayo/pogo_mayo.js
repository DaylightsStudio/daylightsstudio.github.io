
import React from 'react';
import TiltCardWidget from '../../components/TiltCardWidget/TiltCardWidget';
import foreground from './assets/foreground.webp';
import middleground from './assets/middleground.webp';
import background from './assets/background.webp';

function Pogo_mayo() {
    return (
        <TiltCardWidget 
            fg={foreground}
            mg={middleground} 
            bg={background} /> 
    );
}

Pogo_mayo.displayName = 'pogo_mayo';

export default Pogo_mayo;
            