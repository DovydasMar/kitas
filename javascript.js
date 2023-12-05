"use strict";
console.log("javascript.js file was loaded");

const baseUrl = "https://robust-safe-crafter.glitch.me/";
const els = {
  allBtn: document.getElementById("allTowns"),
  cardContainer: document.getElementById("masterDiv"),
  vilniausBtn: document.getElementById("vilnius"),
  kaunoBtn: document.getElementById("kaunas"),
  klaipBtn: document.getElementById("klaipeda"),
};
console.log("els ===", els);

function getAllCards(url) {
  fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      els.cardContainer.innerHTML = "";
      data.forEach((postObj) => {
        createItem(postObj);
        return data;
      });
      console.log(data);
    })
    .catch((error) => {
      console.warn("ivyko klaida:", error);
    });
}
getAllCards(baseUrl);

els.allBtn.addEventListener("click", (e) => {
  e.preventDefault();
  getAllCards(baseUrl);
});

function createItem(postObj) {
  const card = document.createElement("div");

  card.classList.add("col");

  card.innerHTML = `
  <div class="card h-100">
    <img src="${postObj.image}" class="card-img-top" alt="https://picsum.photos/200/300">
    <div class="card-body">
      <h5 class="card-title"> ${postObj.city} </h5>
      <p class="card-text">${postObj.description}</p>
    </div>
    <div class="card-footer">
      <small class="text-body-secondary">${postObj.price} europietiškų</small>
    </div>
  </div>
`;
  els.cardContainer.append(card);
}

function createItemByCity(miestas) {
  fetch(baseUrl)
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      els.cardContainer.innerHTML = "";
      data.forEach((postObj) => {
        if (postObj.city === miestas) {
          createItem(postObj);
          return data;
        }
      });
    })
    .catch((error) => {
      console.warn("ivyko klaida:", error);
    });
}

els.vilniausBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const belekoksMiestas = "Vilnius";
  createItemByCity(belekoksMiestas);
});

els.kaunoBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const belekoksMiestas = "Kaunas";
  createItemByCity(belekoksMiestas);
});

els.klaipBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const belekoksMiestas = "Klaipeda";
  createItemByCity(belekoksMiestas);
});
