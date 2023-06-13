
import React from 'react';
import TiltCardWidgetFrosted from '../../components/TiltCardWidgetFrosted/TiltCardWidgetFrosted';
import overlay from './assets/overlay.webp';
// import middleground from './assets/border.webp';
import background from './assets/background2.webp';
import blur_mask from './assets/blur_layer3.svg'

function Eckko_frosted() {
    return (
        <TiltCardWidgetFrosted 
            overlay={overlay}
            background={background}
            blur_mask={blur_mask}
        />
    );
}

Eckko_frosted.displayName = 'eckko_frosted';

export default Eckko_frosted;
            