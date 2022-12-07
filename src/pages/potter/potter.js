
                import React from 'react';
                import TiltCardWidget from '../../components/TiltCardWidget/TiltCardWidget';
                import foreground from './assets/foreground.png';
                import middleground from './assets/middleground.png';
                import background from './assets/background.png';

                function Potter() {
                    return (
                        <TiltCardWidget 
                            fg={foreground}
                            mg={middleground} 
                            bg={background} /> 
                    );
                }

                export default Potter;
            