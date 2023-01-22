import React from 'react';
import foreground from './assets/foreground.png';
import shiny from './assets/shiny.png'
import background from './assets/background.png';
import TiltCardWidgetDeluxe from '../../components/TiltCardWidgetDeluxe/TiltCardWidgetDeluxe';

function DaylightsDeluxe() {
    return (
        <TiltCardWidgetDeluxe
            fg={foreground}
            shiny={shiny}
            bg={background} /> 
    );
}

DaylightsDeluxe.displayName = 'daylights-deluxe';

export default DaylightsDeluxe;