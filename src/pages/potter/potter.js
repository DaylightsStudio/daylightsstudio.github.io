import React from 'react';
import TiltCardWidget from '../../TiltCardWidget';
import Tilt from 'react-parallax-tilt';
import foreground from './assets/foreground.png';
import middleground from './assets/middleground.png';
import background from './assets/background.png';

function Potter() {
    return (
        <TiltCardWidget text="potter" fg={foreground} mg={middleground}/> 
    );
}

export default Potter;