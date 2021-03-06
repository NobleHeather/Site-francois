//on récupère la page du blog et on crée une structure vide
let wrapperBlog = document.getElementById("wrapperBlog");
let newArticle = document.createElement("div");

newArticle.innerHTML = 
"<div><h2>Titre</h2><div><p><strong>Résumé :</strong></p><p>contenuRésumé</p></div><p>ContenuArticle</p><p>Date</p></div>";

//on ajoute structure à la fin
wrapperBlog.appendChild(newArticle); //? comment gérer la mise en page ?
 
//dans blog, on récupère les éléments de la structure
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
    
    title.textContent = titreInput; //? donne "object element input"
});

// titleInput.addEventListener("click", function() {
//     publierArticle.style.color = "#DDD";
// })

// //Quand on clique sur le bouton
// publierArticle.addEventListener("click", function() {

//     //et on update title
//     titleInput.addEventListener("change", function() {
//         title = titleInput.textContent;
//     });
    
//     titleInput = 3;
//     titleInput.textContent = "4";
//     console.log(titleInput.textContent);
//     console.log(title);
// });


// const name = document.getElementById("name");
// const repname = document.getElementById("repname");

// name.addEventListener("change", updateValue);

// function updateValue(e) {
// 	repname.textContent = e.target.value;
// }