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

            ancienEmplacement = str(f"./Deck Web/{d}")
            print(ancienEmplacement)

            nouvelEmplacement = str(f"./src/cartes/{nomCarte}/assets/")
            print(nouvelEmplacement)

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
                print("\t" + src_path + " -> " + dst_path)

            
            f = open(f"./src/cartes/{nomCarte}/{nomCarte}.js", "x")
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

""" + nomCarteCap + """.displayName = '""" + nomCarte + """';

export default """ + nomCarteCap + """;
            """)
            f.close()


def creerImgCartesThumbnails(dir):
    arr = []
    arrNomCartes = []

    for root, dirs, files in os.walk(dir):
        for f in files:
            nomCarte = f[3:-4].replace(" ", "_").lower()
            nomCarteCap = nomCarte.capitalize()

            ancienEmplacement = str(f"./Deck final/{f}")
            # print(ancienEmplacement)

            nouvelEmplacement = str(f"./src/cartesThumbnails/{nomCarte}.png")
            # print(nouvelEmplacement)

            shutil.copy(ancienEmplacement, nouvelEmplacement)
            # print("\t" + ancienEmplacement + " -> " + nouvelEmplacement)

            print(f"import {nomCarteCap} from '../cartesThumbnails/{nomCarte}.png'")

            arrNomCartes.append(f)

        arrNomCartes.sort()
        print(arrNomCartes)

        for f in arrNomCartes:
            nomCarte = f[3:-4].replace(" ", "_").lower()
            nomCarteCap = nomCarte.capitalize()

            

            if ("_card" in nomCarte):
                nomCarte = nomCarte[:-5]

            if (".png" in f):
                f = f[:-4]

            if ("card" in f.lower()):
                f = f[:-5]

            html = """
<div className="item">
    <img src={""" + nomCarteCap + """}></img>
    <h2 className="editionTitre">""" + f + """</h2>
    <button><Link to={`/carte?n=""" + nomCarte + """`}>Afficher la carte</Link></button>
</div>
            """

            arr.append(html)
        
        for item in arr:
            print(item)
            

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


# deplacerFichiers("./Deck Web")

#afficherImports("src/pages")
print()
#afficherRoutes("src/pages")

# afficherBoutonsRouter("src/pages")

creerImgCartesThumbnails("./Deck final/")