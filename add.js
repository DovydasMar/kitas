"use strict";
console.log("add.js file was loaded");

const els = {
  forma: document.getElementById("forma"),
  miestas: document.getElementById("miestas"),
  kaina: document.getElementById("kaina"),
  aprasymas: document.getElementById("aprasymas"),
  nuotrauka: document.getElementById("nuotrauka"),
};

els.forma.addEventListener("submit", (event) => {
  event.preventDefault();
  const sarasas = {
    city: els.miestas.value,
    price: els.kaina.value,
    description: els.aprasymas.value,
    image: els.nuotrauka.value,
  };
  kurtiPosta(sarasas);
});

function kurtiPosta(obj) {
  fetch("https://robust-safe-crafter.glitch.me/", {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(obj),
  })
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.warn("ivyko klaida:", error);
    });
}
