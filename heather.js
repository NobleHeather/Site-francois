//* PASSWORD

let heatherDivPass = document.querySelector('#motDePasse > div > .heather');
let heatherText = document.querySelector('#motDePasse > div > .heather > p');
let heatherSvg = document.querySelector('#motDePasse > div > .heather > svg');

heatherDivPass.style.opacity = '0';

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
    'Vous n\'avez pas entré votre mot de passe' 
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

//* INTERFACE
let heatherDivZero = document.querySelector('.salutations > div > svg');
// heatherDivZero.style.display = "none";
heatherDivZero.style.cursor = 'pointer';

let titleHeather = document.querySelector('.blog > h2');

let heatherDiv = document.querySelector('.blog > .heather > svg');
heatherDiv.style.display = "none";


console.log(heatherDiv);
//* Si on affiche Heather, passer le h2 en col-3 & cacher heatherDivZero

heatherDivZero.addEventListener('click', function() {

    //* affichage random de petites phrases

});