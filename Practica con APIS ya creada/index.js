// URL de la API
const API_URL = "https://freetestapi.com/api/v1/movies";
const options = {
    method: "GET",
    headers: {
        "API-KEY": ""
    }
}

// funcion para obtener datos

const obtenerDatos = async () => {
    try {
        const response = await fetch(API_URL);  

        if (!response.ok) throw new Error("Error en la solicitud");

        const data = await response.json();
        console.log(data);

        // Funcion para renderizar las Cards
        renderizarCards(data);
    } catch (error) {
        console.error("Error: ", error);
    }
};

const renderizarCards = (data) => {
    const container = document.getElementById("cards-container");
    container.innerHTML = ""; // Limpiar el contenido anterior.

    data.forEach((item) => {
        // Crear los elementos de las Cards
        const card = document.createElement("div");
        card.classList.add("card");

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        const cardContainerTitleAndImage = document.createElement("div");
        cardContainerTitleAndImage.classList.add("container-image-title");

        const cardImage = document.createElement("img");
        cardImage.classList.add("image-title");
        cardImage.src = item.poster;

        const cardTitle = document.createElement("h3");
        cardTitle.classList.add("card-title");
        cardTitle.textContent = item.title;

        const cardDescription = document.createElement("p");
        cardDescription.classList.add("card-description");
        cardDescription.textContent = item.email;

        const cardUsername = document.createElement("p");
        cardUsername.classList.add("card-username");
        cardUsername.textContent = item.username;

        // Apendizarlos a la card y al document
        cardBody.appendChild(cardContainerTitleAndImage)
        cardContainerTitleAndImage.appendChild(cardTitle)
        cardContainerTitleAndImage.appendChild(cardImage)
        card.appendChild(cardBody);
        container.appendChild(card);
    });
};

// Llama a la funcion para obtener datos y renderizar las cards cuando la pagina se carga
document.addEventListener("DOMContentLoaded", obtenerDatos);
