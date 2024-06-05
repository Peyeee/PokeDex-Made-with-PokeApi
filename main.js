//!inicializacion de las APIS
let min = 1;
let max = 1000;
let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
const API_POKE = "https://pokeapi.co/api/v2/pokemon/"
let randomPokemon = `${API_POKE}${randomNumber}`
const nombre = document.getElementById("pokemonNombre")
const weight = document.getElementById("pokemonWeight")
const hp = document.getElementById("pokemonHP")
let image = document.getElementById("img")
let contador = [0, 101]


console.log(randomNumber);
console.log(randomPokemon)

// // let pruebah1 = document.createElement("h1")


const getData = async () => {
    try {
        const response = await fetch(randomPokemon);

        if (!response.ok) throw new Error("No pudimos conseguir la información");

        const data = await response.json();
        console.log(data);
        renderizarCards(data)
    }
    catch (error) {
        console.error("error", error);
    }
}
const renderizarCards = (data) => {

    weight.textContent = `Pesa: ${data.weight}kg`
    let prueba = data.name
    nombre.textContent = prueba
    nombre.textContent = prueba.charAt(0).toUpperCase() + prueba.slice(1);
    // nombre.textContent = data.name;
    // hp.textContent = `${data.stats[0].stat.name}`
    hp.textContent = `Vida: ${data.stats[0].base_stat}`;
    image.src = data.sprites.front_default;

    // data.forEach((item) => {
    //     // let name = document.getElementById("pokemonNombre")
    //     let name = document.createElement("h1")
    //     name.textContent = item.name;
    //     console.log(item.name)
    // });
}
console.log(renderizarCards)
// renderizarCards();

document.addEventListener("DOMContentLoaded", getData)

