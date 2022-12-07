import shutil
import os

def list_files(dir):
    for root, dirs, files in os.walk(dir):
        for d in dirs:
            ancienEmplacement = str("./src/pages/" + d)
            print(ancienEmplacement)

            nouvelEmplacement = str("./src/pages/assets")
            print(nouvelEmplacement)

            os.makedirs(nouvelEmplacement)
            shutil.move(ancienEmplacement, nouvelEmplacement)

#print(list_files("src/pages"))
list_files("src/pages")