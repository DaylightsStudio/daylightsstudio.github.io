
import React from 'react';
import TiltCardWidget from '../../components/TiltCardWidget/TiltCardWidget';
import foreground from './assets/foreground.webp';
import middleground from './assets/middleground.webp';
import background from './assets/background.webp';

function Daylights() {
    return (
        <TiltCardWidget 
            fg={foreground}
            mg={middleground} 
            bg={background} /> 
    );
}

Daylights.displayName = 'daylights';

export default Daylights;
            