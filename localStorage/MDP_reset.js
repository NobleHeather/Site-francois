
const formReset = document.getElementById('reinitialiser');
const changePass = document.querySelector('.reinitialiser');
const oldPass = document.querySelector('#ancienpass');
const newPass = document.querySelector('#nouveaupass');
const submit2 = document.querySelector('#submit2');

const resetMDP = document.querySelector('.resetMDP');
const mailPass = document.querySelector('#mailpass');


console.log(localStorage.getItem('pass'));
// Stop the form from submitting when a button is pressed
formReset.addEventListener('submit', function(e) {
    e.preventDefault();
  });

  //si on appuie sur le input name submit2 alors on rentre dans le if
// if(isset($_POST'submit2')) { //! c'est du php ça non ?

// run function when the 'submit2' button is clicked
submit2.addEventListener('click', function() {
    console.log('allo?');
    if (oldPass == localStorage.getItem('pass')) { //!test pas local storage ? ou alors problème sur oldPass ?
        localStorage.removeItem('pass');
        localStorage.setItem('pass', newPass.value);
        console.log('changement pass ok');
    } else {
        console.log('erreur changement mdp');
    }   
});
// }

// document.body.onload = DisplayCheck;