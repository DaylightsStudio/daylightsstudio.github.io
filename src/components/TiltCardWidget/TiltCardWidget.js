import React from 'react';
import Tilt from 'react-parallax-tilt';
import bgFrame from './backgroundFrame.png'
import './TiltCardWidget.css'

function TiltCardWidget({ 
    fg,
    mg,
    bg,
    size = 1,
    width = "48vmin",
    maxTiltAngleX = 10,
    maxTiltAngleY = 10,
    foregroundTransformCSS = "translateZ(40px)",
    middlegroundTransformCSS = "translateZ(25px)",
    backgroundFrameTransformCSS = "translateZ(10px)",
    backgroundTransformCSS = "translateZ(0px)",
 }) {
      return (
        <div style={{transform:`scale(${size})`}}>
            <Tilt
                className="parallax-tilt"
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                tiltReverse={true}
                perspective={1000}
                transitionSpeed={1500}
                scale={1.1}
                gyroscope={true} 
                style={{height: width, width: width}}>

                <img 
                    src={fg}
                    className="foreground"
                    style={{
                        width: width,
                        transform: foregroundTransformCSS}}
                    alt="pic" />

                <img 
                    src={mg}
                    className="middleground"
                    style={{
                        width: width,
                        transform: middlegroundTransformCSS}} 
                    alt="pic" />

                <img 
                    src={bgFrame} 
                    className="backgroundFrame" 
                    style={{
                        width: width, 
                        transform: backgroundFrameTransformCSS}} 
                    alt="pic" />

                <img 
                    src={bg} 
                    className="background" 
                    style={{
                        width: width, 
                        transform: backgroundTransformCSS}} 
                    alt="pic" />
            </Tilt> 
        </div>
    ); 
}

export default TiltCardWidget;