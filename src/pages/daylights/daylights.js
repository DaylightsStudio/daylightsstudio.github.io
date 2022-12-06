import React from 'react';
import TiltCardWidget from '../../TiltCardWidget';
import Tilt from 'react-parallax-tilt';
import foreground from './assets/foreground.png';
import middleground from './assets/middleground.png';
import background from './assets/background.png';
import Constants from '../../constants'

function Daylights() {
    return (
        <TiltCardWidget 
            fg={foreground}
            mg={middleground} 
            bg={background}
            width={Constants.TiltCardWidget_width}/> 
    );
}

export default Daylights;