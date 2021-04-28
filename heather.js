//* PASSWORD

let heatherDivPass = document.querySelector('#motDePasse > div > .heather');
let heatherText = document.querySelector('#motDePasse > div > .heather > p');
let heatherSvg = document.querySelector('#motDePasse > div > .heather > svg');

// !! a remettre
// heatherDivPass.style.opacity = '0';
// !!

// !! a supprimer
let blogPage = document.getElementById('wrapper');
blogPage.style.display = "block";
// !! a supprimer

function heatherPassClear() {
    heatherDivPass.style.opacity = '0';
    heatherText.innerHTML = 'Cliquez-moi pour avoir de l\'aide';
}

let heatherTab = [
    'Le serveur dit 401, vous avez dû faire une faute de frappe',
    'Le serveur dit 500, c\'est lui qui a un problème, revenez plus tard',
    [
        'Il faut entrer l\'année en entier (pas satisfait ? cliquez encore)',
        'Vous n\'avez pas oublié votre date de naissance, si ? (pas satisfait ? cliquez encore)',
        'Il ne faut mettre que des chiffres, pas de \\ ou de - ou de . (pas satisfait ? cliquez encore)',
        'Sur chrome, Vous pouvez faire : ctrl+maj+i (ctrl+maj+j sur firefox) et regarder dans console le numéro de status à 3 chiffres pour le dire à l\'informaticien (sinon cliquez-moi jusqu\'à avoir une autre réponse)'
    ],
    'Vous n\'avez pas entré votre mot de passe',
    [
        'Pour écrire un mot en gras, encadrez-le avec &lt;strong> & &lt;/strong> :<br/>je suis un mot en &lt;strong><strong>gras</strong>&lt;/strong>',
        'Pour écrire un mot en italique, encadrez-le avec &lt;em> & &lt;/em> :<br/>je suis un mot en &lt;em><em>italique</em>&lt;/em>',
        'Pour écrire un sous-titre, encadrez-le avec &lt;span> & &lt;/span> :<br/>je suis un &lt;h3><span>sous-titre</span>&lt;/h3>',
        'La date est par défaut le jour même mais il est possible de la modifier',
        'Si j\'étais vous je garderais une sauvegarde word de mes articles, on n\'est jamais à l\'abri des bugs'
    ],
    {
        vide : 'Le résumé n\'est pas obligatoire, mais il faut au moins un titre et un contenu !',
        balise : 'Est-ce que vous avez bien refermé toutes vos balises ? chaque < doit avoir son pendant >'

    }
]
function HeatherHelpPass(response) {

    console.log(response);
    console.log(response.status);
    console.log(passInput.value);
    heatherDivPass.style.opacity = '1';

    heatherSvg.addEventListener('click', function() {

        if (passInput.value == '') {
            heatherText.innerHTML = heatherTab[3];
        } else {
            if (response.status == 401) {
                //* unauthorized
                heatherText.innerHTML = heatherTab[0];
            } else if (response.status == 500) {
                //* err serveur
                heatherText.innerHTML = heatherTab[1];
            } else {
                let index = Math.floor(Math.random() * (heatherTab[2].length));
                heatherText.innerHTML = heatherTab[2][index];
                console.log(response.status);
            }
        }
    });

}
//* titre

let heatherDivZero = document.querySelector('.salutations > div');
let heatherTitre = document.querySelector('.salutations > .heather');
let heatherTitreTxt = document.querySelector('.salutations > .heather > p');
let heatherTitreSvg = document.querySelector('.salutations > .heather > svg');

let colorTab = [
    'text-primary',
    'text-warning',
    'text-secondary',
    'text-success',
    'text-dark'
]

let index = Math.floor(Math.random() * (heatherTab[4].length));
let colorIndex = Math.floor(Math.random() * (colorTab.length));

heatherTitreTxt.innerHTML = heatherTab[4][index];
// heatherTitreTxt.setAttribute('class', colorTab[colorIndex]);
// heatherTitreSvg.setAttribute('class', colorTab[colorIndex]);
//* Help
// heatherDivZero.style.display = "none";
// heatherDivZero.style.cursor = 'pointer';

let heatherBlogDiv = document.querySelector('.blog > .heather');
heatherBlogDiv.style.opacity = '0';

let heatherBlogSvg = document.querySelector('.blog > .heather > svg');
let heatherBlogText = document.querySelector('.blog > .heather > p');
// heatherDiv.style.display = "none";

function verifForm () {
    console.log('VERIF FORM');
    // console.log(titleInput.value);
    if (titleInput.value == '' || articleInput.value == '') {
        heatherBlogDiv.style.opacity = '1';
        heatherBlogText.innerHTML = heatherTab[5].vide;
        return false;
    } else if (!verifBalises()) {
        verifBalises();
        heatherBlogDiv.style.opacity = '1';
        heatherBlogText.innerHTML = heatherTab[5].balise;
        return false;
    } else {
        return true;
    }
}

function verifBalises() {
    console.log('VERIF BALISES');

    let article = articleInput.value;
    let OpenBalise = article.lastIndexOf('<');
    let CloseBalise = article.lastIndexOf('>');
    console.log(OpenBalise, CloseBalise);
    if (CloseBalise < OpenBalise) {
        return false
    } else {
        return true;
    }
    // console.log(OpenBalise);

}
// verifBalises();
// console.log(heatherDiv);
//* Si on affiche Heather, passer le h2 en col-3 & cacher heatherDivZero

heatherDivZero.addEventListener('click', function() {

    //* affichage random de petites phrases

});