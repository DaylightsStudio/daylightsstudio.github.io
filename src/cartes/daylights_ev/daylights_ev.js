
import React from 'react';
import TiltCardWidget from '../../components/TiltCardWidget/TiltCardWidget';
import foreground from './assets/foreground.png';
import middleground from './assets/middleground.png';
import background from './assets/background.png';

function Daylights_ev() {
    return (
        <TiltCardWidget 
            fg={foreground}
            mg={middleground} 
            bg={background} /> 
    );
}

Daylights_ev.displayName = 'daylights_ev';

export default Daylights_ev;
            