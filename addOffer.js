
1
function valider formulaire(){
 
const title = document.getElementById('title').value;
 
const destination = document.getElementById('destination').value;
 
const dateDepart = document.getElementById('departure_date').value;
 
const dateRetour = document.getElementById('return_date').value;
 
const prix = document.getElementById('price').value;
 
 
if (title.length < 3) {
 
alert('Le titre doit contenir au moins 3 caractères.');
 
return false;
 
}
 
const regexDestination = /^[a-zA-Z ]{3,}$/;
 
if (!regexDestination.test(destination)) {
 
alert('La destination doit contenir uniquement des lettres et des espaces, et au moins 3 caractères.');
 
return false;
 
}
 
const dateDepartDate = new Date(dateDepart);
 
const dateRetourDate = new Date(dateRetour);
 
if (dateRetourDate <= dateDepartDate) {
 
alert('La date de retour doit être ultérieure à la date de départ.');
 
return false;
 
}
 
if (prix <= 0) {
 
alert('Le prix doit être un nombre positif.');
 
return false;
 
}
 
alert('Le formulaire est valide.');
 
return true;
}
function valider formulaire2(){
 
const formulaire = document.getElementById('formulaire');
 
formulaire.addEventListener('submit',(e) => {
 
e.preventDefault();
 
const titre = document.getElementById('title').value;
 
const destination = document.getElementById('destination').value;
 
const dateDepart = document.getElementById('departure_date').value;
 
const dateRetour = document.getElementById('return_date').value;
 
const prix = document.getElementById('price').value;
 
// Vérifier le titre
 
if (titre.length < 3) {
 
document.getElementById('title').innerHTML = 'Le titre doit contenir au moins 3 caractères.';
 
} else {
 
document.getElementById('title').innerHTML = 'correct';
 
}
 
// Vérifier la destination
 
const regexDestination = /^[a-zA-Z ]{3,}$/;
 
if (!regexDestination.test(destination)) {
 
document.getElementById('destination').innerHTML = 'La destination doit contenir uniquement des lettres et des espaces, et au moins 3 
caractères.';
 
} else {
 
document.getElementById('destination').innerHTML = 'correct';
 
}
 
// Vérifier les dates
 
const dateDepartDate = new Date(dateDepart);
 
const dateRetourDate = new Date(dateRetour);
 
if (isNaN(dateDepartDate.getTime())) {
 
document.getElementById('departure_date').innerHTML = 'La date de départ doit être une date valide.';
 
} else if (isNaN(dateRetourDate.getTime())) {
 
document.getElementById('return_date').innerHTML = 'La date de retour doit être une date valide.';
 
} else if (dateRetourDate <= dateDepartDate) {
 
document.getElementById('return_date').innerHTML = 'La date de retour doit être ultérieure à la date de départ.';
 
} else {
 
document.getElementById('departure_date').innerHTML = 'correct';
 
document.getElementById('return_date').innerHTML = 'correct';
 
}
 
// Vérifier le prix
 
if (prix <= 0) {
 
document.getElementById('price').innerHTML = 'Le prix doit être un nombre positif.';
 
} else {
 
document.getElementById('price').innerHTML='correct';
}

