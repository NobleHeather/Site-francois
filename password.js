let passDiv = document.getElementById('motDePasse');
let passInput = document.getElementById('enterpass');
let btnInput = document.getElementById('submitpass');

let blogPage = document.getElementById('wrapper');

//* Si on valide le mot de passe avec entrer
passInput.addEventListener('keyup', function(e) {
    e.preventDefault();
    heatherPassClear();

    if (e.keyCode === 13) {
        console.log('KEYUP PASS');
        let pass = passInput.value;
        console.log(pass);

        // PostPass(pass);
        ComparePass(pass);
    }
});

//* Si on valide le mot de passe en cliquant sur le bouton
btnInput.addEventListener('click', function(e) {
    e.preventDefault();
    heatherPassClear();

    let pass = passInput.value;
    console.log(pass);

    // PostPass(pass);
    ComparePass(pass);
});

//* A faire une fois pour enregistrer MDP puis désactiver
const PostPass = async function(pass) {

    let req = {
        name: 'Dad',
        password: pass
    };

    fetch('http://localhost:3000/api/pass', {
    // fetch('https://memory-piafs.herokuapp.com/api/fiche', {
        method: "POST",
        headers : {
            'Accept' : 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify(req)
    })
    .then(response => response.json())
    .then(json => {
        console.log(json);

    })
    .catch((e) => {
        console.log(e);
    })
}

//* Vérifie le mot de passe
const ComparePass = async function(pass) {

    let req = {
        name: 'Dad',
        password: pass
    };

    //* ce truc ok, renvoie 'token'
    fetch('http://localhost:3000/api/pass/checkpass', {
    // fetch('https://memory-piafs.herokuapp.com/api/fiche', {
        method: "POST",
        headers : {
            'Accept' : 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify(req)
    })
    .then(response => {
        response.json();
        if(response.ok) {
            EnterBlog();
        } else {
            console.log('response not ok');
            HeatherHelpPass(response);
        }
    })
    .catch((e) => {
        console.log(e);
    })
}

function EnterBlog() {
    passDiv.style.display = "none";
    blogPage.style.display = "block";
}