import React from 'react';
import Tilt from 'react-parallax-tilt';
import './TiltCardWidgetDeluxe.css'

function TiltCardWidgetDeluxe({ 
    fg,
    bg,
    size = 1,
    width = "48vmin"
 }) {
      return (
        <div style={{transform:`scale(${size})`}}>
            <Tilt
                className="parallax-tilt"
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                tiltReverse={true}
                perspective={400}
                transitionSpeed={1500}
                scale={1.1}
                gyroscope={true} 
                style={{height: width, width: width}}>

                <img 
                    src={fg}
                    className="foreground-deluxe"
                    style={{
                        width: width}}
                    alt="pic" />

                <img 
                    src={bg} 
                    className="background-deluxe" 
                    style={{
                        width: width}} 
                    alt="pic" />
            </Tilt> 
        </div>
    ); 
}

export default TiltCardWidgetDeluxe;