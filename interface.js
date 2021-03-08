//on récupère la page du blog et on crée une structure vide
let wrapperBlog = document.getElementById("wrapperBlog");
let newArticle = document.createElement("div");

newArticle.innerHTML = 
"<div><h2>Titre</h2><div><p><strong>Résumé :</strong></p><p>contenuRésumé</p></div><p>ContenuArticle</p><p>Date</p></div>";

//on ajoute structure à la fin
wrapperBlog.appendChild(newArticle); //? comment gérer la mise en page ? 

//dans blog, on récupère les éléments de la structure
let wrapperInterface = document.getElementById('wrapperInterface');
let otherArticle = document.getElementById('otherArticle');

let title = newArticle.querySelector("h2"); //? ça récupère <h2>Titre</h2>, est-ce qu'il ne faudrait pas récupérer juste Titre ?
let paragraphes = newArticle.getElementsByTagName("p");
let resume = paragraphes[0];
let contenuResume = paragraphes[1];
let contenuArticle = paragraphes[2];
let date = paragraphes[3];

//dans interface, on récupère les éléments à remplir
let inputs = document.getElementsByTagName("input");
let titleInput = inputs[0];
let resumeInput = inputs[1];
let articleInput = inputs[2];
let dateInput = inputs[3];
let publierArticle = document.getElementById("publierArticle");

//// title.style.color = "#DDD" <-FONCTIONNE

////title.textContent = "allo"; <-FONCTIONNE AUSSI

let titreInput = document.getElementById("titreInput");
//// titreInput.style.opacity = 0; <-FONCTIONNE

titreInput.addEventListener("change", function() {
    //// titreInput.style.opacity = 0; <-FONCTIONNE
    //! comment changer le contenu de titre ?
    
    title.textContent = titreInput; //? donne "object element input" problème au niveau capture title
//? voir comment j'avais capturé name/repname
});

//! prévoir de sauvegarder un fichier .txt si le site bug !

// titleInput.addEventListener("click", function() {
//     publierArticle.style.color = "#DDD";
// })

//Quand on clique sur le bouton
otherArticle.style.display = 'none';
publierArticle.addEventListener("click", function() {

    //faire disparaître interface de création
    wrapperInterface.style.display = 'none'; //?why fonctionne pas ?
    //changer contenu de paragraphe personnal greeting
    let name = localStorage.getItem('name');
    personalGreeting.textContent = 'Un autre article, ' + name + ' ?';
    //faire apparaitre bouton
    otherArticle.style.display = 'block';



});


function updateTexte(textInput, text) {

    textInput
    text.textContent
}
titleInput.addEventListener ('change', function() {
    
});

title.up
// const name = document.getElementById("name");
// const repname = document.getElementById("repname");

// name.addEventListener("change", updateValue);

// function updateValue(e) {
// 	repname.textContent = e.target.value;
// }


otherArticle.addEventListener('click', function() {
    //faire réapparaître interface de création et disparaître bouton
    wrapperInterface.style.display = 'block';
    otherArticle.style.display = 'none';

})