import shutil
import os

def deplacerFichiers(dir):

    foreground = "{foreground}"
    middleground = "{middleground}"
    background = "{background}"

    for root, dirs, files in os.walk(dir):
        for d in dirs:
            nomCarte = d[3:].replace(" ", "_").lower()
            nomCarteCap = nomCarte.capitalize()

            ancienEmplacement = str(f"./src/pages/{d}/")
            # print(ancienEmplacement)

            nouvelEmplacement = str(f"./src/pages/{nomCarte}/assets/")
            # print(nouvelEmplacement)

            source = ancienEmplacement
            destination = nouvelEmplacement
            
            # gather all files
            allfiles = os.listdir(source)
            
            os.makedirs(nouvelEmplacement)

            # iterate on all files to move them to destination folder
            for f in allfiles:
                src_path = os.path.join(source, f)
                dst_path = os.path.join(destination, f)
                shutil.move(src_path, dst_path)

            
            # os.rename(ancienEmplacement, nouvelEmplacement)

            f = open(f"./src/pages/{nomCarte}/{nomCarte}.js", "x")
            f.write("""
                import React from 'react';
                import TiltCardWidget from '../../components/TiltCardWidget/TiltCardWidget';
                import foreground from './assets/foreground.png';
                import middleground from './assets/middleground.png';
                import background from './assets/background.png';

                function """ + nomCarteCap + """() {
                    return (
                        <TiltCardWidget 
                            fg={foreground}
                            mg={middleground} 
                            bg={background} /> 
                    );
                }

                {nomCarteCap}.displayName = '{nomCarte}';

                export default """ + nomCarteCap + """;
            """)
            f.close()


            

def afficherImports(dir):
    for root, dirs, files in os.walk(dir):
        for d in dirs:

            nomCarte = d[3:].replace(" ", "_").lower()
            nomCarteCap = nomCarte.capitalize()

            print(f"import {nomCarteCap} from './pages/{nomCarte}/{nomCarte}'")

def afficherRoutes(dir):
    for root, dirs, files in os.walk(dir):
        for d in dirs:

            nomCarte = d[3:].replace(" ", "_").lower()
            nomCarteCap = nomCarte.capitalize()
            
            print("{path: '/" + nomCarte + "', element: <" + nomCarteCap + " />,},")

def afficherBoutonsRouter(dir):
    for root, dirs, files in os.walk(dir):
        for d in dirs:

            nomCarte = d.replace(" ", "_").lower()
            nomCarteCap = nomCarte.capitalize()
            
            print("<li><button><a href={`" + nomCarte + "`}>" + nomCarteCap + "</a></button></li>")


#deplacerFichiers("src/pages")

#afficherImports("src/pages")
print()
#afficherRoutes("src/pages")

afficherBoutonsRouter("src/pages")

