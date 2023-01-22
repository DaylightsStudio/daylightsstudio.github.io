import React from 'react';
import Tilt from 'react-parallax-tilt';
import './TiltCardWidgetDeluxe.css'

function TiltCardWidgetDeluxe({
    fg,
    shiny,
    bg,
    size = 1,
    width = "100%"
}) {
    return (
        <div>
            <Tilt
                className="parallax-tilt-deluxe"
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                perspective={1000}
                glareEnable={true} 
                glareMaxOpacity={0.3} 
                glareColor="purple" 
                glarePosition="all"
                scale={1.1} 
                style={{backgroundImage: "url('" + shiny + "')"}}>

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