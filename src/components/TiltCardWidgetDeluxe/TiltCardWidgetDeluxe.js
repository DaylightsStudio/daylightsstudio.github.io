import React from 'react';
import Tilt from 'react-parallax-tilt';
import './TiltCardWidgetDeluxe.css'

function TiltCardWidgetDeluxe({
    fg,
    shiny,
    bg,
    size = 1,
    width = "48vmin",
    height = "67vmin"
}) {
    return (
        <div className='tilt'>
            <Tilt
                className="parallax-tilt-deluxe"
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
                    backgroundImage: "url('" + shiny + "')",
                    width: width,
                    height: height
                    }}>

                <img
                    src={fg}
                    className="foreground-deluxe"
                    style={{
                        width: width
                    }}
                    alt="pic" />

                <img
                    src={bg}
                    className="background-deluxe"
                    style={{
                        width: width
                    }}
                    alt="pic" />

            </Tilt>
        </div>
    );
}

export default TiltCardWidgetDeluxe;