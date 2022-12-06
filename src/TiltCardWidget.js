import React from 'react';
import Tilt from 'react-parallax-tilt';

function TiltCardWidget(props) {
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
                gyroscope={true} >

                <img src={props.fg} style={{height: "auto", width: "48vmin"}} className="foreground" alt="pic" />
                <img src={props.mg} style={{height: "auto", width: "48vmin"}} className="middleground" alt="pic" />
                <img src={props.bg} style={{height: "auto", width: "48vmin"}} className="background" alt="pic" />
            </Tilt> 
        </div>
    ); 
}

export default TiltCardWidget;