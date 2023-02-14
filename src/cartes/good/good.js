
import React from 'react';
import TiltCardWidget from '../../components/TiltCardWidget/TiltCardWidget';
import foreground from './assets/foreground.webp';
import middleground from './assets/middleground.webp';
import background from './assets/background.webp';

function Good() {
    return (
        <TiltCardWidget 
            fg={foreground}
            mg={middleground} 
            bg={background} /> 
    );
}

Good.displayName = 'good';

export default Good;
            