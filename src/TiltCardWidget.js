import React from 'react';
import Tilt from 'react-parallax-tilt';
import './TiltCardWidget.css'

function TiltCardWidget({ fg, mg, bg, width }) {
      return (
        <div>
            <Tilt
                className="parallax-tilt"
                tiltMaxAngleX={20}
                tiltMaxAngleY={10}
                tiltReverse={true}
                perspective={1000}
                transitionSpeed={1500}
                scale={1.1}
                gyroscope={true} 
                style={{height: width, width: width}}>

                <img src={fg} style={{height: "auto", width: width}} className="foreground" alt="pic" />
                <img src={mg} style={{height: "auto", width: width}} className="middleground" alt="pic" />
                <img src={bg} style={{height: "auto", width: width}} className="background" alt="pic" />
            </Tilt> 
        </div>
    ); 
}

export default TiltCardWidget;