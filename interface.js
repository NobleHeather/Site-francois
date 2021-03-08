//on récupère la page du blog et on crée une structure vide
let wrapperBlog = document.getElementById("wrapperBlog");
let newArticle = document.createElement("div");

newArticle.innerHTML = 
"<div><h2>Titre</h2><div><p><strong>Résumé :</strong></p><p>contenuRésumé</p></div><p>ContenuArticle</p><p>Date</p></div>";
// console.log(newArticle);


//on ajoute structure à la fin
wrapperBlog.appendChild(newArticle); //? comment gérer la mise en page ? 

//dans blog, on récupère les éléments de la structure
let wrapperInterface = document.getElementById('wrapperInterface');
let creation = document.getElementById('creation');
let otherArticle = document.getElementById('otherArticle');

let titles = newArticle.getElementsByTagName("h2");
let title = titles[0];
let paragraphes = newArticle.getElementsByTagName("p");
let resumeTitre = paragraphes[0]; //? ça sert à rien ça concrètement
let resume = paragraphes[1];
let article = paragraphes[2];
let date = paragraphes[3];

//dans interface, on récupère les éléments à remplir
// let inputs = document.getElementsByTagName("input");
// inputs.style.opacity = 0;
let titleInput = document.getElementById('titreInput');
// titleInput.style.opacity = 0;
let resumeInput = document.getElementById('resumeInput');
// resumeInput.style.opacity = 0;
let dateInput = document.getElementById('dateInput');
// dateInput.style.opacity = 0;
let articleInput = document.getElementById('articleInput');
// articleInput.style.opacity = 0;
let enregistrerArticle = document.getElementById("enregistrerArticle");
let publierArticle = document.getElementById("publierArticle");

// title = "titre";
//// title.style.color = "#DDD" <-FONCTIONNE

////title.textContent = "allo"; <-FONCTIONNE AUSSI

// let titreInput = document.getElementById("titreInput");
//// titreInput.style.opacity = 0; <-FONCTIONNE

// titreInput.addEventListener("change", function() {
    //// titreInput.style.opacity = 0; <-FONCTIONNE
    //! comment changer le contenu de titre ?
    
    // title.textContent = titreInput; //? donne "object element input" problème au niveau capture title
//? voir comment j'avais capturé name/repname
// });

//! prévoir de sauvegarder un fichier .txt si le site bug !

// titleInput.addEventListener("click", function() {
//     publierArticle.style.color = "#DDD";
// })

//Quand on clique sur le bouton

creation.addEventListener('submit', function(e) { //? ça fait quoi ça en fait ?
    e.preventDefault();
    // creation.style.border = '1px solid #000';
});

//cacher le bouton "ajouter un nouvel article"
otherArticle.style.display = 'none';

//*AJOUTER UN NOUVEAU CONTENU DANS LOCAL STORAGE
let tabContenu = []; //tableau avec tous les titres + leurs numéro
let num = 0; //numéro du titre
// let justKey = " ";

//fonction pour ajouter un nouveau titre dans le tableau des titres
function AjouteContenu(key, texte) {
// console.log("clé=" + key + " ,titre=" + title);
//ajoute un objet avec titre + index dans le tableau des titres
let obj = {};
obj[key] = texte;
tabContenu.push(obj);
// stock l'objet dans local storage
localStorage.setItem("newObject", JSON.stringify(tabContenu));
// récupère l'objet depuis local storage
let retrievedObject = localStorage.getItem("newObject");
// console.log("retrievedObject: ", JSON.parse(retrievedObject));
    //affiche tous les titres et leur index
    for (let [key, value] of Object.entries(obj)) {
        console.log(`${key}: ${value}`);
        //cible juste l'index
        let justKey = `${key}`;
        // let justValue = `${value}`;
        // console.log(justKey);
        //numérote le nouveau titre avec l'index disponible directement supérieur
        num = parseInt(justKey) + 1;
    }
    //ici on a tabContenu qui contient (index + input) * 4  
    console.log('index + input :' + retrievedObject); //= tabContenu dans storage
}
let newObject = localStorage.getItem("newObject");
console.log('index + input :' + newObject); //= tabContenu dans storage

let publication = []; //tab pour stocker les articles
let retrievedPublication = localStorage.getItem("newPublication");

function AjoutePublication(index, tab) {

    i = 0;
    while (i < publication.length) {
        console.log(i);
        if (i != null) { //case remplie
            i++;
        } else { //remplir case
            //met le tableau contenant l'article en entier dans une case du tableau publication
            publication.push(newObject);
            console.log(publication);
            i++;
            //! stocker dans storage de manière à avoir :
            //! publication[article, article, article]

        }
    }
    
}

//quand on clique sur bouton publier un article, fonction se lance
publierArticle.addEventListener('click', function() {
    
    AjoutePublication(?, newObject) // '?' doit être l'article. newObject ?

});
// AjouteContenu (num, "yo"); 
// AjouteContenu (num, "yoo"); 
//* JUSQUE ICI

////Donc on peut mettre un tableau dans un tableau dans localStorage
let tabTest = ["case1", ["case inception"], "case2"];
localStorage.setItem("tabTest", JSON.stringify(tabTest));
let retTabTest = localStorage.getItem("tabTest");
// console.log(retTabTest);
////fin du test "flemme-de-lire-la-doc"

enregistrerArticle.addEventListener("click", function() {

    //*FONCTIONNE
    // //faire disparaître interface de création
    // wrapperInterface.style.display = 'none'; //?why fonctionne pas ?
    // //changer contenu de paragraphe personnal greeting
    // let name = localStorage.getItem('name');
    // personalGreeting.textContent = 'Un autre article, ' + name + ' ?';
    // //faire apparaitre bouton
    // otherArticle.style.display = 'block';
    //*JUSQUE ICI

    // if (localStorage.getItem('title')) {

    // } else {
    //     console.log('erreur');
    // }

    // let tabPublication = []; //tableau avec tous les titres + leurs numéro
    // let i = 0; //numéro du titre

    //fonction pour ajouter un nouveau titre dans le tableau des titres
    // function AjoutePublication(index, tableau) {
    // // console.log("clé=" + key + " ,titre=" + title);
    // //ajoute un objet avec titre + index dans le tableau des titres
    //     let obj = {};
    //     obj[index] = tableau;
    //     tabPublication.push(obj);
    //     // stock l'objet dans local storage
    //     localStorage.setItem("newTableau", JSON.stringify(tabPublication));
    //     // récupère l'objet depuis local storage
    //     let returnedObject = localStorage.getItem("newTableau");
    //     for (let [key, value] of Object.entries(obj)) {
    //         console.log(`${key}: ${value}`);
    //         //cible juste l'index
    //         let justKey = `${key}`;
    //         i = parseInt(justKey) + 1;
    //     }
    // }

    // AjouteContenu("num", "titleInput.value");
    // AjoutePublication(i, AjouteContenu(num, titleInput.value));

    // let Publication = [];
    // AjouteContenu(num, titleInput.value);
    // let PublicationTitre = 
    // Publication.push[PublicationTitre];

    AjouteContenu(num, titleInput.value);
    AjouteContenu(num, resumeInput.value);
    AjouteContenu(num, dateInput.value);
    // let thisTitle = AjouteContenu(num, titleInput.value);
    // let thisResume = AjouteContenu(num, resumeInput.value);
    // let thisArticle = AjouteContenu(num, articleInput.value);
    // let thisDate = AjouteContenu(num, dateInput.value);
    // let thisPublication = [];
    // thisPublication.push(thisTitle);
    // thisPublication.push(thisResume);
    // thisPublication.push(thisArticle);
    // thisPublication.push(thisDate);
    // console.log(thisPublication);
    
    // console.log(publication);


    // title.textContent = 
    // AjouteContenu ("2", "yooo"); 


});

otherArticle.addEventListener('click', function() {
    //faire réapparaître interface de création et disparaître bouton
    wrapperInterface.style.display = 'block';
    otherArticle.style.display = 'none';
});



// function updateTexte(textInput, text) {

//     textInput
//     text.textContent
// }
// titleInput.addEventListener ('change', function() {
    
// });

// title.up
// const name = document.getElementById("name");
// const repname = document.getElementById("repname");

// name.addEventListener("change", updateValue);

// function updateValue(e) {
// 	repname.textContent = e.target.value;
// }


