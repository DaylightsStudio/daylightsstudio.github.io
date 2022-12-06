import React from 'react';
import Tilt from 'react-parallax-tilt';
import foreground from './assets/foreground.png';
import middleground from './assets/middleground.png';
import background from './assets/background.png';

class TiltCardWidget extends React.Component {
    render() {
      return (
        <Tilt
            className="background"
            tiltMaxAngleX={20}
            tiltMaxAngleY={10}
            tiltReverse={true}
            perspective={1000}
            transitionSpeed={1500}
            scale={1.1}
            gyroscope={true} >

            <img src={foreground} style={{height: "auto", width: "48vmin"}} className="foreground" alt="pic" />
            <img src={middleground} style={{height: "auto", width: "48vmin"}} className="middleground" alt="pic" />
        </Tilt> 
      ); 
    }
  }

export default TiltCardWidget;