import React from 'react';
import TiltCardWidget from '../../TiltCardWidget';
import foreground from './assets/foreground.png';
import middleground from './assets/middleground.png';
import background from './assets/background.png';
import ConstantsPageCarte from '../../constants'

function Daylights() {
    return (
        <TiltCardWidget 
            fg={foreground}
            mg={middleground} 
            bg={background}
            width={ConstantsPageCarte.TiltCardWidget_width} /> 
    );
}

export default Daylights;