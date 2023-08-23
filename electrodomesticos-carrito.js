const electrodomesticosLs = JSON.parse(localStorage.getItem("electrodomesticos"));
const containerCards = document.querySelector("div");

const cardsAHtml = array => {
    const cards = array.map(element => `
        <div class="card" id="card-${element.id}">
            <button class="button-card" id="button-${element.id}">
                <i class="fa-solid fa-star"></i>
            </button>       
            <h2>
                ${element.name}
            </h2>
            <figure class="container-card">
                <img src="${element.img || "not-found.jpg"}" alt="imagen del electrodomestico ${element.name}">
            </figure>
            <h4>
                Type: ${element.type.join(" - ")}
            </h4>
            <h4>
                Precio: ${element.precio}
            </h4>
        </div>
    `).join("");

    containerCards.innerHTML = cards;
};

cardsAHtml(electrodomesticosLs);