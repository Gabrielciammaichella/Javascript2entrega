console.log(electrodomesticos);

const containerCards = document.querySelector(".container-cards");

const cardsAHtml = array => {
  const cards = array.reduce((acc, element) => {
    return acc + `
    <div class="card" id="card-${element.id}">
        <button class="button-card" id="button-${element.id}">
        <i class="fa-solid fa-cart-shopping"></i>
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
    </div>`;
  }, "");

  containerCards.innerHTML = cards;
};

cardsAHtml(electrodomesticos);

const allCards = document.querySelectorAll(".button-card");

let electrodomesticosCarrito = [];

const eventoCards = (nodos, array) => {
  for (let i = 0; i < nodos.length; i++) {
    nodos[i].onclick = (e) => {
      const id = e.currentTarget.id.slice(7);
      const buscarElectrodomestico = array.find(element => element.id === Number(id));
      electrodomesticosCarrito.push(buscarElectrodomestico);
      localStorage.setItem("electrodomesticos", JSON.stringify(electrodomesticosCarrito));
      Toastify({
        text: `Se ha añadido a ${buscarElectrodomestico.name} al carrito.`,
        className: "info",
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
      }).showToast();
    };
  }
};

eventoCards(allCards, electrodomesticos);