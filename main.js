//!inicializacion de las APIS
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const API_POKE = "https://pokeapi.co/api/v2/pokemon/"


let randomNumber1 = getRandomNumber(1, 100);
let randomPokemon1 = `${API_POKE}${randomNumber1}`;

let randomNumber2 = getRandomNumber(1, 100);
let randomPokemon2 = `${API_POKE}${randomNumber2}`;

let randomNumber3 = getRandomNumber(1, 100);
let randomPokemon3 = `${API_POKE}${randomNumber3}`;

console.log(randomPokemon1);
console.log(randomPokemon2);
console.log(randomPokemon3);



const nombre = document.getElementById("pokemonNombre")
const weight = document.getElementById("pokemonWeight")
const hp = document.getElementById("pokemonHP")
let image = document.getElementById("img")

const nombre2 = document.getElementById("pokemonNombre2")
const weight2 = document.getElementById("pokemonWeigh2")
const hp2 = document.getElementById("pokemonHP2")
let image2 = document.getElementById("img2")

const nombre3 = document.getElementById("pokemonNombre3")
const weight3 = document.getElementById("pokemonWeight3")
const hp3 = document.getElementById("pokemonHP3")
let image3 = document.getElementById("img3")




// // let pruebah1 = document.createElement("h1")
//!Primera Card

const getData = async () => {
    try {
        const response = await fetch(randomPokemon1);

        if (!response.ok) throw new Error("No pudimos conseguir la información");

        const data = await response.json();
        console.log(data);
        renderizarCards(data)
    }
    catch (error) {
        console.error("error", error);
    }
}
//!Segunda Card

const getDataCard2 = async () => {
    try {
        const response = await fetch(randomPokemon2);

        if (!response.ok) throw new Error("No pudimos conseguir la información");

        const data = await response.json();
        console.log(data);
        renderizarCards2(data)
    }
    catch (error) {
        console.error("error", error);
    }
}
//!Tercera Card

const getDataCard3 = async () => {
    try {
        const response = await fetch(randomPokemon3);

        if (!response.ok) throw new Error("No pudimos conseguir la información");

        const data = await response.json();
        console.log(data);
        renderizarCards3(data)
    }
    catch (error) {
        console.error("error", error);
    }
}

//!Data card 1

const renderizarCards = (data) => {

    weight.textContent = `Pesa: ${data.weight}kg`
    let prueba = data.name
    nombre.textContent = prueba
    nombre.textContent = prueba.charAt(0).toUpperCase() + prueba.slice(1);
    hp.textContent = `Vida: ${data.stats[0].base_stat}`;
    image.src = data.sprites.front_default;

}

//!Data card 2

const renderizarCards2 = (data) => {

    weight2.textContent = `Pesa: ${data.weight}kg`
    let prueba2 = data.name
    nombre2.textContent = prueba2
    nombre2.textContent = prueba2.charAt(0).toUpperCase() + prueba2.slice(1);
    hp2.textContent = `Vida: ${data.stats[0].base_stat}`;
    image2.src = data.sprites.front_default;

}

//!Data card 3

const renderizarCards3 = (data) => {

    weight3.textContent = `Pesa: ${data.weight}kg`
    let prueba3 = data.name
    nombre3.textContent = prueba3
    nombre3.textContent = prueba3.charAt(0).toUpperCase() + prueba3.slice(1);
    hp3.textContent = `Vida: ${data.stats[0].base_stat}`;
    image3.src = data.sprites.front_default;

}

console.log(renderizarCards)
// renderizarCards();

document.addEventListener("DOMContentLoaded", getData)
document.addEventListener("DOMContentLoaded", getDataCard2)
document.addEventListener("DOMContentLoaded", getDataCard3)

