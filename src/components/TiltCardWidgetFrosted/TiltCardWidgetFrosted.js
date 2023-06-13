import React from 'react';
import Tilt from 'react-parallax-tilt';
import './TiltCardWidgetFrosted.css'

function TiltCardWidgetFrosted({
    text,
    background,
    overlay,
    blur_mask,
    size = 1,
    width = "48vmin",
    height = "66vmin"
}) {
    return (
        <div className='tilt'>
            <Tilt
                className="parallax-tilt-frosted"
                tiltReverse={true}
                transitionSpeed={1500}
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                perspective={1000}
                glareEnable={true}
                glareMaxOpacity={0.3}
                gyroscope={true}
                glareColor="white"
                glarePosition="all"
                glareBorderRadius='20px'
                scale={1.1}
                style={{
                    width: width,
                    height: height,
                    transformStyle: "preserve-3d"
                }}>

                <img
                    src={overlay}
                    className="overlay-frosted"
                    style={{
                        width: width
                    }}
                    alt="pic"
                />

                <div className="blur-layer-frosted">
                    <img
                        className='clipped-layer'
                        src={blur_mask}
                        style={{
                            width: width,
                            height: height
                        }}>
                    </img>
                </div>

                <img
                    src={background}
                    className="background-frosted"
                    style={{
                        width: width
                    }}
                    alt="pic"
                />
            </Tilt>
        </div>
    );
}

export default TiltCardWidgetFrosted;