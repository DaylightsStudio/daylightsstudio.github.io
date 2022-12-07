
                import React from 'react';
                import TiltCardWidget from '../../components/TiltCardWidget/TiltCardWidget';
                import foreground from './assets/foreground.png';
                import middleground from './assets/middleground.png';
                import background from './assets/background.png';

                function Gtii() {
                    return (
                        <TiltCardWidget 
                            fg={foreground}
                            mg={middleground} 
                            bg={background} /> 
                    );
                }

                export default Gtii;
            