import shutil
import os

def list_files(dir):

    foreground = "{foreground}"
    middleground = "{middleground}"
    background = "{background}"

    for root, dirs, files in os.walk(dir):
        for d in dirs:
            nomCarte = d[3:].replace(" ", "_").lower()
            nomCarteCap = nomCarte.capitalize()

            ancienEmplacement = str(f"./src/pages/{d}/")
            print(ancienEmplacement)

            nouvelEmplacement = str(f"./src/pages/{nomCarte}/assets")
            print(nouvelEmplacement)

            os.makedirs(nouvelEmplacement)
            os.rename(ancienEmplacement, nouvelEmplacement)

            f = open(f"{nomCarte}.js", "x")
            f.write("""
                import React from 'react';
                import TiltCardWidget from '../../components/TiltCardWidget/TiltCardWidget';
                import foreground from './assets/foreground.png';
                import middleground from './assets/middleground.png';
                import background from './assets/background.png';

                function {nomCarteCap}() {
                    return (
                        <TiltCardWidget 
                            fg={foreground}
                            mg={middleground} 
                            bg={background} /> 
                    );
                }

                export default {nomCarteCap}};
            """)
            
            f.close()

list_files("src/pages")