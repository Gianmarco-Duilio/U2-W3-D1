class Users {
  constructor(firstName, lastName, age, location) {
    this.name = firstName;
    this.surname = lastName;
    this.age = age;
    this.location = location;
  }
}

const duilioGianmarco = new Users("Gianmarco", "Duilio", "27", "Anzio");
console.log(duilioGianmarco);

const marioRossi = new Users("Mario", "Rossi", "55", "Anzio");
console.log(marioRossi);

function confrontoEta(utente1, utente2) {
  if (utente1.age > utente2.age) {
    return utente1.name + " è più anziano di " + utente2.name;
  } else if (utente1.age < utente2.age) {
    return utente2.name + " è più anziano di " + utente1.name;
  } else {
    return "Entrambi hanno la stessa età.";
  }
}

console.log(confrontoEta(duilioGianmarco, marioRossi));

// const formNode = document.querySelector("form");
// formNode.onsubmit = function (e) {
//   e.preventDefault();
//   console.log("FORM INVIATO");
// };

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }
}
const myArray = [];

document.getElementById("petForm").addEventListener("submit", function (event) {
  event.preventDefault();
  let petName = document.getElementById("petName").value;
  let ownerName = document.getElementById("ownerName").value;
  let species = document.getElementById("species").value;
  let breed = document.getElementById("breed").value;
  let pet = new Pet(petName, ownerName, species, breed);
  myArray.push(pet);
  console.log(myArray);
});
