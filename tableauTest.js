////FONCTIONNE
let tabTitles = []; //tableau avec tous les titres + leurs numéro
let num = 0; //numéro du titre

//fonction pour ajouter un nouveau titre dans le tableau des titres
function AjouteTitre(key, title) {
// console.log("clé=" + key + " ,titre=" + title);
//ajoute un objet avec titre + index dans le tableau des titres
let obj = {};
obj[key] = title;
tabTitles.push(obj);
// stock l'objet dans local storage
localStorage.setItem("newObject", JSON.stringify(tabTitles));
// récupère l'objet depuis local storage
let retrievedObject = localStorage.getItem("newObject");
// console.log("retrievedObject: ", JSON.parse(retrievedObject));
    //affiche tous les titres et leur index
    for (let [key, value] of Object.entries(obj)) {
        console.log(`${key}: ${value}`);
        //cible juste l'index
        let JustKey = `${key}`;
        console.log(JustKey);
        //numérote le nouveau titre avec l'index disponible directement supérieur
        num = parseInt(JustKey) + 1;
    }

}

AjouteTitre("1", "NouveauTitre");
AjouteTitre(num, "NouveauTitre2");
AjouteTitre(num, "NouveauTitre3");
AjouteTitre(num, "NouveauTitre4");

////JUSQUE LA


////CI-APRES : BROUILLON
// AjouteTitre("3", "NouveauTitre3");

// console.log(tabTitles);
// console.log(tabTitles[0]);

// const object1 = {
//     a: 'somestring',
//     b: 42
//   };
  
//   for (let [key, value] of Object.entries(obj)) {
//     console.log(`${key}: ${value}`);
//   }

let test = '3title';
// console.log((test.substring(0, 1)));
let testNumber = parseInt(test.substring(0, 1)); 
let calcul = 1 + testNumber;
// console.log(calcul);

let tab = ['texte1', 'texte2', 'texte3'];
// console.log (tab);
localStorage.setItem('tabTexte', tab);
getTab = localStorage.getItem('tabTexte');
// console.log(getTab);
