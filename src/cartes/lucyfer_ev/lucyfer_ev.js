
import React from 'react';
import TiltCardWidget from '../../components/TiltCardWidget/TiltCardWidget';
import foreground from './assets/foreground.webp';
import middleground from './assets/middleground.webp';
import background from './assets/background.webp';

function Lucyfer_ev() {
    return (
        <TiltCardWidget 
            fg={foreground}
            mg={middleground} 
            bg={background} /> 
    );
}

Lucyfer_ev.displayName = 'lucyfer_ev';

export default Lucyfer_ev;
            