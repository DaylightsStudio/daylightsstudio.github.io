
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
            bg={background} /> 
    );
}

Eckko_ev.displayName = 'eckko_ev';

export default Eckko_ev;
            